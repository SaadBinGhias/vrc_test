import React from "react";
import "./makeiteasy.css";
import AccordianBox from "./accordianbox/accordianbox";
function MIE() {
  return (
    <div className="make_main">
      <div className="container">
        <div className="make_it_inner">
          <h2>We make it easy for you to plug into digital payments</h2>
          <AccordianBox />
        </div>
      </div>
    </div>
  );
}
export default MIE;
