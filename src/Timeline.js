import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiFillProfile } from 'react-icons/ai';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {GrUserExpert} from 'react-icons/gr';
import {MdDriveEta} from 'react-icons/md';
import { Link } from 'react-router-dom';



const Timeline = () => {
  return (
    <>
    <div>
      <h3 style={{textAlign:'center',paddingBottom:'10px',marginBottom:'15px',marginTop:'15px',backgroundColor:'#cab543'}}>How It Works</h3>
    </div>
    <div style={{backgroundColor: '#20B2AA'}}>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' ,animation:'true'}}
//contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Step-1"
    iconStyle={{ background: '#cab543', color: 'white' }}
   icon={<MdDriveEta />}
   animate={true}
  
   
  >
    <h3 className="vertical-timeline-element-title">Want a  driver in & around Kalaburgi/Gulbarga</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Check my profile and Experience
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Step-2"
    iconStyle={{ background: '#cab543', color: '#fff' }}
    icon={<GrUserExpert />}
  >
    <h3 className="vertical-timeline-element-title">Discuss About Your Trip</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Discuss Availaibility and Pricing by Directly Contacting either through Call/Whatsapp

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Step-3"
    iconStyle={{ background:'#cab543' , color: '#fff' }}
    icon={<BsFillTelephoneOutboundFill />}
  >
    <h3 className="vertical-timeline-element-title"> Confirm Your Ride </h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Step-4"
    iconStyle={{ background: '#cab543', color: '#fff' }}
    icon={<BsWhatsapp />}
  >
    <h3 className="vertical-timeline-element-title">Option for whatsup call </h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    whatsup call
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  
</div>
</>
  )
}

export default Timeline;
 
