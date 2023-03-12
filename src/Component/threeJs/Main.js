import { Environment, MeshDistortMaterial, OrbitControls, Sphere, useGLTF } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import "./three.css"
import texture from "../../images/tex1.jpeg"
import { TextureLoader } from 'three'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from './Untitled'
import Model1  from './Monkey'
import Model2  from './LL'

const Main = () => {

    // box
    const colorMap = useLoader(TextureLoader, texture)
    const Box = () => {
        return (
            <mesh rotation={[23, 53, 23]}>
                <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                {/* === for color === */}
                {/* <meshLambertMaterial attach="material" color="aqua" /> */}

                {/* === for texture === */}
                <meshStandardMaterial map={colorMap} />

                {/* === for RGB coloring === */}
                <meshNormalMaterial attach="material" />
            </mesh>
        )
    }

    // animated shape
    const Animate = () => {
        return (
            <>
                <Sphere visible args={[1, 100, 200]} scale={2}>
                    <MeshDistortMaterial
                        color="purple"
                        attach="material"
                        distort={.6}
                        speed={5}
                        roughness={1}
                    />


                </Sphere>
            </>
        )
    }


    return (
        <div className="threeD">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity=".5" />
                <directionalLight position={[1, 1, 1]} intensity="1" />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas >
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity=".5" />
                <directionalLight position={[1, 1, 1]} intensity="1" />
                {/* <Suspense fallback={null}> */}
                <Animate />
                {/* </Suspense> */}
            </Canvas>
            <Canvas>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[1, 1, 1]} intensity="1" />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
            <Canvas>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[1, 1, 1]} intensity="1" />
                <Suspense fallback={null}>
                    <Model1 />
                </Suspense>
            </Canvas>
            <Canvas>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[1, 1, 1]} intensity="1" />
                <Suspense fallback={null}>
                    <Model2 />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Main
