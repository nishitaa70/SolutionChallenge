import React from 'react'
import { Route, Routes,Link } from "react-router-dom";
import Mainlanding from './Component/landing page/Main';
import MainThree from './Component/threeJs/Main';

const App = () => {
  return (
    <div className='app'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">Action</Link>
                <Link className="dropdown-item" href="#">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Mainlanding />} /> */}
        <Route path="/" element={<MainThree/>} />
      </Routes>
    </div>
  )
}

export default App

// import "./styles.css";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";
// import Model from "./ModelDraco";

// export default function App() {
//   return (
//     <div className="App">
//       <Canvas>
//           <OrbitControls />
//         <Suspense fallback={null}>
//           <Model/>
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
