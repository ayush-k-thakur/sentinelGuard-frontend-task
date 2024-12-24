import React from "react";
import sandTimer from "../assets/sandTimer.gif";

function Loader() {
  return (
      <div className="flex justify-center items-center">
        <img src={sandTimer} className="mt-48"/>
      </div>
  );
}

export default Loader;
