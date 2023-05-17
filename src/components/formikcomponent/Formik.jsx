import React from "react";
import { useFormik } from "formik";

function FormikComponent() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
      Mobile: "",
    },
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
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input
              type="text"
              name="Age"
              id=""
              onChange={formik.handleChange}
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Select option</option>
              <option value="delhi">delhi</option>
              <option value="hyderabad">hyderabad</option>
            </select>
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              onChange={formik.handleChange}
            />
          </dd>
          <button className="btn btn-primary">submit</button>
        </dl>
      </form>
    </div>
  );
}

export default FormikComponent;
