"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useSelector } from "react-redux";
import { StarMode_data, StarColur_data } from "../../redux_store/redux_action";

function Background_Stars(props: any) {
  const defaultColour = useSelector(StarColur_data);
  const ref: any = useRef();
  const [sphere] = useState(() =>
    // @ts-ignore
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  const targetColor = useRef({ r: 1, g: 1, b: 1 });

  useEffect(() => {
    const intervalID = setInterval(() => {
      targetColor.current = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
      };
    }, 10000);
    return () => clearInterval(intervalID);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    const c = ref.current.material.color;
    const t = targetColor.current;
    c.r += (t.r - c.r) * 0.02;
    c.g += (t.g - c.g) * 0.02;
    c.b += (t.b - c.b) * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={defaultColour || "#c2410c"}
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
