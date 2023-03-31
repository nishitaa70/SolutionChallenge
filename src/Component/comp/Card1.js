import React from 'react'

const Card1 = (props) => {

    const style={
        background:"transparent",
        width:"500px",
        marginBottom:" 3rem",
    }
    const a = {
        margin:" 0  1rem 0 0"
    }

    return (
        <>
            <div className="card shadow-lg rounded" style={style} key={props.key}>
                <img src={require(`../../images/${props.img}`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <a href={props.link} className="btn btn-dark w-100" style={a}>Visit</a>
                        
                    </div>
            </div>

            
        </>
    )
}

export default Card1