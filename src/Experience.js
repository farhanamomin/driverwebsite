import React from 'react';
import styles from "./App.css";
import Header from './Header';

const Experience = () => {
  return (
    <>
    <Header/>
    <div className="container" >
  <div className="row">
    <div className="col">
      <p style={{marginTop:'180px',wordWrap:'break-word'}}>
        <h3> Experience</h3>
        <p style={{fontSize:25}}>
Rajsekhar Patil having 25+ years of experience in driving luxury cars and passenger vehicles.
 He can speak in Kannada, Hindi, Marathi and understand English.
 </p>
</p>
    </div>
    <div className="col">
      <img src='exp.png' style={{marginTop:'160px'}}></img>
    </div>
   
  </div>
</div>
    </>
  )
}

export default Experience