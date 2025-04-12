import React, { useCallback, useRef } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Pt, Group, Const } from "pts";

// --- Constants (Keep these as they are) ---
const BIRD_COUNT_INITIAL = 250;
const MAX_BIRDS = 300;
const ADD_BIRD_CHANCE = 0.01;
const BIRD_COLORS = ["#AD8301", "#BC9A2D", "#A37B16"];
const BOUNDARY_BUFFER = 20;

// --- Bird Class (Keep this as it is) ---
class Bird {
  constructor(
    position = new Pt(),
    velocity = new Pt(),
    depth = 1,
    color = "#DA702C"
  ) {
    this.position = position;
    this.velocity = velocity;
    this.angle = Math.random() * Math.PI * 2;
    this.variationSpeed = Math.random() * 0.05 + 0.05;
    this.depth = depth;
    this.color = color;
    this.wingAngle = Math.random() * Math.PI * 2;
    this.wingSpeed = Math.random() * 0.1 + 0.08;
    this.wingRange = Math.random() * 0.4 + 0.6;
    this.rgbColor = this.getRGBFromHex(color);
    this.leftWingCurve = 0;
    this.rightWingCurve = 0;
  }

  move(space) {
    // --- Movement Physics ---
    this.position.x += this.velocity.x * this.depth * 0.4;
    this.angle += this.variationSpeed;
    const sineValue = Math.sin(this.angle);
    this.position.y += sineValue * 0.015 * this.depth;
    if (Math.random() < 0.02) {
      this.velocity.y += (Math.random() - 0.5) * 0.15;
    }
    this.wingAngle += this.wingSpeed;
    if (this.wingAngle > Const.two_pi) {
      this.wingAngle -= Const.two_pi;
    }
    const wingFlap = Math.sin(this.wingAngle) * this.wingRange;
    this.position.y += wingFlap * this.depth * 0.3;

    // --- Boundary Checks ---
    if (this.position.x > space.width + BOUNDARY_BUFFER) {
      this.position.x = -BOUNDARY_BUFFER;
    } else if (this.position.x < -BOUNDARY_BUFFER) {
      this.position.x = space.width + BOUNDARY_BUFFER;
    }
    if (this.position.y < BOUNDARY_BUFFER) {
      this.position.y = BOUNDARY_BUFFER;
      this.velocity.y *= -0.5;
      this.velocity.y += 0.1;
    } else if (this.position.y > space.height - BOUNDARY_BUFFER) {
      this.position.y = space.height - BOUNDARY_BUFFER;
      this.velocity.y *= -0.5;
      this.velocity.y -= 0.1;
    }
    this.velocity.y *= 0.98;
    this.leftWingCurve =
      Math.sin(this.wingAngle - Math.PI / 3) * this.wingRange;
    this.rightWingCurve =
      Math.sin(this.wingAngle + Math.PI / 3) * this.wingRange;
  }

  display(form) {
    const scale = this.depth * 3.0;
    const alpha = Math.max(0.2, Math.min(1.0, this.depth * 0.9));
    const birdColor = `rgba(${this.rgbColor},${alpha})`;
    const wingStrokeWidth = Math.max(1, this.depth);

    const bodyPoints = [
      new Pt(-0.6 * scale, 0.1 * scale),
      new Pt(0, -0.2 * scale),
      new Pt(-0.6 * scale, -0.1 * scale),
    ].map((p) => p.$add(this.position));
    form.fillOnly(birdColor).polygon(bodyPoints);

    const leftWingStart = this.position.$add(-0.2 * scale, 0);
    const leftWingControl = this.position.$add(
      -0.5 * scale,
      (this.leftWingCurve - 0.2) * scale
    );
    const leftWingEnd = this.position.$add(
      -0.8 * scale,
      this.leftWingCurve * scale * 1.1
    );
    form
      .strokeOnly(birdColor, wingStrokeWidth)
      .line([leftWingStart, leftWingControl, leftWingEnd]);

    const rightWingStart = this.position.$add(-0.2 * scale, 0);
    const rightWingControl = this.position.$add(
      -0.5 * scale,
      (this.rightWingCurve + 0.2) * scale
    );
    const rightWingEnd = this.position.$add(
      -0.8 * scale,
      this.rightWingCurve * scale * 1.1
    );
    form
      .strokeOnly(birdColor, wingStrokeWidth)
      .line([rightWingStart, rightWingControl, rightWingEnd]);
  }

