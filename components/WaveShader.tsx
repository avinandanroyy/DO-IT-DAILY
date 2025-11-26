import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: any;
      circleGeometry: any;
      meshBasicMaterial: any;
    }
  }
}

const ParticleWave = () => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  

  const dummy = useMemo(() => new THREE.Object3D(), []);
  

  const rows = 50;
  const cols = 40;
  const separation = 0.5;


  const particles = useMemo(() => {
    const temp = [];
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
      
      
      const y = 
        Math.sin(x * 0.5 + time * 0.5) * 0.5 + 
        Math.sin(z * 0.3 + time * 0.3) * 0.5 + 
        Math.sin((x + z) * 0.2 + time * 0.2) * 0.2;

      dummy.position.set(x, y, z);
      

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