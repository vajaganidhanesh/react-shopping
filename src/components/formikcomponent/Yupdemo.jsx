import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Yupdemo() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
      Mobile: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("User Name Required")
        .min(3, "Name too short")
        .max(10, "Name too long.."),
      Age: yup.number().required("Age should be a number"),
      Mobile: yup.string(),
    }),
  });
  return (
    <div className="container">
      <h1>Yup Library</h1>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger"> </dd>
          <dt>Age</dt>
          <dd>
            <input
              type="text"
              name="Age"
              id=""
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger"> </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Select option</option>
              <option value="delhi">delhi</option>
              <option value="hyderabad">hyderabad</option>
            </select>
          </dd>
          <dd className="text-danger"> </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger"></dd>
          <button className="btn btn-primary">submit</button>
        </dl>
      </form>
    </div>
  );
}

export default Yupdemo;
