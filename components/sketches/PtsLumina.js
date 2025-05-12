import React, { useRef, useEffect } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Create, Pt } from "pts";

const NODE_COUNT = 280; // Increased for richer starfield
const INSIGHT_COUNT = 18;
const CONSTELLATION_COUNT = 8; // Separate concept from insights
const INSIGHT_COLOR = "rgba(188, 82, 21, 1)";
const NODE_COLOR = "rgba(188, 82, 21, 0.35)";
const LINE_COLOR = "rgba(188, 82, 21, 0.6)";
const HIGHLIGHT_COLOR = "rgba(188, 82, 21, 1)";
const GLOW_COLOR = "rgba(188, 82, 21, 0.6)";

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
    size: 1.5 + Math.random() * 6, // Greater size variation
    alpha: 0,
    twinkle: 0.4 + Math.random() * 0.6, // Individual twinkle strength
    twinkleSpeed: 0.3 + Math.random() * 0.7, // Individual twinkle speed
    driftSpeed: 0.5 + Math.random() * 0.5, // Individual drift speed
  };
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
    constellationsRef.current = [];
    constellationNodesRef.current = [];

    // For each constellation, select a center and surrounding nodes
    for (let c = 0; c < CONSTELLATION_COUNT; c++) {
      const centerIdx =
        c < INSIGHT_COUNT
          ? insightIdxRef.current[c]
          : Math.floor(Math.random() * NODE_COUNT);

      const centerNode = nodesRef.current[centerIdx];

      // Find nearby nodes in a more circular pattern
      const nearbyNodes = nodesRef.current
        .map((node, idx) => ({
          idx,
          dist: node.pos.$subtract(centerNode.pos).magnitude(),
          angle: Math.atan2(
            node.pos.y - centerNode.pos.y,
            node.pos.x - centerNode.pos.x
          ),
        }))
        .filter((n) => n.idx !== centerIdx)
        .sort((a, b) => a.dist - b.dist);

      // Select nodes that form a more balanced pattern
      const selectedNodes = [];
      const angleStep = (Math.PI * 2) / (4 + Math.floor(Math.random() * 3));
      for (let i = 0; i < 6; i++) {
        const targetAngle = i * angleStep;
        const node = nearbyNodes.find(
          (n) =>
            !selectedNodes.includes(n) &&
            Math.abs(((n.angle + Math.PI * 2) % (Math.PI * 2)) - targetAngle) <
              angleStep / 2
        );
        if (node) selectedNodes.push(node);
      }

      const edges = [];
      const nodeIndices = [centerIdx, ...selectedNodes.map((n) => n.idx)];

      // Create more harmonious connections
      nodeIndices.slice(1).forEach((idx) => {
        edges.push([centerIdx, idx]);
      });

      // Connect in a circular pattern
      for (let i = 1; i < nodeIndices.length; i++) {
        edges.push([
          nodeIndices[i],
          nodeIndices[i + 1 > nodeIndices.length - 1 ? 1 : i + 1],
        ]);
      }

      constellationsRef.current.push(edges);
      constellationNodesRef.current.push(nodeIndices);
    }

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

    // Find constellations with hovered nodes
    const hoveredConstellations = new Set();
    if (closestIdx !== -1 && minDist < 80) {
      constellationNodesRef.current.forEach((nodes, ci) => {
        if (nodes.includes(closestIdx)) {
          hoveredConstellations.add(ci);
        }
      });
    }

    // Update constellation visibilities
    constellationsRef.current.forEach((edges, ci) => {
      const phase = constellationPhasesRef.current[ci];
      const period = constellationTimesRef.current[ci];

      // Natural pulsing alpha (very subtle, slow reveal/hide)
      const naturalAlpha =
        0.03 + 0.13 * ((Math.sin(time / period + phase) + 1) / 2);

      // Boost alpha for hovered constellations
      const isHovered = hoveredConstellations.has(ci);
      const targetAlpha = isHovered ? 0.8 : naturalAlpha;

      // Smooth transition for alpha
      const alphaStep = time - timeRef.current < 50 ? 0.015 : 0.001;
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
      if (i % 5 !== 0) return; // Reduce density of background connections

      for (
        let j = i + 1;
        j < Math.min(i + 50, nodesRef.current.length);
        j += 5
      ) {
        const n2 = nodesRef.current[j];
        const d = n1.pos.$subtract(n2.pos).magnitude();

        if (d < 80) {
          const a = (1 - d / 80) * 0.01;
          form.ctx.save();
          form.ctx.globalAlpha = a;
          form.strokeOnly(LINE_COLOR, 1).line([n1.pos, n2.pos]);
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

        // Line thickness based on hovering and node brightness
        const thickness = isHovered ? 1.5 : 0.8;
        const brightnessFactor = (nodeA.alpha + nodeB.alpha) / 2;

        form.ctx.save();
        form.ctx.globalAlpha = alpha * brightnessFactor;

        // Draw gradient line for more depth
        const gradient = form.ctx.createLinearGradient(
          nodeA.pos.x,
          nodeA.pos.y,
          nodeB.pos.x,
          nodeB.pos.y
        );
        gradient.addColorStop(0, isHovered ? HIGHLIGHT_COLOR : LINE_COLOR);
        gradient.addColorStop(1, isHovered ? HIGHLIGHT_COLOR : LINE_COLOR);

        form.ctx.shadowColor = isHovered ? GLOW_COLOR : LINE_COLOR;
        form.ctx.shadowBlur = isHovered ? 6 : 3;
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
