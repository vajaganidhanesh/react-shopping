import React, { useState } from "react";

function Validations() {
  const [userName, setUserName] = useState("");
  const [tip, setTip] = useState("");

  const [country, setCountry] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [regExp, setRegExp] = useState(/ /);
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  function ChangeCase() {
    setUserName(userName.toUpperCase());
    if (userName === "") {
      setTip("UserName required");
    } else {
      setTip("");
    }
  }

  function handleChanges(e) {
    setUserName(e.target.value);
  }
  function showTip() {
    setTip("the values are in Block letters");
  }

  function handleCountry(e) {
    setCountry(e.target.value);
    switch (e.target.value) {
      case "India":
        setPlaceholder("+91 10 digits number");
        setRegExp(/\+91\d{10}/);
        break;
      case "US":
        setPlaceholder("+(1)(20)(460) 345 3210");
        setRegExp(/\+\(1\)\(\d{2}\)\(\d{3}\)\s\d{3}\s\d{4}/);
        break;
      case "UK":
        setPlaceholder("+(42)(22) 2534 3452");
        setRegExp(/\+\(\d{2}\)\(\d{2}\)\s\d{4}\s\d{4}/);
        break;
      default:
        break;
    }
  }

  function handleMobile(e) {
    setMobile(e.target.value);
  }

  function handleSubmitClick() {
    if (mobile.match(regExp)) {
      document.write("<h2>Verified successfully ...</h2>");
    } else {
      setMobileError(`Invalid Mobile - ${placeholder}`);
    }
  }
  function windowOpen() {
    window.open("assets/phone-1.png", "mobile", "width=400 height=400");
  }

  return (
    <div className="container">
      <dl>
        <dt>UserName</dt>
        <dd>
          <input
            type="text"
            onFocus={showTip}
            className="form-control"
            onChange={handleChanges}
            value={userName}
            onBlur={ChangeCase}
          />
        </dd>
        <dd>{tip} </dd>

        <dt>Select Country</dt>
        <dd>
          <select name="" id="" onChange={handleCountry}>
            <option>Select Country</option>
            <option>India</option>
            <option>US</option>
            <option>UK</option>
          </select>
        </dd>
        <dd>
          <input
            type="text"
            onChange={handleMobile}
            name=""
            id=""
            placeholder={placeholder}
          />
        </dd>
        <dd className="text-danger">{mobileError}</dd>
        <dd>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
          <button className="btn btn-primary" onDoubleClick={windowOpen}>
            doubleClickToOpenImage
          </button>
        </dd>
      </dl>
    </div>
  );
}

export default Validations;
