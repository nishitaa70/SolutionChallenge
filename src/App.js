import React from 'react'
import { Route, Routes,Link } from "react-router-dom";
import Mainlanding from './Component/landing page/Main';
import MainThree from './Component/threeJs/Main';

const App = () => {
  return (
    <div className='app'>
      <nav className="navbar navbar-expand-lg navbar-light " >
        <Link className="navbar-brand font1" to={"/"}
          style={{
            textShadow:"2px 2px 3px grey",
            padding:"4px",
            fontSize:"2rem",
            letterSpacing:"2px"
          }}
        >
          <span style={{color:"blue",fontSize:"2.5rem"}} >D</span>
          <span style={{color:"red"}} >H</span>
          <span style={{color:"yellow"}} >A</span>
          <span style={{color:"green"}} >R</span>
          <span style={{color:"blue"}} >A</span>
          <span style={{color:"red"}} >A</span>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/virtual"}>Virtual</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/virtual"}>Virtual</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Mainlanding />} />
        <Route path="/virtual" element={<MainThree/>} />
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
