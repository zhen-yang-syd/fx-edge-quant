import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { CanvasLoader } from "../../components";

const Computers = ({ number }: { number: number }) => {
	const computer = useGLTF('./sydney/scene.gltf')

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight
				position={[90, 30, 80]}
				angle={0.8}
				penumbra={1}
				intensity={1.3}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={0.2} />
			<primitive
				object={computer.scene}
				scale={6}
				position={[-0.5, 1.5, -7]}
				rotation={[number, -0.9, -0.4]}
			/>
		</mesh>
	);
};

const ComputersCanvas = ({ number }: { number: number }) => {

	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: [50, 3, 5], fov: 33 }}
			gl={{ preserveDrawingBuffer: true }}
			className="w-[100vw] h-[100vh]"
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={true}
				/>
				<Computers number={number} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;