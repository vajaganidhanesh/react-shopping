import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

function FormikForm() {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          UserName: "",
          Age: 0,
          City: "",
          Mobile: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("User Name Required")
            .min(3, "Name too short")
            .max(10, "Name too long.."),
          Age: yup.number().required("Age should be a number"),
          Mobile: yup
            .string()
            .required("Should be a number")
            .matches(/\+91\d{10}/, " Invalid Mobile +91 with 10 digits"),
        })}
      >
        {(props) => (
          <Form>
            <dl>
              <dt>UserName</dt>
              <dd>
                <Field type="text" name="UserName" />
              </dd>
              <dd>
                <ErrorMessage name="UserName" className="text-danger" />
              </dd>
              <dt>Age</dt>
              <dd>
                <Field type="text" name="Age" />
              </dd>
              <dd>
                <ErrorMessage name="Age" />
              </dd>
              <dt>City</dt>
              <dd>
                <Field as="select">
                  <option>Select Option</option>
                  <option>Delhi</option>
                  <option>Hyderabad</option>
                </Field>
              </dd>
              <dt>Mobile</dt>
              <dd>
                <Field type="text" name="Mobile" />
              </dd>
              <dd>
                <ErrorMessage name="Mobile" />
              </dd>
              <button className="btn btn-primary" disabled={!props.isValid}>
                Submit Data
              </button>
            </dl>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
