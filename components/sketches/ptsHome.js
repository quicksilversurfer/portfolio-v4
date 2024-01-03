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
    this.position.x += this.velocity.x * this.depth * 0.35; // Speed is also affected by depth
    this.angle += this.variationSpeed;
    let sineValue = Math.sin(this.angle);
    this.position.y += sineValue * 0.005 * this.depth; // Vertical movement scaled by depth

    // Additional subtle random vertical movement
    this.position.y += (Math.random() - 0.5) * 0.5; // Small random vertical change

    // Wing flapping animation
    this.wingAngle += this.wingSpeed;
    let wingFlap = Math.sin(this.wingAngle) * this.wingRange;
    this.position.y += wingFlap * this.depth * 0.25; // Vertical movement based on wing flapping

    if (this.position.x > space.width) {
      this.position.x = -20;
    }
    // Keep the bird within the vertical bounds of the canvas
    if (this.position.y < 0 || this.position.y > space.height) {
      this.velocity.y = -this.velocity.y;
    }
    // Update wing curve properties based on wing flapping
    this.leftWingCurve =
      Math.sin(this.wingAngle - Math.PI / 4) * this.wingRange * 2; // Doubled for larger wings
    this.rightWingCurve =
      Math.sin(this.wingAngle + Math.PI / 4) * this.wingRange * 2; // Doubled for larger wings
  }

  display(form, color) {
    const scale = this.depth * 2.5;
    const opacity = this.depth;

    // Draw the triangular body of the bird
    let body = Group.fromArray([
      this.position.$add(-0.5 * scale, 0.5 * scale), // Back of the triangle
      this.position, // Tip of the triangle (front)
      this.position.$add(0.15 * scale * 0.5, -0.5 * scale), // Bottom of the triangle
    ]);
    form.fillOnly(color).polygon(body);

    // Draw left wing curve
    let leftWingStart = this.position.$add(-0.25 * scale, 0);
    let leftWingEnd = this.position.$add(
      -0.5 * scale,
      this.leftWingCurve - 0.5
    );
    form.strokeOnly(color, 1).line([leftWingStart, leftWingEnd]);

    // Draw right wing curve
    let rightWingStart = this.position.$add(0.25 * scale, 0);
    let rightWingEnd = this.position.$add(
      0.5 * scale,
      this.rightWingCurve - 0.5
    );
    form.strokeOnly(color, 1).line([rightWingStart, rightWingEnd]);
  }
}

const PtsHome = ({ bgcolor = "", resize = "true", retina = "true" }) => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    setBirds(initBirds());
  }, []);

  const initBirds = () => {
    const colors = ["#AD8301"];
    let tempBirds = [];
    for (let i = 0; i < 350; i++) {
      let depth = Math.random() * 0.5 + 0.5; // Random depth between 0.5 and 1
      let color = colors[Math.floor(Math.random() * colors.length)]; // Random color from the array
      let b = new Bird(
        new Pt(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        ),
        new Pt((1 + Math.random() * 0.5) * depth, 0),
        Math.floor(Math.random() * 3), // Random bird type
        depth,
        color
      );
      tempBirds.push(b);
    }
    return tempBirds;
  };

  const handleAnimate = useCallback(
    (space, form) => {
      if (birds.length > 0) {
        birds.forEach((b) => {
          b.move(space);
          b.display(form, b.color);
        });
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
