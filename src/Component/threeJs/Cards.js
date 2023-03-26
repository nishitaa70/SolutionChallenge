import React from 'react'
import {Tree} from '../../Data';
import Card from "../comp/Card";

const Cards = () => {
  return (
    <div className="grid">
                {
                    Tree.map((e,i)=> (
                        <Card
                            title={e.title}
                            text={e.text}
                            img={e.img}
                            link={e.link}
                            key={i}
                        />
                    ))
                }
                
                
            </div>
  )
}

export default Cards