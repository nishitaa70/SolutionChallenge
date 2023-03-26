import { Route, Routes } from "react-router-dom";
import Cards from "./Cards";


const Main = () => {
    return (
       <>
        <Routes>
            <Route path="/" element={<Cards/>} />
            {/* <Route path="/virtual/*" element={<MainThree/>} /> */}
        </Routes>
            
       </>
    );
}

export default Main
