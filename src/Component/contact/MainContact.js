import React from 'react'
import Heading from "../comp/Heading"

const MainContact = () => {
  return (
    <>
      <br />
      <Heading text="Contact Us"/>
      <div className='contact center' >
        <form >
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Name</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Message</span>
            </div>
            <textarea className="form-control" aria-label="With textarea" style={{ height: "100px" }}></textarea>
          </div>

          <br />
          <button type="submit" className="btn btn-dark" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default MainContact


