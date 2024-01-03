import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Create, Curve, Polygon } from "pts";

const PtsVaccellent = ({
  name = "pt",
  bgcolor = "",
  resize = true,
  retina = true,
}) => {
  let pts = [];

  const start = (bound, space) => {
    pts = Create.distributeRandom(space.innerBound, 420);
  };

  const animate = (space, form, time) => {
    let t = space.pointer;
    pts.sort(
      (a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
    );

    let ten = pts.slice(0, 12);
    let curve = Polygon.convexHull(ten);
    curve.insert(curve.slice(0, 4), curve.length);

    form.fillOnly("#333").points(pts, 1, "circle");
    form.stroke("#333").polygon(Curve.bspline(curve));

    let pp = ten.map((p) => [space.pointer, p]);
    form.strokeOnly("#f05", 1).lines(pp);
  };

  return (
    <PtsCanvas
      onStart={start}
      onAnimate={animate}
      background={bgcolor}
      resize={resize}
      retina={retina}
    />
  );
};

export default PtsVaccellent;
