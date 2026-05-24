"use client";
import React, { useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { StarMode_data, StarColur_data } from "../../redux_store/redux_action";

function Background_Stars(props: any) {
  const defaultColour = useSelector(StarColur_data);
  const ref: any = useRef();
  const targetColor = useRef(new THREE.Color("#c2410c"));
  const sphere = useMemo(
    () =>
      // @ts-ignore
      random.inSphere(new Float32Array(4000), { radius: 1.5 }),
    [],
  );

  const palette = [
    "#0369A1",
    "#7e22ce",
    "#a16207",
    "#0f766e",
    "#be123c",
    "#4338ca",
  ];

  const colorRef = useRef(new THREE.Color());
  useEffect(() => {
    const intervalID = setInterval(() => {
      colorRef.current.set(palette[Math.floor(Math.random() * palette.length)]);
      targetColor.current = colorRef.current;
    }, 7000);
    return () => clearInterval(intervalID);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    ref.current.material.color.lerp(targetColor.current, delta * 0.5);
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
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
