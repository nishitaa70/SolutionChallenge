import React, { useEffect, useState } from 'react'
import Heading from '../comp/Heading';

const Buy = () => {
  const style = {
    width:"100vw",
    margin:"auto",
    height:"80vh"
  }
const [link, setlink] = useState("https://www.google.com/maps/")
useEffect(() => {
    	if(navigator.geolocation){
    		navigator.geolocation.getCurrentPosition(showPosition)
    	  }
    	else
    	{
             alert("Sorry! your browser is not supporting")
         } 
     
     function showPosition(position){
        setlink(`https://www.google.com/maps/search/nursery/@${position.coords.latitude},${position.coords.longitude},15z/data=!3m1!4b1`)
     }
}, [])
const run = ()=>{

  window.location = link
}
  

  return (
    <div className="center col" style={style}>
        <Heading text="Buying Option"/>
        <a href="https://mybageecha.com/" className="btn btn-dark mb-5 w-25"> Online</a>
        <button onClick={run} className="btn btn-dark w-25"> Offline</button>
    </div>
  )
}

export default Buy