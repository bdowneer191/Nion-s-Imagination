import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import type { Mesh } from 'three';

const SpinningKnot: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  // The knot will gently rotate on its own axis and pulse in size
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.y += delta * 0.2;

      // Pulsing effect using a sine wave for smooth oscillation
      const time = state.clock.elapsedTime;
      const pulse = Math.sin(time * 2) * 0.05 + 1; // Oscillates scale between 0.95 and 1.05
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.4, 128, 16]}>
      <meshStandardMaterial color="#818cf8" roughness={0.3} metalness={0.6} />
    </TorusKnot>
  );
};

export function Scene() {
  return (
    <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-800/50">
      {/* Adjusted camera position to be closer and FOV for a more focused view */}
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableDamping={true}
          dampingFactor={0.05}
        />
        <SpinningKnot />
      </Canvas>
    </div>
  );
}