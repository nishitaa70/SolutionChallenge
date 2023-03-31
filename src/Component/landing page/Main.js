import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../comp/Heading'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

const Main = () => {


    function Solar(props) {
        const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/solar-panel/model.gltf')
        return <primitive object={scene} {...props} />
      }

  
    function Tree(props) {
        const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf')
        return <primitive object={scene} {...props} scale=".3" position={[0, Math.PI / -1,Math.PI / -1]}/>
      }
    return (
        <>
            {/* scroller */}
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="img center">
                            <img src={require("../../images/c1.webp")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>DHARAA</h5>
                            <p>Dharaa name meaning in Hindi is <b>धरती</b>. Dharaa meaning in english is <b>Earth</b>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img center">
                            <img src={require("../../images/c2.webp")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Solar Panel</h5>
                            <p>A Solar panels is a device that converts light from the sun, into electricity that can be used to power electrical loads.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img center">
                            <img src={require("../../images/c3.webp")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Trees</h5>
                            <p>Trees improve water catchment, generate oxygen, reduce pollution and benefit posterity while decarbonising the atmosphere.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <section>
                <Heading
                    size="3rem"
                    color="green"
                    text="Solar Panel"
                />

                <div className="flex center">
                    <div className="Innerflex center col">
                            <p>
                            As a renewable source of power, solar energy has an important role in reducing greenhouse gas emissions and mitigating climate change, which is critical to protecting humans, wildlife, and ecosystems. Solar energy can also improve air quality and reduce water use from energy production. Because ground-mounted photovoltaics (PV) and concentrating solar-thermal power installations require the use of land, sites need to be selected, designed, and managed to minimize impacts to local wildlife, wildlife habitat, and soil and water resources.
                                <br />
                             The U.S. Department of Energy (DOE) Solar Energy Technologies Office (SETO) supports research to better understand how solar energy installations, wildlife, and ecosystems interact and to identify strategies that maximize benefits to the local environment.
                            </p>
                            <Link className='btn btn-dark w-100' to="/solar">View</Link>
                    </div>
                    <div className="Innerflex">
                        <Canvas className='canva'>
                            <ambientLight intensity="1" />
                            <OrbitControls enableZoom={false} />
                            <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                            <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                            <Suspense fallback={null}>
                                <Solar />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </section>
            <hr className='hr' />
            <section>
            <Heading
                    size="3rem"
                    color="green"
                    text="Trees"
                />

                <div className="flex center">
                    <div className="Innerflex">
                        <Canvas className='canva'>
                            <ambientLight intensity="1" />
                            <OrbitControls enableZoom={false} />
                            <directionalLight position={[5, -1.5, 5]} intensity=".5" />
                            <directionalLight position={[10, 3.5, 5]} intensity=".5" />
                            <Suspense fallback={null}>
                                <Tree />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="Innerflex center col">
                            <p>
                            Giving us oxygen : Tree planting also brings a couple of really important benefits for humans. Besides helping us to feel connected to nature and maybe even improving our mental health
                                <br />
                                You need oxygen to breathe; just like every other human being. Trees help with this. They take in carbon dioxide from the atmosphere and use it to create carbohydrates to help them grow. As a result of this process, they release oxygen back into the atmosphere. On average, a mature tree can release enough oxygen to sustain two people.
                            </p>
                            <Link className='btn btn-dark w-100' to="/solar">View</Link>
                    </div>
                </div>
                <hr className='hr' />
            </section>
            <section className="con mb-5">
            <Heading
                    size="3rem"
                    color="green"
                    text="Get In Touch"
                    des={<Link className='btn btn-dark w-75' to="/contact">Contact</Link>}
                />
              
            </section>
        </>
    )
}

export default Main

/*

  function Model(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf')
    return <primitive object={scene} {...props} />
  }
*/