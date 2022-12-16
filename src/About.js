import React from 'react';
import Header from './Header';
import Testimonail from './Testimonail';


const About = () => {
    const delay = "0.2s"
    return (
        <>
            <Header />
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">About Me</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>

                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6 mb-5">Welcome To Driver In Kalaburgi/Gulbarga</h1>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="expert.png" alt="" />
                                            <h5 className="mb-0">Expert Driver</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="quality.png" alt="" />
                                            <h5 className="mb-0">Best Quality Services</h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4" style={{ fontFamily: 'sans-serif', fontSize: 25, wordWrap: 'normal',justifyContent:'end' }}><h3>I am Rajshekhar Patil, resident of Kalaburgi popularly known as Gulbarga.</h3> I have been driving since last 25+ years. I have experiance in driving luxury cars, light motor and heavy passanger vehicle. If you need a driver in and around Kalaburgi and Bidar districs, please do not hesitate to contact me directly. The pricing is felixible and ensured that you get reasonably charges. 
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">


                                    <img className="img-fluid w-1000 wow zoomIn" data-wow-duration="2s" data-wow-delay="delay" src="image1.jpeg"
                                        style={{ marginTop: "25%", transitionDelay: " 1s,250ms", transitionProperty: "revert-layer" }}

                                    />

                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid w-1000 wow zoomIn" data-wow-delay="1.2s" src="image2.jpeg" style={{ marginTop: "25%", width: '1000px', height: '400px' }} />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonail />
        </>
    )
}

export default About








