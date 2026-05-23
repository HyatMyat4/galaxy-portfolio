"use client";
import React from "react";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useSelector } from "react-redux";
import { StarMode_data, StarColur_data } from "../../redux_store/redux_action";
function Background_Stars(props: any) {
  const colour = useSelector(StarColur_data);
  const [colourData, setcolourData] = useState<string>("#c2410c");
  const ref: any = useRef();
  const [sphere] = useState(() =>
    // @ts-ignore
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  function getRandomColor() {
    // Generate a random number between 0 and 255 for each RGB component
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color in the form of a CSS RGB string
    setcolourData(`rgb(${r}, ${g}, ${b})`);
  }

  /*
  const intervalID = setInterval(() => {
    getRandomColor();
  }, 6000);
  */

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colour}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  const starmode = useSelector(StarMode_data);
  return (
    <div
      className={`w-full h-auto ${
        starmode === "active" ? "" : " hidden"
      }  fixed inset-0 z-[-2]`}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Background_Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
