import React from 'react'
import Header from './Header';
import Carosel from './Carosel';
import Timeline from './Timeline';

export const Hc = () => {
  return (
    <>
    <Header/>
    {<hr style={{color:'white'}}></hr>}

<Carosel/>
<Timeline/>
    

    </>
  )
}

