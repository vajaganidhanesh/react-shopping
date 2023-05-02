/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";
import "../../App.css";
import logo from "../../logo.svg";

function Scrolling() {
  const [images] = useState([
    "assets/phone-1.png",
    "assets/phone-2.png",
    "assets/phone-3.png",
    "assets/phone-4.png",
  ]);

  const [style, setStyle] = useState({ position: "", top: "", left: "" });

  function handleMouseOver(e) {
    // for (let val in e.currentTarget) {
    //   console.log(val);
    // }
    e.currentTarget.stop();
  }

  function handleMouseOut(e) {
    e.currentTarget.start();
  }

  function handleMouseMove(e) {
    setStyle({
      position: "fixed",
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  }

  return (
    <div
      className="container-fluid"
      style={{ height: "1000px" }}
      onMouseMove={handleMouseMove}
    >
      <div className="mt-4">
        <marquee
          direction="left"
          scrollamount="15"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {images.map((photos) => (
            <img
              key={photos}
              src={photos}
              className="me-2 filpImg img-fluid"
              width={100}
              height={100}
              alt=""
            />
          ))}
        </marquee>
      </div>
      <img src={logo} style={style} width="50" height="50" alt="" />
    </div>
  );
}

export default Scrolling;
