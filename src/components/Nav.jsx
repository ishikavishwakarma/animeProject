import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Nav = () => {

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <div className="flex align-top fixed bg-zinc-900 justify-center w-full py-6">
      <div className="w-2/6 flex text-xl text-zinc-300 font-semibold align-middle justify-between">
        <Link className={`nav-link ${location.pathname ===  "/"  ? "active" : " "}`} to="/">Home</Link>
        <Link className={`nav-link ${location.pathname ===  "/magzines"  ? "active"  : "  "}`} to="/magzines">Magzines</Link>
        <Link className={`nav-link ${location.pathname ===  "/manga"  ? "active"  :  "  "}`} to="/manga">Manga</Link>
        <Link className={`nav-link ${location.pathname ===  "/character"  ? "active"  :  "  "}`} to="/character">Character</Link>
      </div>
    </div>
  );
};

export default Nav;
