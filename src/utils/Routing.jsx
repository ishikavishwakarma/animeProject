import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Magzines from "../components/Magzines";
import Manga from "../components/Manga";
import Character from "../components/Character";
import Anime from "../components/Anime";

const Routing = () => {
    return (
        <div>
            
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Anime/>} />
            <Route path="/manga" element={<Manga/>} />
            <Route path="/magzines" element={<Magzines />} />
            <Route path="/character" element={<Character/>} />
        </Routes>
        </div>
    );
};
export default Routing;

