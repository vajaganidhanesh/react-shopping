import React, { useState } from "react";

function KeyEvents() {
  const [users] = useState([
    { name: "john" },
    { name: "john1" },
    { name: "dhanesh" },
  ]);

  const [userError, setUserError] = useState("");
  const [errorClass, setErrorClass] = useState("");
  const [passwordClass, setPasswordClass] = useState({ display: "none" });

  function handleInputData(e) {
    for (let user of users) {
      if (user.name === e.target.value) {
        setUserError("User Name Taken - Try Another");
        setErrorClass("text-danger");
        break;
      } else {
        setUserError("User Name Available");
        setErrorClass("text-success");
      }
    }
  }
  function handlePasswordValue(e) {
    if (e.which >= 65 && e.which <= 90) {
      setPasswordClass({ display: "block" });
    } else {
      setPasswordClass({ display: "none" });
    }
  }

  return (
    <>
      <dl className="container">
        <dt>UserName</dt>
        <dd>
          <input type="text" name="" id="" onKeyUp={handleInputData} />
        </dd>
        <dd className={errorClass}>{userError}</dd>

        <dt>Password</dt>
        <dd>
          <input
            type="password"
            name=""
            id=""
            onKeyPress={handlePasswordValue}
          />
        </dd>
        <dd className="text-warning" style={passwordClass}>
          <span className="bi bi-exclamation-triangle"></span> Warning Caps : On
        </dd>
      </dl>
    </>
  );
}

export default KeyEvents;
