import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createNewUser } from "./_api";
// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string()
    .email()
    .required("Email required"),
  userAddress: Yup.string().required("Address required"),
});
const initialValues = {
  userName: "",
  userEmail: "",
  userAddress: "",
};
export default function TestUsersCreate() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const itemsData = {
            userId: 1,
            title: values?.userName,
            body: values?.userEmail,
            address: values?.userAddress,
          };
          createNewUser(itemsData);
          resetForm();
        }}
      >
        {({ values, setFieldValue, errors, touched, isValid }) => (
          <>
            <Form>
              <div className="container">
                <div className="form-group row py-5">
                  <div className="col-lg-4">
                    <label>User Name</label>
                    <Field
                      className="form-control"
                      name="userName"
                      placeholder="John Doe"
                      value={values?.userName}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userName" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label>Email</label>
                    <Field
                      className="form-control"
                      name="userEmail"
                      placeholder="test@mail.com"
                      value={values?.userEmail}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userEmail" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label>Address</label>
                    <Field
                      className="form-control"
                      name="userAddress"
                      placeholder="City avenue, 12/B"
                      value={values?.userAddress}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userAddress" />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
