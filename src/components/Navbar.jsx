import React from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

function Navbar({ mode, handleModeChange }) {
  return (
    <nav className={`bg-purple-800 px-4 py-3 sm:px-20 sm:py-2 flex justify-between`}>
      <span className={`font-bold hidden sm:block text-white mt-1`}>
        ℭ𝔶𝔟𝔢𝔯𝔖𝔢𝔠𝔲𝔯𝔦𝔱𝔶
      </span>
      <span className="font-bold sm:hidden text-white mt-1">ℭ𝔖</span>
      <ul className="flex sm:gap-10 mt-1">
        <li>
          <a
            href="/"
            className={`hover:bg-purple-400 hover:text-black p-1 rounded text-white`}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/threats"
            className={`hover:bg-purple-400 hover:text-black p-1 rounded text-white`}
          >
            Threats
          </a>
        </li>
        <li>
          <a
            href="/network"
            className={`hover:bg-purple-400 hover:text-black p-1 rounded text-white`}
          >
            Network
          </a>
        </li>
      </ul>
      <div
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          padding: "4px"
        }}
      >
        {mode === "light" ? (
          <Moon onClick={handleModeChange} />
        ) : (
          <Sun onClick={handleModeChange} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
