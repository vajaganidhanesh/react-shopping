import React from "react";

function Customized(props) {
  return (
    <div className="container-fluid">
      <form
        className={`w-50 border border-2 border-primary p-2 ${props.theme}`}
      >
        <h2>
          <span className="bi bi-person-fill"></span>
          {props.title}
        </h2>
        <dl>
          <dt>{props.login_id} </dt>
          <dd>
            <input type={props.type} className="form-control" />{" "}
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control" />
          </dd>
        </dl>
        <button className="btn btn-primary">{props.button}</button>
      </form>
    </div>
  );
}

export default Customized;
