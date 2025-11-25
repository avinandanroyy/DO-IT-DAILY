import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleWave = () => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  // Dummy object for calculating transforms
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Grid parameters
  const rows = 50;
  const cols = 40;
  const separation = 0.5;

  // Initialize positions
  const particles = useMemo(() => {
    const temp: { x: number; z: number; y: number }[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = (i - rows / 2) * separation;
        const z = (j - cols / 2) * separation;
        temp.push({ x, z, y: 0 });
      }
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      const { x, z } = particle;
      
      // Wave Calculation
      // Combine multiple sine waves for a more organic "liquid" feel
      const y = 
        Math.sin(x * 0.5 + time * 0.5) * 0.5 + 
        Math.sin(z * 0.3 + time * 0.3) * 0.5 + 
        Math.sin((x + z) * 0.2 + time * 0.2) * 0.2;

      dummy.position.set(x, y, z);
      
      // Scale particles based on height for depth effect
      const scale = (y + 1.5) * 0.03; 
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, rows * cols]}>
      <circleGeometry args={[1, 16]} /> {/* Simple circle shape */}
      <meshBasicMaterial color="#000000" />
    </instancedMesh>
  );
};

const WaveShader: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [15, 10, 15], fov: 45 }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleWave />
      </Canvas>
    </div>
  );
};

export default WaveShader;