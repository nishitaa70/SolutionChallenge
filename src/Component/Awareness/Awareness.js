import React from 'react'
import Heading from '../comp/Heading'

const Awareness = () => {
  return (
    <>
            <section className="p-4 center col">
            <Heading
                    size="3rem"
                    color="green"
                    text="Awareness"
                />
                <div>

                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4>Reduce, reuse, and recycle: </h4>
                        Cut down on what you throw away. Follow the three "R's" to conserve natural resources and landfill space.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4>Educate: </h4>
                        When you further your own education, you can help others understand the importance and value of our natural resources.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4>Volunteer: </h4>
                        Volunteer for cleanups in your community. You can get involved in protecting your watershed, too.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4>Conserve water: </h4>
                        The less water you use, the less runoff and wastewater that eventually end up in the ocean.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4>Choose sustainable: </h4>
                        Learn how to make smart seafood choices at <a href="www.fishwatch.gov"> &#160; www.fishwatch.gov</a>.
                    </p>
                </div>

                </div>
                <img src={require("../../images/aware.jpeg")} alt="" className='w-75'/>
               <div>
               <div className="center justify-content-start mt-5 res">
                    <p className='center res'>
                        <h4 className=''>Shop wisely: </h4>
                        Buy less plastic and bring a reusable shopping bag.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4 className=''>Use long-lasting light bulbs: </h4>
                        Energy efficient light bulbs reduce greenhouse gas emissions. Also flip the light switch off when you leave the room!
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4 className=''>Plant a tree: </h4>
                        Trees provide food and oxygen. They help save energy, clean the air, and help combat climate change.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center res '>
                        <h4 className=''>Don't send chemicals into our waterways: </h4>
                        Choose non-toxic chemicals in the home and office.
                    </p>
                </div>
                <div className="center justify-content-start mt-5 res">
                    <p className='center  res'>
                        <h4 className=''>Bike more: </h4>
                        Drive less.
                    </p>
                </div>
               </div>
            </section>
    </>
  )
}

export default Awareness