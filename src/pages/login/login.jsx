import React, { useState } from "react";
import "./login.css";
import LoginHeader from "../../components/loginheader";
import { useNavigate } from "react-router-dom";
function Login() {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const navigate = useNavigate();

  const getEmail = (e) => {
    setEmail(e);
  };
  const getPassword = (e) => {
    setPassword(e);
  };
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailTest = emailRegex.test(emailValue);
  const handleSubmit = () => {
    if (emailValue !== "" && passwordValue !== "") {
      if (passwordValue.length >= 8) {
        navigate("/");
      }
    }
  };

  return (
    <>
      <LoginHeader />
      <div className="main_login vh-100 d-flex justify-content-center align-items-center bg-dark">
        <div className="container">
          <h1 className="login_heading text-center pb-5">LogIn</h1>
          <div className="login_inner col-7 mx-auto  bg-light rounded">
            <div className="form_part p-5">
              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-12">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your email"
                    onChange={(e) => getEmail(e.target.value)}
                  />
                  {emailTest === false ? (
                    <div
                      className={
                        emailValue === "" ? "d-none" : "d-block text-danger"
                      }
                    >
                      Please enter an email.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-12">
                  <label for="validationCustom02" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="enter your password"
                    id="validationServerUsername"
                    onChange={(e) => getPassword(e.target.value)}
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please enter your password.
                  </div>
                  {passwordValue.length <= 8 ? (
                    <div
                      className={
                        passwordValue === "" ? "d-none" : "d-block text-danger"
                      }
                    >
                      Password must be greater then 8 characters.
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <button
                    className="btn submit_btn px-5"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
