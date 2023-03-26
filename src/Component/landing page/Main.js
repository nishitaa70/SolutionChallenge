import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../comp/Heading'
import "./landingpage.css"

const Main = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="img center">
                        <img src={require("../../images/c1.jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="img center">
                        <img src={require("../../images/c3.jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="img center">
                        <img src={require("../../images/c2.jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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
            <section className='p-4'>
                <Heading
                    size="3rem"
                    color="green"
                    text="heading"
                    des ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum hic dolorem mollitia impedit omnis. Ab quasi esse debitis modi facilis veniam nostrum praesentium ex dignissimos quaerat eaque, numquam, qui provident voluptatibus ipsam voluptas."
                />
               
                <div className="center mt-5 justify-content-around">

                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link href="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>

                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link href="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>

                </div>
            </section>
            <hr className='hr' />
            <section className="p-4">
            <Heading
                    size="3rem"
                    color="green"
                    text="heading"
                    des ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum hic dolorem mollitia impedit omnis. Ab quasi esse debitis modi facilis veniam nostrum praesentium ex dignissimos quaerat eaque, numquam, qui provident voluptatibus ipsam voluptas."
                />
                <div className="center justify-content-around mt-5">
                    <div style={{width:"60%"}}>
                        Lorem ipsum dolor, sit amet consect
                        etur adipisicing elit. At, sunt facilis nisi soluta incidunt, facere iste, neque beatae repellendus non magnam unde quos fugit cum aperiam eius eum officiis dolorem labore assumenda sed. Natus iste fugiat labore esse, facere aut?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatibus eius cupiditate ullam tempore quam architecto laborum officia suscipit rerum 
                        <br /><br />
                        velit quia, possimus distinctio earum asperiores voluptate, magni cumque nobis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus dolore ea error ipsam ducimus optio deserunt harum cupiditate. Tempore nesciunt, cupiditate facere tenetur eius fuga dolores laborum quam officiis.
                    </div>
                    <img src={require("../../images/s2.jpeg")} style={{width:"20%",aspectRatio:"2/1.5"}} alt="" />
                </div>
                <div className="center justify-content-around mt-5">
                    <img src={require("../../images/s1.jpeg")} style={{width:"20%",aspectRatio:"2/1.5"}}  alt="" />
                    <div style={{width:"60%"}}>
                        Lorem ipsum dolor, sit amet consect
                        etur adipisicing elit. At, sunt facilis nisi soluta incidunt, facere iste, neque beatae repellendus non magnam unde quos fugit cum aperiam eius eum officiis dolorem labore assumenda sed. Natus iste fugiat labore esse, facere aut?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatibus eius cupiditate ullam tempore quam architecto laborum officia suscipit rerum 
                        <br /><br />
                        velit quia, possimus distinctio earum asperiores voluptate, magni cumque nobis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus dolore ea error ipsam ducimus optio deserunt harum cupiditate. Tempore nesciunt, cupiditate facere tenetur eius fuga dolores laborum quam officiis.
                    </div>
                </div>
                <div className="center justify-content-around mt-5">
                    <div style={{width:"60%"}}>
                        Lorem ipsum dolor, sit amet consect
                        etur adipisicing elit. At, sunt facilis nisi soluta incidunt, facere iste, neque beatae repellendus non magnam unde quos fugit cum aperiam eius eum officiis dolorem labore assumenda sed. Natus iste fugiat labore esse, facere aut?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatibus eius cupiditate ullam tempore quam architecto laborum officia suscipit rerum 
                        <br /><br />
                        velit quia, possimus distinctio earum asperiores voluptate, magni cumque nobis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus dolore ea error ipsam ducimus optio deserunt harum cupiditate. Tempore nesciunt, cupiditate facere tenetur eius fuga dolores laborum quam officiis.
                    </div>
                    <img src={require("../../images/s3.jpeg")} style={{width:"20%",aspectRatio:"4/3"}} alt="" />
                </div>
            </section>
        </>
    )
}

export default Main