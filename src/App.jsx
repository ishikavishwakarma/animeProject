import React from "react";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";
import './App.css'
const App = () => {
  return (
    <div className="font-bold bg-zinc-100 ">
      <div className="">
        <Nav />
        <Routing />
      </div>
    </div>
  );
};

export default App;
