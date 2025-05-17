import React, { useRef, useEffect } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Create, Pt, Polygon } from "pts";
import { CONSTELLATION_TEMPLATES } from "./constellationTemplates";

const NODE_COUNT = 280; // Increased for richer starfield
const INSIGHT_COUNT = 18;
const CONSTELLATION_COUNT = 16; // Increased for more constellations
const INSIGHT_COLOR = "rgba(188, 82, 21, 1)";
const NODE_COLOR = "rgba(188, 82, 21, 0.35)";
const LINE_COLOR = "rgba(188, 82, 21, 0.6)";
const HIGHLIGHT_COLOR = "rgba(188, 82, 21, 1)";
const GLOW_COLOR = "rgba(188, 82, 21, 0.6)";
const BRIGHT_LINE_COLOR = "rgba(255, 170, 60, 1.0)";
const BRIGHT_GLOW_COLOR = "rgba(255, 210, 100, 0.95)";
const HOVERED_LINE_COLOR = "rgba(255, 140, 40, 0.85)";
const REGEN_INTERVAL = 18000; // Regenerate constellations every 18 seconds

function randomDepth() {
  // Create more variance in depth for better parallax effect
  return Math.pow(Math.random(), 1.5); // Bias toward foreground
}

function randomNode(space) {
  return {
    pos: new Pt(
      space.innerBound.x + Math.random() * space.innerBound.width,
      space.innerBound.y + Math.random() * space.innerBound.height
    ),
    z: randomDepth(),
    phase: Math.random() * Math.PI * 2,
    size: 1.5 + Math.random() * 6,
    alpha: 0,
    twinkle: 0.4 + Math.random() * 0.6,
    twinkleSpeed: 0.3 + Math.random() * 0.7,
    driftSpeed: 0.5 + Math.random() * 0.5,
  };
}

function edgesFromConvexHull(indices, nodes) {
  // Returns edges for a closed polygon (convex hull)
  const edges = [];
  for (let i = 0; i < indices.length; i++) {
    edges.push([indices[i], indices[(i + 1) % indices.length]]);
  }
  return edges;
}

function edgesFromMST(indices, nodes) {
  // Simple Prim's algorithm for MST
  const edges = [];
  const used = new Set([indices[0]]);
  while (used.size < indices.length) {
    let minDist = Infinity;
    let minEdge = null;
    for (let u of used) {
      for (let v of indices) {
        if (!used.has(v)) {
          const d = nodes[u].pos.$subtract(nodes[v].pos).magnitude();
          if (d < minDist) {
            minDist = d;
            minEdge = [u, v];
          }
        }
      }
    }
    if (minEdge) {
      edges.push(minEdge);
      used.add(minEdge[1]);
    } else {
      break;
    }
  }
  return edges;
}

function polygonsIntersect(polyA, polyB) {
  // Simple polygon intersection check using Separating Axis Theorem
  function getAxes(poly) {
    const axes = [];
    for (let i = 0; i < poly.length; i++) {
      const p1 = poly[i];
      const p2 = poly[(i + 1) % poly.length];
      const edge = p2.$subtract(p1);
      const normal = new Pt(-edge.y, edge.x).unit();
      axes.push(normal);
    }
    return axes;
  }
  function project(poly, axis) {
    let min = poly[0].dot(axis);
    let max = min;
    for (let i = 1; i < poly.length; i++) {
      const proj = poly[i].dot(axis);
      if (proj < min) min = proj;
      if (proj > max) max = proj;
    }
    return { min, max };
  }
  const axesA = getAxes(polyA);
  const axesB = getAxes(polyB);
  for (let axis of [...axesA, ...axesB]) {
    const projA = project(polyA, axis);
    const projB = project(polyB, axis);
    if (projA.max < projB.min || projB.max < projA.min) {
      return false;
    }
  }
  return true;
}