  getRGBFromHex(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
}

// --- PtsHome Component ---
// UPDATED: Changed default bgcolor to "transparent"
const PtsHome = ({ bgcolor = "transparent", resize = true, retina = true }) => {
  const birdsRef = useRef([]);
  const spaceRef = useRef(null);
  const hasInitialized = useRef(false);

  const initBirds = useCallback((space) => {
    if (!space) return [];
    let tempBirds = [];
    for (let i = 0; i < BIRD_COUNT_INITIAL; i++) {
      const depthGroup = Math.random();
      let depth;
      if (depthGroup < 0.33) depth = Math.random() * 0.2 + 0.4;
      else if (depthGroup < 0.66) depth = Math.random() * 0.2 + 0.6;
      else depth = Math.random() * 0.2 + 0.8;

      const colorIdx = Math.floor(depthGroup * BIRD_COLORS.length);
      const color = BIRD_COLORS[Math.min(colorIdx, BIRD_COLORS.length - 1)];
      const position = new Pt(
        Math.random() * space.width,
        Math.random() * (space.height - BOUNDARY_BUFFER * 2) + BOUNDARY_BUFFER
      );
      const velocity = new Pt(
        (0.5 + Math.random() * 0.8) * depth,
        (Math.random() - 0.5) * 0.2
      );
      tempBirds.push(new Bird(position, velocity, depth, color));
    }
    return tempBirds.sort((a, b) => a.depth - b.depth);
  }, []);

  const handleAnimate = useCallback(
    (space, form, time, ftime) => {
      if (!spaceRef.current) spaceRef.current = space;
      if (!hasInitialized.current && space) {
        birdsRef.current = initBirds(space);
        hasInitialized.current = true;
      }
      const currentBirds = birdsRef.current;
      let needsSort = false;

      if (Math.random() < ADD_BIRD_CHANCE && currentBirds.length < MAX_BIRDS) {
        const templateBird =
          currentBirds[Math.floor(Math.random() * currentBirds.length)];
        const depth = templateBird.depth;
        const color = templateBird.color;
        const newBird = new Bird(
          new Pt(
            -BOUNDARY_BUFFER,
            Math.random() * (space.height - BOUNDARY_BUFFER * 2) +
              BOUNDARY_BUFFER
          ),
          new Pt(
            (0.5 + Math.random() * 0.8) * depth,
            (Math.random() - 0.5) * 0.2
          ),
          depth,
          color
        );
        currentBirds.push(newBird);
        needsSort = true;
      }

      if (currentBirds.length > MAX_BIRDS) {
        currentBirds.shift();
      }
      if (needsSort) {
        currentBirds.sort((a, b) => a.depth - b.depth);
      }

      // No manual clear needed - PtsCanvas handles it via the background prop
      currentBirds.forEach((bird) => {
        bird.move(space);
        bird.display(form);
      });
    },
    // UPDATED: Removed bgcolor from dependencies as it's constant now
    [initBirds]
  );

  const handleResize = useCallback(
    (space, form, size) => {
      if (hasInitialized.current && space) {
        // Ensure space is valid on resize
        birdsRef.current = initBirds(space);
      }
    },
    [initBirds]
  );

  const handleAction = useCallback(
    (space, form, type, px, py, evt) => {
      // if (type === "up") {
      //   if (space) {
      //      birdsRef.current = initBirds(space);
      //   }
      // }
    },
    [initBirds]
  );

  return (
    <PtsCanvas
      onAnimate={handleAnimate}
      onAction={handleAction}
      onResize={handleResize}
      // The background prop receives the bgcolor, now defaulting to "transparent"
      background={bgcolor}
      resize={resize}
      retina={retina}
      // Ensure the canvas itself doesn't block underlying elements via CSS
      style={{
        position: "absolute", // Or 'fixed' depending on layout needs
        top: 0,
        left: 0,
        zIndex: 1, // Adjust if needed relative to other absolute elements
        pointerEvents: "none", // Allows clicks to pass through canvas to elements behind it
        height: "100vh", // Example sizing
        width: "100%", // Example sizing
      }}
    />
  );
};

export default PtsHome;
