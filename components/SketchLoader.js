import React from "react";
import { usePathname } from "next/navigation";
import PtsHome from "./sketches/ptsHome";
import PtsShui from "./sketches/ptsShui";
import PtsUltrasound from "./sketches/ptsUltrasound";
import PtsVaccellent from "./sketches/ptsVaccellent";
import PtsBlog from "./sketches/ptsBlog";
import PtsAWS from "./sketches/PtsAWS";

const SketchWrapper = () => {
  const pathname = usePathname();

  let SketchComponent = null;

  if (pathname.startsWith("/blog/")) {
    SketchComponent = PtsBlog;
  } else {
    switch (pathname) {
      case "/":
        SketchComponent = PtsHome;
        break;
      case "/shui":
        SketchComponent = PtsShui;
        break;
      case "/ultrasound":
        SketchComponent = PtsUltrasound;
        break;
      case "/vaccellent":
        SketchComponent = PtsVaccellent;
        break;
      case "/aws":
        SketchComponent = PtsAWS;
        break;
      default:
        // Optionally, you can have a default sketch or leave it null
        break;
    }
  }

  return (
    <div className="absolute w-full h-full z-0">
      {SketchComponent && <SketchComponent />}
    </div>
  );
};

export default SketchWrapper;
