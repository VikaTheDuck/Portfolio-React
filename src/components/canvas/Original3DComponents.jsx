// Original3DComponents.js
import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf?v=1.0");
  console.log("Computer GLTF:", computer);

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight position={[-60, 40, 10]} angle={0.3} penumbra={1} intensity={1} shadow-mapSize={700} />
      <spotLight position={[60, 40, 10]} angle={0.3} penumbra={1} intensity={0.5} shadow-mapSize={700} />
      <pointLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 7 : 10}
        position={isMobile ? [-0.5, -2.1, 0] : [-1, -3, 0]}
        rotation={[0, 190, 0]}
      />
    </mesh>
  );
};

export default Computers;
