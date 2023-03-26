import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

    const style={
        background:"transparent",
    }

    return (
        <>
            <div className="card" style={style} key={props.key}>
                <img src={require(`../../images/${props.img}`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <Link to={props.link} className="btn btn-dark">Explore!!!</Link>
                    </div>
            </div>
        </>
    )
}

export default Card