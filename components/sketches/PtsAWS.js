import React, { useState, useCallback } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Create, Pt, Rectangle } from "pts";

const PtsAWS = ({
  name = "pt",
  bgcolor = "",
  resize = true,
  retina = true,
}) => {
  const [follower, setFollower] = useState(new Pt());
  const [pts, setPts] = useState([]);

  const handleStart = useCallback((bound, space) => {
    const initialPts = Create.gridCells(space.innerBound, 10, 10);
    setPts(initialPts);
    setFollower(space.center);
  }, []);

  const handleAnimate = useCallback(
    (space, form, time, ftime) => {
      let newFollower = follower.add(
        space.pointer.$subtract(follower).divide(20)
      );
      setFollower(newFollower);

      pts.forEach((p) => {
        let mag = newFollower.$subtract(Rectangle.center(p)).magnitude();
        let scale = Math.min(1, Math.abs(1 - (0.8 * mag) / space.center.y));
        let r = Rectangle.fromCenter(
          Rectangle.center(p),
          Rectangle.size(p).multiply(scale)
        );
        form.strokeOnly("rgba(188, 82, 21, 0.2)").rect(r);
      });

      form.fillOnly("#fff").point(space.pointer, 0, "circle");
    },
    [follower, pts]
  );

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

export default PtsAWS;
