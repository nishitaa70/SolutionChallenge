import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

    const style={
        background:"transparent",
        width:"450px ",
        boxShadow:"0px 0px 20px grey",
        marginBottom:" 3rem",
        // margin:"1rem"
    }
    const a = {
        margin:" 0  1rem 0 0"
    }

    return (
        <>
            <div className="card" style={style} key={props.key}>
                <img src={require(`../../images/${props.img}`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <Link to={props.link} className="btn btn-dark" style={a}>Explore</Link>
                        <Link to={props.link1} className="btn btn-dark">Buy Now</Link>
                    </div>
            </div>

            
        </>
    )
}

export default Card