const PtsLumina = ({
  name = "pt",
  bgcolor = "",
  resize = true,
  retina = true,
}) => {
  const nodesRef = useRef([]);
  const insightIdxRef = useRef([]);
  const constellationsRef = useRef([]);
  const constellationNodesRef = useRef([]);
  const constellationPhasesRef = useRef([]);
  const constellationTimesRef = useRef([]);
  const constellationAlphasRef = useRef([]);
  const hoverHistoryRef = useRef([]);
  const timeRef = useRef(0);
  let lastRegenTime = 0;

  const handleStart = (bound, space) => {
    // Initialize nodes with better z-distribution
    nodesRef.current = Array.from({ length: NODE_COUNT }, () =>
      randomNode(space)
    );

    // Select insight nodes (brighter stars)
    let idxs = [];
    while (idxs.length < INSIGHT_COUNT) {
      let idx = Math.floor(Math.random() * NODE_COUNT);
      if (!idxs.includes(idx)) idxs.push(idx);
    }
    insightIdxRef.current = idxs;

    // Create constellation groups
    generateConstellations(space, timeRef.current || 0);

    // Initialize constellation animation parameters
    constellationPhasesRef.current = Array(CONSTELLATION_COUNT)
      .fill(0)
      .map(() => Math.random() * Math.PI * 2);

    constellationTimesRef.current = Array(CONSTELLATION_COUNT)
      .fill(0)
      .map(() => 20000 + Math.random() * 40000); // Longer periods: 20-60 seconds

    constellationAlphasRef.current = Array(CONSTELLATION_COUNT)
      .fill(0)
      .map(() => Math.random() * 0.2); // Initial random visibility

    // Initialize hover history for smooth transitions
    hoverHistoryRef.current = [];
  };

  function placeTemplateOnCanvas(template, space) {
    // Random scale, rotation, and position
    const scale = 0.18 + Math.random() * 0.22;
    const angle = Math.random() * Math.PI * 2;
    const center = new Pt(
      space.innerBound.x + (0.2 + Math.random() * 0.6) * space.innerBound.width,
      space.innerBound.y + (0.2 + Math.random() * 0.6) * space.innerBound.height
    );
    // Transform points
    return template.points.map(([x, y]) => {
      // Centered at (0.5,0.5)
      let pt = new Pt(x - 0.5, y - 0.5);
      // Scale
      pt = pt.$multiply(
        scale * Math.min(space.innerBound.width, space.innerBound.height)
      );
      // Rotate
      pt = new Pt(
        pt.x * Math.cos(angle) - pt.y * Math.sin(angle),
        pt.x * Math.sin(angle) + pt.y * Math.cos(angle)
      );
      // Translate
      pt = pt.add(center);
      return pt;
    });
  }

  function generateConstellations(space, time) {
    constellationsRef.current = [];
    constellationNodesRef.current = [];
    const usedPolygons = [];
    let attempts = 0;
    for (let c = 0; c < CONSTELLATION_COUNT; c++) {
      // 40% chance to use a real template
      if (Math.random() < 0.4) {
        const template =
          CONSTELLATION_TEMPLATES[
            Math.floor(Math.random() * CONSTELLATION_TEMPLATES.length)
          ];
        const pts = placeTemplateOnCanvas(template, space);
        // Find closest nodes for each template point
        const nodeIndices = pts.map((pt) => {
          let minDist = Infinity,
            minIdx = -1;
          nodesRef.current.forEach((node, i) => {
            const d = node.pos.$subtract(pt).magnitude();
            if (d < minDist) {
              minDist = d;
              minIdx = i;
            }
          });
          return minIdx;
        });
        // Avoid duplicate indices
        if (new Set(nodeIndices).size === nodeIndices.length) {
          // Edges from template
          const edges = template.edges.map(([a, b]) => [
            nodeIndices[a],
            nodeIndices[b],
          ]);
          constellationNodesRef.current.push(nodeIndices);
          constellationsRef.current.push(edges);
          continue;
        }
      }
      let found = false;
      let edges = [];
      let selected = [];
      let pts = [];
      let hull = [];
      while (!found && attempts < 100) {
        attempts++;
        // Pick a center node (insight or random)
        const centerIdx =
          c < INSIGHT_COUNT
            ? insightIdxRef.current[c]
            : Math.floor(Math.random() * NODE_COUNT);
        const centerNode = nodesRef.current[centerIdx];
        // Find nearby nodes
        const nearbyNodes = nodesRef.current
          .map((node, idx) => ({
            idx,
            dist: node.pos.$subtract(centerNode.pos).magnitude(),
          }))
          .filter((n) => n.idx !== centerIdx)
          .sort((a, b) => a.dist - b.dist);
        // Select 7-11 nodes for the constellation (more connections)
        const count = 7 + Math.floor(Math.random() * 5);
        selected = [
          centerIdx,
          ...nearbyNodes.slice(0, count - 1).map((n) => n.idx),
        ];
        pts = selected.map((idx) => nodesRef.current[idx].pos);
        if (Math.random() < 0.5 && pts.length > 2) {
          hull = Polygon.convexHull(pts);
          const hullIndices = hull.map(
            (pt) => selected[pts.findIndex((p) => p.equals(pt))]
          );
          // Check for overlap with existing polygons
          const hullPts = hull.map((pt) => pt.clone());
          let overlap = false;
          for (let poly of usedPolygons) {
            if (polygonsIntersect(hullPts, poly)) {
              overlap = true;
              break;
            }
          }
          if (!overlap) {
            edges = edgesFromConvexHull(hullIndices, nodesRef.current);
            usedPolygons.push(hullPts);
            found = true;
          }
        } else {
          // Minimum spanning tree (skip overlap check)
          edges = edgesFromMST(selected, nodesRef.current);
          found = true;
        }
      }
      if (found) {
        constellationNodesRef.current.push(selected);
        constellationsRef.current.push(edges);
      }
    }
  }

  const handleAnimate = (space, form, time) => {
    timeRef.current = time;

    // Animate stars with individualized twinkle and drift
    nodesRef.current.forEach((node, i) => {
      // Individualized twinkling
      const twinkle =
        node.twinkle * Math.sin(time / (1000 / node.twinkleSpeed) + node.phase);
      const baseAlpha = 0.1 + (1 - node.z) * 0.6; // Brightest in foreground
      node.alpha = Math.max(0, Math.min(1, baseAlpha + twinkle));

      // Subtle drifting with individual speed
      const drift =
        Math.sin(time / (3400 / node.driftSpeed + i * 47) + node.phase) *
        (node.z * 12);
      node.pos = node.pos.add(
        new Pt(
          Math.cos(node.phase) * drift * 0.0008,
          Math.sin(node.phase) * drift * 0.0008
        )
      );

      node.displaySize = node.size * (1 + 0.15 * twinkle);
      node.displayAlpha = node.alpha;
    });

    // Track pointer and find closest node
    const pointer = space.pointer;
    let minDist = Infinity;
    let closestIdx = -1;

    nodesRef.current.forEach((node, i) => {
      if (node.alpha > 0.2) {
        const d = node.pos.$subtract(pointer).magnitude();
        if (d < minDist) {
          minDist = d;
          closestIdx = i;
        }

        // Calculate hover influence with distance falloff
        const targetHoverInf = Math.max(0, (120 - d) / 120);
        node.hoverInf = node.hoverInf || 0;
        node.hoverInf += (targetHoverInf - node.hoverInf) * 0.1;
      }
    });

    // Update hover history for smooth transitions
    hoverHistoryRef.current.push({
      idx: closestIdx,
      dist: minDist,
      time,
    });

    // Keep only recent hover history (last 2 seconds)
    while (
      hoverHistoryRef.current.length > 0 &&
      time - hoverHistoryRef.current[0].time > 2000
    ) {
      hoverHistoryRef.current.shift();
    }

    // Find all hovered nodes (within 80px)
    const hoveredNodeIndices = [];
    nodesRef.current.forEach((node, i) => {
      if (node.alpha > 0.2) {
        const d = node.pos.$subtract(space.pointer).magnitude();
        if (d < 80) hoveredNodeIndices.push(i);
      }
    });

    // Find constellations with hovered nodes
    const hoveredConstellations = new Set();
    if (closestIdx !== -1 && minDist < 80) {
      constellationNodesRef.current.forEach((nodes, ci) => {
        if (nodes.includes(closestIdx)) {
          hoveredConstellations.add(ci);
        }
      });
    }

    // Update constellation visibilities with ongoing reveal/disappear animation
    constellationsRef.current.forEach((edges, ci) => {
      const phase = constellationPhasesRef.current[ci];
      const period = constellationTimesRef.current[ci];
      const wave = Math.sin((time / period) * 2 + phase);
      // Find if this constellation is hovered
      const isHovered = hoveredConstellations.has(ci);
      // Slightly higher base brightness
      const baseAlpha = 0.12 + 0.18 * ((wave + 1) / 2);
      // Slightly higher on hover
      const targetAlpha = isHovered ? 0.9 : baseAlpha;
      // Smoother transition for all
      const alphaStep = isHovered ? 0.018 : 0.006;
      if (constellationAlphasRef.current[ci] < targetAlpha) {
        constellationAlphasRef.current[ci] = Math.min(
          targetAlpha,
          constellationAlphasRef.current[ci] + alphaStep
        );
      } else {
        constellationAlphasRef.current[ci] = Math.max(
          targetAlpha,
          constellationAlphasRef.current[ci] - alphaStep
        );
      }
    });

    // Clear with subtle gradient background
    if (bgcolor) {
      form.fill(bgcolor).rect([
        [0, 0],
        [space.width, space.height],
      ]);
    }

    // Draw faint ambient star connections
    nodesRef.current.forEach((n1, i) => {
      if (i % 5 !== 0) return;

      for (
        let j = i + 1;
        j < Math.min(i + 50, nodesRef.current.length);
        j += 5
      ) {
        const n2 = nodesRef.current[j];
        const d = n1.pos.$subtract(n2.pos).magnitude();

        if (d < 80) {
          const a = (1 - d / 80) * 0.035; // Brighter
          form.ctx.save();
          form.ctx.globalAlpha = a;
          form.strokeOnly(BRIGHT_LINE_COLOR, 1.1).line([n1.pos, n2.pos]);
          form.ctx.shadowColor = BRIGHT_GLOW_COLOR;
          form.ctx.shadowBlur = 4;
          form.ctx.restore();
        }
      }
    });

    // Draw constellations
    constellationsRef.current.forEach((edges, ci) => {
      const alpha = constellationAlphasRef.current[ci];
      if (alpha < 0.01) return;
      const isHovered = hoveredConstellations.has(ci);
      edges.forEach(([idxA, idxB]) => {
        const nodeA = nodesRef.current[idxA];
        const nodeB = nodesRef.current[idxB];
        const thickness = isHovered ? 1.7 : 1.3;
        const brightnessFactor = (nodeA.alpha + nodeB.alpha) / 1.1;
        form.ctx.save();
        form.ctx.globalAlpha =
          alpha * (isHovered ? 0.85 : 1.0) * brightnessFactor;
        const gradient = form.ctx.createLinearGradient(
          nodeA.pos.x,
          nodeA.pos.y,
          nodeB.pos.x,
          nodeB.pos.y
        );
        gradient.addColorStop(
          0,
          isHovered ? HOVERED_LINE_COLOR : BRIGHT_LINE_COLOR
        );
        gradient.addColorStop(
          1,
          isHovered ? HOVERED_LINE_COLOR : BRIGHT_LINE_COLOR
        );
        form.ctx.shadowColor = isHovered ? GLOW_COLOR : BRIGHT_GLOW_COLOR;
        form.ctx.shadowBlur = isHovered ? 8 : 10;
        form.ctx.strokeStyle = gradient;
        form.ctx.lineWidth = thickness;
        form.ctx.beginPath();
        form.ctx.moveTo(nodeA.pos.x, nodeA.pos.y);
        form.ctx.lineTo(nodeB.pos.x, nodeB.pos.y);
        form.ctx.stroke();
        form.ctx.restore();
      });
    });

    // Draw stars (nodes)
    nodesRef.current.forEach((node, i) => {
      if (node.alpha <= 0.01) return;

      const isHovered =
        closestIdx === i ||
        (closestIdx !== -1 &&
          constellationNodesRef.current.some(
            (nodes) => nodes.includes(closestIdx) && nodes.includes(i)
          ));

      const hoverFactor = isHovered ? 1.3 : node.hoverInf || 0;
      const size = (node.displaySize || node.size) * (1 + 0.3 * hoverFactor);
      const alpha = Math.min(
        1,
        (node.displayAlpha || node.alpha) * (1 + 0.5 * hoverFactor)
      );

      const isInsight = insightIdxRef.current.includes(i);

      form.ctx.save();
      if (isInsight) {
        form.ctx.globalAlpha = alpha;
        form.fillOnly(INSIGHT_COLOR).point(node.pos, size * 0.8, "circle");
      } else {
        form.ctx.globalAlpha = alpha * (1 - node.z * 0.6);
        form
          .fillOnly(NODE_COLOR)
          .point(node.pos, size * 0.6 * (1 - node.z * 0.3), "circle");
      }
      form.ctx.restore();
    });

    // Update hover ring with cleaner look
    if (closestIdx !== -1 && minDist < 60) {
      const node = nodesRef.current[closestIdx];
      const pulseSize = 1.5 + Math.sin(time / 400) * 0.5;

      form.ctx.save();
      form.ctx.globalAlpha = 0.5 * (1 - minDist / 60);
      form
        .strokeOnly(HIGHLIGHT_COLOR, 1)
        .point(node.pos, node.displaySize * 2 + pulseSize, "circle");
      form.ctx.restore();
    }

    // Regenerate constellations periodically
    if (time - lastRegenTime > REGEN_INTERVAL) {
      generateConstellations(space, time);
      lastRegenTime = time;
    }
  };

  return (
    <PtsCanvas
      background={bgcolor}
      resize={resize}
      retina={retina}
      onStart={handleStart}
      onAnimate={handleAnimate}
    />
  );
};

export default PtsLumina;
