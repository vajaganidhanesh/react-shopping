import React from "react";
import Customized from "../customized/customized.components";

function Home() {
  return (
    <div className="d-flex">
      <Customized
        theme="bg-warning"
        title="Admin login"
        login_id="Enter Email"
        type="text"
        button="Sign Up"
      />
      <Customized
        theme="bg-success"
        title="Customer login"
        login_id="Enter Mobile"
        type="number"
        button="login"
      />
    </div>
  );
}

export default Home;
