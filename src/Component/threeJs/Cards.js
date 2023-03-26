import React from 'react'
import { Tree } from '../../Data';
import Card from "../comp/Card";

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import "./three.css"
import { Suspense } from 'react'
import Arjuna from './Models/Arjuna';
import Bael from './Models/Bael';
import Peepal from './Models/Peepal';
import Banyan from './Models/Banyan';
import Neem from './Models/Neem';
import Heading from '../comp/Heading';

const Cards = () => {
    return (
        <>
            <div className="grid">
                {
                    Tree.map((e, i) => (
                        <Card
                            title={e.title}
                            text={e.text}
                            img={e.img}
                            link={e.link}
                            key={i}
                        />
                    ))
                }


            </div>
            <Heading
                text="Arjuna Tree"
            />
            <div className="threeD">
                
            <Canvas className='canvas'>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                <Suspense fallback={null}>
                    <Arjuna />
                </Suspense>
            </Canvas>
            </div>
            <Heading
                text="Bael Tree"
            />
            <div className="threeD">
            <Canvas className='canvas'>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                <Suspense fallback={null}>
                    <Bael />
                </Suspense>
            </Canvas>
            </div>
            <Heading
                text="Peepal Tree"
            />
            <div className="threeD">
            <Canvas className='canvas'>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                <Suspense fallback={null}>
                    <Peepal />
                </Suspense>
            </Canvas>
            </div>
            <Heading
                text="Banyan Tree"
            />
            <div className="threeD">
            <Canvas className='canvas'>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                <Suspense fallback={null}>
                    <Banyan />
                </Suspense>
            </Canvas>
            </div>
            <Heading
                text="Neem Tree"
            />
            <div className="threeD">
            <Canvas className='canvas'>
                <ambientLight intensity="1" />
                <OrbitControls enableZoom={false} />
                <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                <Suspense fallback={null}>
                    <Neem />
                </Suspense>
            </Canvas>
        </div>
        </>
    )
}

export default Cards