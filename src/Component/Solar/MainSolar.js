import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { Solar } from '../../Data'
import Card1 from '../comp/Card1'
const MainSolar = () => {

  const Alert = {
    // width:"350px",
    margin: "1rem",
    cursor: "pointer"
  }
    
  function Model(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/solar-panel/model.gltf')
    return <primitive object={scene} {...props} />
  }
  

  return (
    <div>

      <div className="threeD" >

        <Canvas className='canvas'>
          <ambientLight intensity="1" />
          <OrbitControls enableZoom={false} />
          <directionalLight position={[5, -1.5, 5]} intensity=".5" />
          <directionalLight position={[10, 3.5, 5]} intensity=".5" />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>

      <div className="grid">
        {Solar.map((e,i)=>(
          <Card1
              title={e.title}
              img={e.img}
              link={e.link}
              key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default MainSolar
/* `
// {
//   https://www.loomsolar.com/
//   https://www.tatapowersolar.com/
https://solarrooftop.gov.in/
// }
*/ 