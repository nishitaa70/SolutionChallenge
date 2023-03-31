import React from 'react'
import { Route, Routes,Link } from "react-router-dom";
import Mainlanding from './Component/landing page/Main';
import MainThree from './Component/threeJs/Main';
import { Nav } from './Data';
import MainSolar from './Component/Solar/MainSolar';
import MainContact from './Component/contact/MainContact';
import Awareness from './Component/Awareness/Awareness';


const App = () => {
  return (
    <div className='app'>
      <nav className="navbar navbar-expand-lg navbar-light align-middle " >
        <Link className="navbar-brand font1" to={"/"}
          style={{
            textShadow:"2px 2px 3px grey",
            padding:"4px",
            fontSize:"2rem",
            letterSpacing:"2px",
            color:"#0a7114"
          }}
        >
          <span style={{fontSize:"3rem"}}>D</span>
          HARRA
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              Nav.map((e,i)=>(
                <li className="nav-item " key={i}>
                <Link className="nav-link" to={e.link}>{e.title} <span className="sr-only">(current)</span></Link>
              </li>
              ))
            }
      
           
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Mainlanding />} />
        <Route path="/virtual/*" element={<MainThree/>} />
        <Route path="/solar" element={<MainSolar/>} />
        <Route path="/awareness" element={<Awareness/>} />
        <Route path="/contact" element={<MainContact/>} />
      </Routes>
    </div>
  )
}

export default App