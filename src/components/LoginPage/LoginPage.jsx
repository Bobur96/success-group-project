/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useRef } from "react";
import { userRegister } from "../../App";
import "./LoginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const { setRegister, registerId } = useContext(userRegister);
  const username = useRef(),
    password = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://online-excel-heroku.herokuapp.com/auth/token", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r.data);
        if (r.data.success === true) localStorage.setItem("user", "true");
        else toast.error("name yoki password xato!");
      });
  };

  return (
    <div className="llogin container p-4">
      <ToastContainer />
      <div className="row w-100 g-5 d-flex justify-content-evenly">
        <div className="d-none d-md-block col-md-5 my-auto">
          <img
            src="undraw_remotely_2j6y.svg"
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <div className="screen">
            <div className="screen__content">
              <form onSubmit={onSubmit} className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    id="username"
                    ref={username}
                    className="login__input"
                    placeholder="User name"
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    id="password"
                    ref={password}
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div
                  id="bold"
                  onClick={() => setRegister(true)}
                  className="text-center mt-4 text-warning"
                >
                  Register <i className="fas fa-chevron-right mx-2"></i>
                </div>
              </form>
              <div className="social-login">
                <div className="social-icons mt-5">
                  <a
                    href="#/"
                    className="social-login__icon fab fa-instagram"
                  ></a>
                  <a
                    href="#/"
                    className="social-login__icon fab fa-facebook"
                  ></a>
                  <a
                    href="#/"
                    className="social-login__icon fab fa-twitter"
                  ></a>
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// .then((res) => res.json())
// .then((r) => {
//   r.data.data.forEach((el) => {
//     if (el.username === username.current.value) {
//       localStorage.setItem("user", "true");
//     }
//   });
//   localStorage.getItem("user") !== "true" && console.log("yoq user");
// });
