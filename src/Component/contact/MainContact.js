import React from 'react'
import Heading from "../comp/Heading"
import { Team } from '../../Data'

const MainContact = () => {
  return (
    <>
      <br />
      <Heading text="Contact Us"/>
      
      <div className='contactForm center mb-5 shadow-lg' >
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

      <div className="contact pt-5 mb-5">
                <h2>Our Team</h2>
                <div className="team">
                    {
                        Team.map((e, i) => {
                            return (
                                <div className="team_card mb-5">
                                    <div className="team_up">
                                        <img src={require(`../../images/member/${e.name}.jpeg`)} alt="" />
                                    </div>
                                    <div className="team_down">
                                        <h3>{e.name}</h3>
                                        <p>{e.desg}</p>
                                        <div className="links">
                                            <a href={e.linkedin}><i className="fa-brands fa-linkedin-in" title='linkedin'></i></a>
                                            <a href={e.portfolio}><i class="fa-solid fa-person" title='Portfolio'></i></a>
                                            <a href={e.github}><i className="fa-brands fa-github" title='github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default MainContact


