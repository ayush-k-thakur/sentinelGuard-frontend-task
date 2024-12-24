import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Threats from "./components/Threats";
import Network from "./components/Network";
import Loader from "./components/Loader";

function App() {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  
  return (
    <div>
      {/* if(loading) ?  */}
      <div
        className={`h-screen flex flex-col ${
          mode === "light" ? "bg-white" : "bg-zinc-800"
        }`}
      >
        <Navbar mode={mode} handleModeChange={handleModeChange} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard mode={mode} />} />
            <Route path="/threats" element={<Threats mode={mode} />} />
            <Route path="/network" element={<Network mode={mode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
