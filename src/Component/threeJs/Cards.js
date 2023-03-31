import React from 'react'
import { Tree } from '../../Data';
import Card from "../comp/Card";

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Arjuna from './Models/Arjuna';
import "./three.css"


const Cards = () => {
    return (
        <>
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
            
            <div className="grid">
                {
                    Tree.map((e, i) => (
                        <Card
                            title={e.title}
                            text={e.text}
                            img={e.img}
                            link={e.link}
                            link1={e.link2}
                            key={i}
                        />
                    ))
                }


            </div>
           
        </>
    )
}

export default Cards