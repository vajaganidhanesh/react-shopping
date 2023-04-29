import React from "react";

function ClassBinding() {
  const [theme, setTheme] = React.useState("bg-light text-dark p-2 col-2");
  const [button, setButton] = React.useState("btn btn-dark w-100");
  function changeTheme(e) {
    if (e.target.checked === true) {
      setTheme("bg-dark text-light col-2");
      setButton("btn btn-light text-dark fw-bold w-100 ");
    } else {
      setTheme("bg-light text-dark col-2");
      setButton("btn btn-dark text-light fw-bold w-100 ");
    }
  }

  return (
    <div className="container-fluid ">
      <div
        className="row d-flex justify-content-center align-items-center fw"
        style={{ height: "500px" }}
      >
        <div className={theme}>
          <form action="">
            <div>
              <span>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id=""
                    onChange={changeTheme}
                  />
                  Dark Mode
                </div>
              </span>
            </div>
            <h1 className="d-flex justify-content-evenly">
              <span className="bi bi-person-fill"></span>Login
            </h1>
            <dl>
              <dt>UserName</dt>
              <dd>
                <input type="text" className="form-control" name="" id="" />
              </dd>
              <dt>Password</dt>
              <dd>
                <input type="text" className="form-control" name="" id="" />
              </dd>
              <dd>
                <button type="button" className={button}>
                  Login
                </button>
              </dd>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClassBinding;
