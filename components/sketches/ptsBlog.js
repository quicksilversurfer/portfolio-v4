import React, { useState, useCallback, useEffect } from "react";
import { PtsCanvas } from "react-pts-canvas";
import { Group, Create, Const, Circle, Pt } from "pts";

const PtsBlog = ({ bgcolor = "", resize = true, retina = true }) => {
  const [lines, setLines] = useState([]);
  const [spaceObj, setSpaceObj] = useState(null);

  const createLines = useCallback(() => {
    if (spaceObj && spaceObj.innerBound) {
      let newLines = [];
      let ps = Create.distributeRandom(spaceObj.innerBound, 2000);
      for (let i = 0, len = ps.length; i < len; i++) {
        newLines.push(
          new Group(
            ps[i],
            ps[i]
              .clone()
              .toAngle(
                Math.random() * Const.pi,
                (Math.random() * spaceObj.size.y) / 4 + 20,
                true
              )
          )
        );
      }
      setLines(newLines);
    }
  }, [spaceObj]);

  const handleStart = useCallback((bound, space) => {
    setSpaceObj(space);
  }, []);

  const handleAnimate = useCallback(
    (space, form) => {
      let range = Circle.fromCenter(space.pointer, 100);
      form.stroke("rgba(183, 181, 172, 0.25)").line(lines);

      lines.forEach((line) => {
        let inPath = Circle.intersectRay2D(range, line);
        let inLine = Circle.intersectLine2D(range, line);

        if (inPath.length > 1) {
          form
            .stroke("rgba(135, 133, 128, 0.045)")
            .line(line.concat(inPath[0], inPath[1]));
          form.stroke("rgba(173, 131, 1, 0.05)").line(line);
          form
            .fillOnly("rgba(135, 133, 128, 0.05)")
            .points(inPath, 1, "circle");
        }

        if (inLine.length > 0) {
          form.stroke("#343331").line(line);
          form.fillOnly("#AD8301").points(inLine, 3, "circle");
        }
      });
    },
    [lines]
  );

  const handleResize = useCallback(
    (bound, space) => {
      createLines(space);
    },
    [createLines]
  );
  useEffect(() => {
    createLines();
  }, [spaceObj, createLines]);

  return (
    <PtsCanvas
      background={bgcolor}
      resize={resize}
      retina={retina}
      onStart={handleStart}
      onAnimate={handleAnimate}
      onResize={handleResize}
    />
  );
};

export default PtsBlog;
