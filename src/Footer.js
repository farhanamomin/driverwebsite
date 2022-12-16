import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TfiTwitterAlt } from 'react-icons/tfi'
import { FaFacebook } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {IoLogoWhatsapp} from 'react-icons/io'


const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h1 className="text-white mb-4">Driver In Kalaburgi/Gulbarga</h1>
                            <span>Are you looking for a driver for your road trip around Kalaburgi/Gulabarga? You may please contact directly on contact details given below. I ensure that your trip is enjoyable with saftey as priority.</span>
                        </div>
                    </div>
                    <hr style={{ color: '#7F8499' }} />
                    <div className="row g-5">
                        <div className="col-lg-3 col-lg-4">
                            <h5 className="text-light mb-4">Get In Touch</h5>
                            <p><GoLocation size={25} color='orange' />Kalaburgi/Gulbarga</p>
                            <p><AiFillPhone size={25} color='orange' />+91 9886387771 </p>
                            <p>< AiOutlineMail size={25} color='orange' /> Rajushpatil@gmail.com</p>
                        </div>


                        <div className="col-lg-3 col-lg-4">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <   Link className="btn btn-link" to="/c">Contact Us</Link>
                           
                            <a className="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-lg-4">
                            <h5 className="text-light mb-4">Follow Us</h5>
                            <div className="d-flex">
                                <a href=''><TfiTwitterAlt size={27} color='#1DA1F2' /></a>

                            </div>
                            <div className="d-flex">

                                <a href=""><FaFacebook size={27} color='#3b5998' /></a>
                            </div>
                            <div className="d-flex">

                                <a href="https://web.whatsapp.com/send?phone=${+919886387771}"><IoLogoWhatsapp size={27} color=' #4FCE5D' /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#"></a> All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <p style={{ color: 'white', }}>kfarhanamomin </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="lib/counterup/counterup.min.js"></script>
            <script src="lib/parallax/parallax.min.js"></script>


            <script src="js/main.js"></script>
        </>
    )
}

export default Footer