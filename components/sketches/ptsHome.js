import React, { useState, useEffect, useCallback } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Pt, Group, Noise } from "pts";

class Bird {
  constructor(
    position = new Pt(),
    velocity = new Pt(),
    type = 0,
    depth = 1,
    color = "#DA702C"
  ) {
    this.position = position;
    this.velocity = velocity;
    this.type = type;
    this.angle = Math.random() * Math.PI * 5;
    this.variationSpeed = Math.random() * 0.1 + 0.15;
    this.depth = depth; // Depth factor, affects size and transparency
    this.color = color; // Color of the bird
    this.wingAngle = 1; // Wing angle for flapping animation
    this.wingSpeed = Math.random() * 0.1 + 0.05; // Wing flapping speed
    this.wingRange = Math.random() * 0.5 + 0.5; // Wing flapping range
  }

  move(space) {
    // Base horizontal speed
    this.position.x += this.velocity.x * this.depth * 0.35;

    // Smooth wave-like vertical movement
    this.angle += this.variationSpeed;
    let sineValue = Math.sin(this.angle);
    this.position.y += sineValue * 0.01 * this.depth;

    // Occasional course correction (small chance to change direction slightly)
    if (Math.random() < 0.02) {
      this.velocity.y += (Math.random() - 0.5) * 0.2;
    }

    // Wing flapping animation
    this.wingAngle += this.wingSpeed;
    let wingFlap = Math.sin(this.wingAngle) * this.wingRange;

    // Vertical movement from wing flapping - more pronounced for smaller birds
    this.position.y += wingFlap * (1.1 - this.depth) * 0.3;

    // Horizontal boundary check
    if (this.position.x > space.width) {
      this.position.x = -20;
      // Randomize vertical position when re-entering
      this.position.y = Math.random() * space.height * 0.8 + space.height * 0.1;
    }

    // Vertical boundary check with smoother correction
    const buffer = 20;
    if (this.position.y < buffer) {
      this.position.y = buffer;
      this.velocity.y = Math.abs(this.velocity.y) * 0.5;
    } else if (this.position.y > space.height - buffer) {
      this.position.y = space.height - buffer;
      this.velocity.y = -Math.abs(this.velocity.y) * 0.5;
    }

    // Dampen vertical velocity for stability
    this.velocity.y *= 0.98;

    // Update wing curve properties based on wing flapping
    this.leftWingCurve =
      Math.sin(this.wingAngle - Math.PI / 4) * this.wingRange * 2;
    this.rightWingCurve =
      Math.sin(this.wingAngle + Math.PI / 4) * this.wingRange * 2;
  }

  display(form, color) {
    const scale = this.depth * 2.5;
    const opacity = this.depth;
    const alpha = Math.max(0.3, opacity * 0.8); // Better opacity control
    const birdColor = `rgba(${this.getRGBFromHex(color)},${alpha})`;

    // Draw the triangular body of the bird
    let body = Group.fromArray([
      this.position.$add(-0.5 * scale, 0.5 * scale), // Back of the triangle
      this.position, // Tip of the triangle (front)
      this.position.$add(0.15 * scale * 0.5, -0.5 * scale), // Bottom of the triangle
    ]);
    form.fillOnly(birdColor).polygon(body);

    // Add a tail
    let tailStart = this.position.$add(-0.5 * scale, 0.5 * scale);
    let tailEnd = this.position.$add(-0.8 * scale, 0.7 * scale);
    form.strokeOnly(birdColor, 1).line([tailStart, tailEnd]);

    // Draw left wing curve with better shape
    let leftWingStart = this.position.$add(-0.25 * scale, 0);
    let leftWingControl = this.position.$add(
      -0.4 * scale,
      (this.leftWingCurve - 0.5) * scale
    );
    let leftWingEnd = this.position.$add(
      -0.6 * scale,
      this.leftWingCurve * scale
    );
    form
      .strokeOnly(birdColor, 1)
      .line([leftWingStart, leftWingControl, leftWingEnd]);

    // Draw right wing curve with better shape
    let rightWingStart = this.position.$add(0.1 * scale, 0);
    let rightWingControl = this.position.$add(
      0.3 * scale,
      (this.rightWingCurve - 0.5) * scale
    );
    let rightWingEnd = this.position.$add(
      0.4 * scale,
      this.rightWingCurve * scale
    );
    form
      .strokeOnly(birdColor, 1)
      .line([rightWingStart, rightWingControl, rightWingEnd]);
  }

  // Utility function to convert hex to RGB
  getRGBFromHex(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
}

const PtsHome = ({ bgcolor = "", resize = "true", retina = "true" }) => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    setBirds(initBirds());
  }, []);

  const initBirds = () => {
    const colors = ["#AD8301", "#BC9A2D", "#A37B16"]; // More color variations
    let tempBirds = [];
    const birdCount = 250; // Slightly fewer birds for better performance

    for (let i = 0; i < birdCount; i++) {
      // Create depth groups - far, mid, and close birds
      let depthGroup = Math.floor(Math.random() * 3);
      let depth;

      if (depthGroup === 0) {
        depth = Math.random() * 0.2 + 0.4; // Far birds: 0.4-0.6
      } else if (depthGroup === 1) {
        depth = Math.random() * 0.2 + 0.6; // Mid-range birds: 0.6-0.8
      } else {
        depth = Math.random() * 0.2 + 0.8; // Close birds: 0.8-1.0
      }

      // Select color - making closer birds slightly darker
      let colorIdx = Math.min(
        Math.floor(depth * colors.length),
        colors.length - 1
      );
      let color = colors[colorIdx];

      // Create bird with varied parameters
      let b = new Bird(
        new Pt(
          Math.random() * window.innerWidth,
          Math.random() * (window.innerHeight * 0.8) + window.innerHeight * 0.1
        ),
        new Pt(
          (0.8 + Math.random() * 1.0) * depth,
          (Math.random() - 0.5) * 0.2
        ),
        Math.floor(Math.random() * 3),
        depth,
        color
      );

      // Randomize starting wing position
      b.wingAngle = Math.random() * Math.PI * 2;

      tempBirds.push(b);
    }

    // Sort by depth so closer birds render on top
    return tempBirds.sort((a, b) => a.depth - b.depth);
  };

  const handleAnimate = useCallback(
    (space, form) => {
      if (birds.length > 0) {
        // Occasionally create a new bird from the left side
        if (Math.random() < 0.01) {
          const existingBird = birds[Math.floor(Math.random() * birds.length)];
          const newBird = new Bird(
            new Pt(
              -20,
              Math.random() * space.height * 0.8 + space.height * 0.1
            ),
            new Pt(existingBird.velocity.x, existingBird.velocity.y),
            existingBird.type,
            existingBird.depth,
            existingBird.color
          );
          setBirds((prevBirds) => [...prevBirds, newBird]);
        }

        // Sort by depth for proper rendering
        birds.sort((a, b) => a.depth - b.depth);

        // Update and display birds
        birds.forEach((b) => {
          b.move(space);
          b.display(form, b.color);
        });

        // Limit total number of birds
        if (birds.length > 300) {
          setBirds((prevBirds) => prevBirds.slice(1));
        }
      }
    },
    [birds]
  );

  const handleAction = useCallback((space, form, type, x, y) => {
    if (type === "up") {
      // setBirds(initBirds());
    }
  }, []);

  return (
    <PtsCanvas
      onAnimate={handleAnimate}
      onAction={handleAction}
      background={bgcolor}
      resize={resize}
      retina={retina}
    />
  );
};

export default PtsHome;
