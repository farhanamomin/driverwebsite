import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import Carosel from './Carosel';
import './App.css';
import './Navbar.css';


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const Header = () => {
  
  return (
 
    <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{backgroundColor:'#cab543'}}>
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
            <img src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-driver-icon-png-image_515768.jpg" alt="" width="100" style={{paddingTop:30}} className="custom"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            
                <div className="nav-links  " style={{paddingTop:'50px',marginLeft:'auto'}}>
    <a href="#">Home</a>
    <Link to="/about">About</Link>
    
    <Link to="/exp">Experience</Link>
   
    <Link to="/c">Contact</Link>
   
    
  </div>
              
                
            </div>
        </div>
    </nav>
    



  )
}

export default Header
/*
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a className="navbar-brand" href="#">navbar</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTop">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><a className="nav-link" href="#about">About</a> </li>
      <li className="nav-item"><a className="nav-link" href="#portfolio">Services</a> </li>
      <li className="nav-item"><a className="nav-link" href="#contact">Contact</a> </li>
      <li className="nav-item"><a className="nav-link" href="#social">Social Media</a> </li>
    </ul>
  </div>
  





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>




</nav>
 
  

)
}

export default Header








/*


    <nav className="navbar fixed-top  navbar-custom " style={{backgroundColor:'#cab543'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-driver-icon-png-image_515768.jpg" alt="" width="100"  className="d-inline-block align-text-top"/>
      
    </a>
   
       <div className="nav-links ">
    <a href="#">Home</a>
    <Link to="/about">About</Link>
    
    <Link to="/exp">Experience</Link>
    <a href="#">Services</a>
    <Link to="/c">Contact</Link>
   
    
  </div>
  </div>
  
 
  
  
</nav>
  )
}

export default Header































































function Header() {
  return (
    <>
    <div className="navbar">
 
  
  <div className="nav-header">
    <div className="nav-logo">
      <a href="#">
        <img src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-driver-icon-png-image_515768.jpg" style={{backgroundAttachment:'fixed',zIndex:5}} width="100px" alt="logo"/>
      </a>
    </div>
  </div>
   
  
  <input type="checkbox" id="nav-check"/>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
 
  
  <div className="nav-links">
    <a href="#">Home</a>
    <Link to="/about">About</Link>
    
    <Link to="/exp">Experience</Link>
    <a href="#">Services</a>
    <Link to="/c">Contact</Link>
   
    
  </div>
 
</div>

  </>
  )
}

export default Header

*/