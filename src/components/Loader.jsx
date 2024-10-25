import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full justify-center flex items-center ">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading</div>
      </div>
    </Html>
  );
};

export default Loader;
