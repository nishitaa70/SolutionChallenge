import React from 'react'

const Heading = (props) => {
    const style={
        fontSize:props.size,
        color:props.color,
        width:"100%",
        textAlign:"center",
        margin:"2rem 0",
        textTransform: "uppercase",
        textShadow:"1px 1px 5px gray"
    }
  return (
    <>
    <h1 style={style}>
        {props.text}
    </h1>
     <center>
     <h6 className='pr-4 pl-4 lg'>{props.des}</h6>
 </center>
    </>
  )
}

export default Heading