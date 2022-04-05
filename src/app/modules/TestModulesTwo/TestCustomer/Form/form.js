import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string()
    .email()
    .required("Email required"),
  userAddress: Yup.string().required("Address required"),
});

export default function _Form({
  initData,
  btnRef,
  saveHandler,
  resetBtnRef,
  setFileObjects,
  fileObjects,
  isEdit,
}) {
  return (
    <>
      <Formik
        initialValues={initData}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          saveHandler(values);
          resetForm(initData);
        }}
      >
        {({
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          setFieldValue,
          isValid,
        }) => (
          <>
            <Form className="form form-label-right">
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
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>

              <button
                type="reset"
                style={{ display: "none" }}
                ref={resetBtnRef}
                onSubmit={() => resetForm(initData)}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
