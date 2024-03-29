import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Line, Geom, Num, Pt, Const, Group } from "pts";

const PtsUltrasound = ({
  name = "pt",
  bgcolor = "",
  resize = true,
  retina = true,
}) => {
  const animate = (space, form, time) => {
    // create a line and get 200 interpolated points
    let offset = space.size.$multiply(0.2).y;
    let line = new Group(
      new Pt(0, offset),
      new Pt(space.size.x, space.size.y - offset)
    );
    let pts = Line.subpoints(line, 200);

    // get perpendicular unit vectors from each points on the line
    let pps = pts.map((p) =>
      Geom.perpendicular(p.$subtract(line[0]).unit()).add(p)
    );

    let angle = (space.pointer.x / space.size.x) * Const.two_pi * 2;

    // draw each perpendicular like a sine-wave
    pps.forEach((pp, i) => {
      let t =
        (i / 200) * Const.two_pi + angle + Num.cycle((time % 10000) / 10000);

      if (i % 2 === 0) {
        pp[0].to(Geom.interpolate(pts[i], pp[0], Math.sin(t) * offset * 2));
        pp[1].to(pts[i]);
        form.stroke("#0c6", 1).line(pp);
      } else {
        pp[0].to(pts[i]);
        pp[1].to(Geom.interpolate(pts[i], pp[1], Math.cos(t) * offset * 2));
        form.stroke("#f03", 1).line(pp);
      }
    });
  };

  return (
    <PtsCanvas
      onAnimate={animate}
      background={bgcolor}
      resize={resize}
      retina={retina}
    />
  );
};

export default PtsUltrasound;
