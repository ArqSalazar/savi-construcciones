"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedGrid() {
    const meshRef = useRef<THREE.Mesh>(null);
    const geometryRef = useRef<THREE.PlaneGeometry>(null);

    // Grid config: A larger grid with enough segments for smooth waves
    const size = 30;
    const segments = 100;

    useFrame((state) => {
        if (!meshRef.current || !geometryRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = geometryRef.current.attributes.position;

        // Interactive parallax based on mouse pointer
        // state.pointer is normalized between -1 and 1
        const targetRotX = -1.2 + (state.pointer.y * 0.05);
        const targetRotY = state.pointer.x * 0.05;

        // Smooth interpolation for rotation
        meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.05;

        // Animate vertices to create a topographical effect
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);

            // Calculate smooth architectural wave using sine combinations
            const wave1 = Math.sin(x * 0.3 + time * 0.3) * 0.4;
            const wave2 = Math.sin(y * 0.2 + time * 0.2) * 0.4;
            const wave3 = Math.sin((x + y) * 0.15 - time * 0.4) * 0.3;

            // Apply z displacement
            positions.setZ(i, wave1 + wave2 + wave3);
        }

        positions.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} rotation={[-1.2, 0, 0]} position={[0, -1, -5]}>
            <planeGeometry ref={geometryRef} args={[size, size, segments, segments]} />
            <meshBasicMaterial
                color={0x1d4ed8}
                transparent={true}
                opacity={0.15}
                wireframe={true}
                fog={true}
            />
        </mesh>
    );
}

export default function BlueprintScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 1.5]} // Performance: Limit resolution on Retina displays to maintain 60fps
        >
            {/* Fog to softly fade the grid into the background at the edges */}
            <fog attach="fog" args={['#ffffff', 2, 12]} />
            <AnimatedGrid />
        </Canvas>
    );
}
