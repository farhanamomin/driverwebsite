import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Header';
import { Hc } from './Hc';
import About from './About';

import Contact from './Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Speech from './Speech';
import Experience from './Experience';


function App() {

  const whatsapp=()=>{
    var name=document.getElementById("fname").nodeValue;
    var phone=document.getElementById("phone").nodeValue;
    var url="https://wa.me/9886387771?text="
    +"*Name:*"+name+"%0a";
    
    window.open(url,'_blank').focus();

  }
  /*
  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });
  const { mobileNumber, message } = formData;

  const SendMessages = () => {
    const CHARACTER_LIMIT = 100;
  
   
  
    
  
 
  
    const onChange = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
        
    
      

    
    */



  return (
    
  
  <Router>
  
  
  

    <Routes>

    <Route exact path="/" element={<Hc/>}></Route>
    <Route path="/c" element={<Contact />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/exp" element={<Experience/>}></Route>
    </Routes>
    {/* //<Footer/> */}
    
  </Router>
  
  
    /*
    <section style={{ backgroundColor: "grey" }} >
     
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">

                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: 150 }} />
                <h5 className="my-3">Rajapapa</h5>
                <p className="text-muted mb-1">Driver</p>
                <p className="text-muted mb-4">Gulbarga</p>
                <div className="d-flex justify-content-center mb-2">
                  <a href=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>




          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Rajappa</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">1234567890</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">1234567890</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Gulbarga</p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
        <div style={{display:"flex"}}>
          
          <form >
          <div>
        <h3>Contact Me</h3>
        </div>
            <div style={{paddingBottom:"10px",width:"400px"}}>
          <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
          </div>
          <div style={{paddingBottom:"10px",width:"400px"}}>
          <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone Number" name="email"/>
          </div>
          <div style={{textAlign:"center"}}>
          <button type="button" className="btn btn-success" onClick={whatsapp} >Send</button>
          </div>
          </form>
        </div>
      </div>
    </section>
*/
  );
}

export default App;
/*
 <button type="button" className="btn btn-primary">Follow</button>
                <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                 <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                  </p>
                  <p className="mb-1" style={{fontSize:"0.77rem"}}>Web Design</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar"  style={{width:"80%"}} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>Website Markup</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"72%"}} aria-valuenow="72"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>One Page</p>
                  <div className="progress rounded"  style={{height:"5px"}}>
                    <div className="progress-bar" role="progressbar" style={{width:"89%"}} aria-valuenow="89"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>Mobile Template</p>
                  <div className="progress rounded" style={{height:"5px"}}>
                    <div className="progress-bar" role="progressbar"  style={{width:"55%"}} aria-valuenow="55"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>Backend API</p>
                  <div className="progress rounded mb-2"  style={{height:"5px"}}>
                    <div className="progress-bar" role="progressbar"  style={{width:"66%"}} aria-valuenow="66"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            *****
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                  </p>
                  <p className="mb-1"  style={{fontSize:"0.77rem"}}>Web Design</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"80%"}}  aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1"  style={{fontSize:"0.77rem"}}>Website Markup</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"72%"}}  aria-valuenow="72"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>One Page</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"89%"}} aria-valuenow="89"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>Mobile Template</p>
                  <div className="progress rounded"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"55%"}} aria-valuenow="55"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{fontSize:"0.77rem"}}>Backend API</p>
                  <div className="progress rounded mb-2"  style={{height:5}}>
                    <div className="progress-bar" role="progressbar" style={{width:"66%"}} aria-valuenow="66"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>


            *******
            <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-globe fa-lg text-warning"></i>
                  <p className="mb-0">https://mdbootstrap.com</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-github fa-lg" style={{color:"#333333"}} ></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-twitter fa-lg"  style={{color:"#55acee"}}></i>
                  <p className="mb-0">@mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-instagram fa-lg" style={{color:"#ac2bac"}} ></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-facebook-f fa-lg" style={{color:"#3b5998"}} ></i>
                  <i className="bi bi-facebook"></i>
   
                  <p className="mb-0">mdbootstrap</p>
                </li>
              </ul>
            </div>
          </div>
*/
