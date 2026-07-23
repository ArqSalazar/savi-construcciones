"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GridLayer({
    size,
    segments,
    position,
    color,
    opacity,
    speed,
    waveScale,
    parallax,
    driftPhase = 0,
}: {
    size: number;
    segments: number;
    position: [number, number, number];
    color: number;
    opacity: number;
    speed: number;
    waveScale: number;
    parallax: number;
    driftPhase?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const geometryRef = useRef<THREE.PlaneGeometry>(null);

    useFrame((state) => {
        if (!meshRef.current || !geometryRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = geometryRef.current.attributes.position;

        // Slow idle drift so the scene feels alive even without cursor movement,
        // layered underneath the interactive pointer parallax.
        const drift = Math.sin(time * 0.05 + driftPhase) * 0.03;
        const targetRotX = -1.2 + state.pointer.y * 0.05 * parallax + drift;
        const targetRotY = state.pointer.x * 0.05 * parallax + Math.cos(time * 0.04 + driftPhase) * 0.02;

        meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.05;

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);

            const wave1 = Math.sin(x * 0.3 + time * speed) * waveScale;
            const wave2 = Math.sin(y * 0.2 + time * speed * 0.66) * waveScale;
            const wave3 = Math.sin((x + y) * 0.15 - time * speed * 1.33) * waveScale * 0.75;

            positions.setZ(i, wave1 + wave2 + wave3);
        }

        positions.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} rotation={[-1.2, 0, 0]} position={position}>
            <planeGeometry ref={geometryRef} args={[size, size, segments, segments]} />
            <meshBasicMaterial color={color} transparent opacity={opacity} wireframe fog />
        </mesh>
    );
}

// Deterministic pseudo-random in [0, 1) so the memoized layout stays pure/idempotent
function seededRandom(seed: number) {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
}

function GlowNodes() {
    const materialRef = useRef<THREE.PointsMaterial>(null);

    const positions = useMemo(() => {
        const count = 36;
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (seededRandom(i) - 0.5) * 26;
            arr[i * 3 + 1] = (seededRandom(i + 100) - 0.5) * 13 - 2;
            arr[i * 3 + 2] = -3 - seededRandom(i + 200) * 6;
        }
        return arr;
    }, []);

    useFrame((state) => {
        if (!materialRef.current) return;
        const t = state.clock.getElapsedTime();
        // Gentle collective "breathing" pulse rather than a full twinkle shader,
        // keeps the effect premium without a custom GLSL material.
        materialRef.current.opacity = 0.22 + Math.sin(t * 0.6) * 0.14;
    });

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                ref={materialRef}
                color={0x1d4ed8}
                size={0.06}
                transparent
                opacity={0.3}
                sizeAttenuation
                fog
            />
        </points>
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
            <fog attach="fog" args={['#ffffff', 2, 13]} />

            {/* Near layer: primary blueprint grid */}
            <GridLayer
                size={30}
                segments={70}
                position={[0, -1, -5]}
                color={0x1d4ed8}
                opacity={0.09}
                speed={0.3}
                waveScale={0.4}
                parallax={1}
            />

            {/* Far layer: fainter, slower, cyan-toned for depth parallax */}
            <GridLayer
                size={44}
                segments={36}
                position={[0, -1.6, -9]}
                color={0x0284c7}
                opacity={0.045}
                speed={0.18}
                waveScale={0.55}
                parallax={0.5}
                driftPhase={2.4}
            />

            <GlowNodes />
        </Canvas>
    );
}
