import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./custom-login-style.css";
import { LoginContext } from "../../assets/CustomContextApi/LoginContext";

const validationSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required("Email required"),
});
const initialValues = {
  userEmail: "test@mail.com",
  password: "12345",
};
export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useContext(LoginContext);
  return (
    <div id="login-page">
      <div className="dark-overlay">
        <div className="login-inner container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <h1 className="display-2 text-success">WECON</h1>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"> </i>
                </div>
                <div className="p4 align-self-end">
                  <p>
                    <span className="text-success font-weight-bold">
                      Chating
                    </span>
                    : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quae provident, commodi eaque modi obcaecati. Laborum
                    adipisci similique officia quo!
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"> </i>
                </div>
                <div className="p4 align-self-end">
                  <p>
                    <span className="text-success font-weight-bold">
                      Wallet
                    </span>
                    : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quae provident, commodi eaque modi obcaecati. Laborum
                    adipisci similique officia quo!
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"> </i>
                </div>
                <div className="p4 align-self-end">
                  <p>
                    <span className="text-success font-weight-bold">
                      Easy Transfer
                    </span>
                    : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quae provident, commodi eaque modi obcaecati. Laborum
                    adipisci similique officia quo!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-primary text-center card-form">
                <div className="card-body">
                  <h3>Login Here</h3>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      if (
                        values?.userEmail === "test@mail.com" &&
                        values?.password === "12345"
                      ) {
                        // stuff
                        setAuth(true);
                      } else {
                        alert(
                          `wrong info\nEmail: test@mail.com & Password: 12345`
                        );
                      }
                      resetForm();
                    }}
                  >
                    {({ values, setFieldValue, errors, touched, isValid }) => (
                      <>
                        <Form>
                          <div className="form-group">
                            <Field
                              className="form-control form-control-lg"
                              name="userEmail"
                              placeholder="test@mail.com"
                              value={values?.userEmail}
                            />
                            <div className="text-light">
                              <ErrorMessage name="userEmail" />
                            </div>
                          </div>
                          <div className="form-group">
                            <Field
                              className="form-control form-control-lg"
                              name="password"
                              placeholder="12345"
                              value={values?.password}
                            />
                            <div className="text-light">
                              <ErrorMessage name="userEmail" />
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-outline-light btn-block"
                              value="Submit"
                            />
                          </div>
                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
