import React, { useState, useCallback } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Pt, World, Polygon, Particle, Body } from "pts";

const PtsShui = ({
  name = "pt",
  bgcolor = "",
  resize = true,
  retina = true,
}) => {
  const [world, setWorld] = useState(null);

  const handleStart = useCallback((bound, space) => {
    const newWorld = new World(space.innerBound, 0.99, new Pt(0, 500));
    let unit = (space.size.x + space.size.y) / 150;

    // Create bodies and particles
    let hexagon = Body.fromGroup(
      Polygon.fromCenter(space.center.add(100, -100), unit * 10, 6),
      0.5
    );
    let square = Body.fromGroup(
      Polygon.fromCenter(space.center.subtract(100, 50), unit * 8, 4),
      1
    );
    let triangle = Body.fromGroup(
      Polygon.fromCenter(space.center, unit * 6, 3)
    );
    let p1 = new Particle(new Pt(space.center.x, 100)).size(unit * 4);
    let p2 = new Particle(new Pt(space.center.x, 100)).size(unit * 2);

    // Add to world
    newWorld.add(hexagon).add(square, "square").add(triangle, "triangle");
    newWorld.add(p1).add(p2);

    // Hit them with impulse
    p1.hit(100, -20);
    p2.hit(100, -50);
    hexagon[0].hit(120, -40);
    square[0].hit(-100, -20);

    square[0].lock = true; // Lock square's first vertex
    setWorld(newWorld);
  }, []);

  const handleAnimate = useCallback(
    (space, form, time, ftime) => {
      if (!world) return;

      world.drawParticles((p, i) =>
        form
          .fillOnly(["#9b5de5", "#4d908e", "#bb3e03", "#005f73"][i % 4])
          .point(p, p.radius, "circle")
      );
      world.drawBodies((b, i) => {
        form
          .fillOnly(["#f6bd60", "#f3722c", "#457b9d", "#6b705c"][i % 3])
          .polygon(b);
        b.linksToLines().forEach((l) => form.line(l)); // visualize the edge constraints
      });
      world.update(ftime);
    },
    [world]
  );

  const handleAction = useCallback(
    (space, form, type, x, y) => {
      if (type === "move" && world) {
        world.body("square")[0].position = new Pt(x, y);
      }
    },
    [world]
  );

  return (
    <PtsCanvas
      background={bgcolor}
      resize={resize}
      retina={retina}
      onStart={handleStart}
      onAnimate={handleAnimate}
      onAction={handleAction}
    />
  );
};

export default PtsShui;
