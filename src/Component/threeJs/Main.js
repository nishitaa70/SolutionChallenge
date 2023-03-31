import { Route, Routes } from "react-router-dom";
import Cards from "./Cards";
import BaelEx from "./Explore/BaelEx";
import "./ex.css"
import BanyanEX from "./Explore/BanyanEX";
import PeepalEx from "./Explore/PeepalEx";
import NeemEx from "./Explore/NeemEx";
import ArjunaEx from "./Explore/ArjunaEx";
import AshokaEx from "./Explore/AshokaEx";
import Buy from "./Buy";

const Main = () => {
    return (
       <>
        <Routes>
            <Route path="/" element={<Cards/>} />
            <Route path="/bael" element={<BaelEx/>} />
            <Route path="/banyan" element={<BanyanEX/>} />
            <Route path="/peepal" element={<PeepalEx/>} />
            <Route path="/neem" element={<NeemEx/>} />
            <Route path="/arjuna" element={<ArjunaEx/>} />
            <Route path="/ashoka" element={<AshokaEx/>} />
            <Route path="/buy" element={<Buy/>} />
            {/* <Route path="/virtual/*" element={<MainThree/>} /> */}
        </Routes>
            
       </>
    );
}

export default Main
