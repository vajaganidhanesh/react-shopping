import React, { useState } from "react";

function InlineStyle() {
  const [styles, setStyles] = useState({ fontSize: 10, color: "red" });

  function fontChange(e) {
    console.log(e.target.value);
    setStyles({
      fontSize: e.target.value + "px",
      color: styles.color,
    });
  }

  function fontColor(e) {
    console.log(e.target.value);
    setStyles({
      fontSize: styles.fontSize,
      color: e.target.value,
    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <dl className="container">
              <dt>FontRange</dt>
              <dd>
                <input
                  type="range"
                  name=""
                  id=""
                  min="10"
                  max="100"
                  onChange={fontChange}
                />
              </dd>
              <dt>Fontcolor</dt>
              <dd>
                <input type="color" name="" id="" onChange={fontColor} />
              </dd>
            </dl>
          </div>
          <div className="col-6">
            <h1 style={styles}>Sample text</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default InlineStyle;
