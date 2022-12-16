import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-material-ui-carousel';
import './App.css';
import TestimonialCard from 'material-testimonial-card';
import { Box } from '@mui/system';


const Testimonail = () => {
    return (
        <div style={{ textAlign: 'center' }}>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    justifyContent: 'center',
                    gap: 5,
                    // backgroundColor:"#cab543"
                }}

            >
                <div>
                    <h2>
                        What They Say About Our Services
                    </h2>
                </div>
            </Box>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={1000}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs:'column',md:'row',sm:'row'},
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        justifyContent: 'center',
                        gap: 5
                    }}
                >
                    <div>
                        <TestimonialCard
                            name={"Khalil Momin"}
                            image={"https://cdn.pixabay.com/photo/2014/07/31/23/33/driving-407181__340.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Mumbai"}
                        />

                    </div>
                    <div>
                        <TestimonialCard
                            name={"Shivanand"}
                            image={"https://cdn.pixabay.com/photo/2016/04/30/21/38/man-1363965_960_720.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Banglore"}
                        />

                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs:'column',md:'row',sm:'row'},
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        justifyContent: 'center',
                        gap: 5
                    }}
                >

                    <div>
                        <TestimonialCard
                            name={"Shiva"}
                            image={"https://cdn.pixabay.com/photo/2015/09/05/21/08/truck-925353_960_720.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Mumbai"}
                        />
                    </div>
                    <div>
                        <TestimonialCard
                            name={" Smith"}
                            image={"https://cdn.pixabay.com/photo/2020/07/28/04/24/beautiful-woman-5443919_960_720.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Banglore"}
                        />

                    </div>


                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs:'column',md:'row',sm:'row'},
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        justifyContent: 'center',
                        gap: 5
                    }}
                >

                    <div>
                        <TestimonialCard
                            name={"Preeti"}
                            image={"https://cdn.pixabay.com/photo/2014/07/31/23/33/driving-407181__340.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Basavakalyan"}
                        />

                    </div>
                    <div>
                        <TestimonialCard
                            name={"Priyanka"}
                            image={"https://cdn.pixabay.com/photo/2014/07/31/23/33/driving-407181__340.jpg"}
                            content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
                            project={"Bidar"}
                        />
                    </div>


                </Box>




            </Carousel>
        </div>
    )
}

export default Testimonail;








































































/*
const Testimonail = () => {
    return (

        <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                        style={{width:"150px"}} />
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h5 className="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                                <i className="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                doloremque.
                            </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                </div>
                <div className="carousel-item">
                    <img className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                        style={{width:" 150px"}} />
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h5 className="mb-3">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                                <i className="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis.
                            </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                </div>
                <div className="carousel-item">
                    <img className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width:" 150px"}} />
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h5 className="mb-3">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                                <i className="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                doloremque.
                            </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Testimonail
*/