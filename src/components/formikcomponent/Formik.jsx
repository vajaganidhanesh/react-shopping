import React from "react";
import { useFormik } from "formik";

function FormikComponent() {
  //
  //
  function UserValidation(formbody) {
    //
    var errors = {};

    if (formbody.UserName === "") {
      errors.UserName = "User Name Required";
    } else if (formbody.UserName.length < 4) {
      errors.UserName = "User name should be more then 4 characters";
    } else {
      errors.UserName = "";
    }

    if (isNaN(formbody.Age)) {
      errors.Age = "Age must be a number";
    } else {
      errors.Age = "";
    }

    if (formbody.City === "-1") {
      errors.City = "Select one city";
    } else {
      errors.City = "";
    }

    if (formbody.Mobile.match(/\+91\d{10}/)) {
      errors.Mobile = "";
    } else {
      errors.Mobile = "Invalid number should starts with +91";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
      Mobile: "",
    },
    validate: UserValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger">{formik.errors.UserName} </dd>
          <dt>Age</dt>
          <dd>
            <input
              type="text"
              name="Age"
              id=""
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger">{formik.errors.Age} </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Select option</option>
              <option value="delhi">delhi</option>
              <option value="hyderabad">hyderabad</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City} </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile} </dd>
          <button className="btn btn-primary">submit</button>
        </dl>
      </form>
    </div>
  );
}

export default FormikComponent;
