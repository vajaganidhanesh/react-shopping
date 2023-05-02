import React, { useState } from "react";
import "../../App.css";

function RealTime() {
  const [images] = useState([
    "assets/phone-1.png",
    "assets/phone-2.png",
    "assets/phone-3.png",
    "assets/phone-4.png",
  ]);

  const [current, setCurrent] = useState("");

  function handleMouseOver(e) {
    setCurrent(e.target.src);
    console.log(e.target.src);
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-3">
            {images.map((photo) => {
              return (
                <div className="d-flex" key={photo}>
                  <img
                    src={photo}
                    onMouseOver={handleMouseOver}
                    width="100"
                    className=" m-1 border border-2 border-primary img-fluid"
                    height="100"
                    alt=""
                  />
                </div>
              );
            })}
          </nav>
          <main className="col-9">
            <img className="filpImg" src={current} alt="" />
          </main>
        </div>
      </div>
    </div>
  );
}

export default RealTime;
