/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useRef } from "react";
import { userRegister } from "../../App";

export default function RegisterPage() {
  const { setRegister, setRegisterId } = useContext(userRegister);
  const fullname = useRef();
  const username = useRef();
  const password = useRef();
  const phone = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://online-excel-heroku.herokuapp.com/auth/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullname.current.value,
        username: username.current.value,
        password: password.current.value,
        phone: phone.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.success === true) {
          setRegisterId(data.data.data);
          setRegister(false);
        } else {
          console.log("wrong");
        }
      });
  };

  return (
    <div id="register" className="llogin container p-4">
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
              <form id="form" onSubmit={onSubmit} className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-users"></i>
                  <input
                    type="text"
                    ref={fullname}
                    className="login__input"
                    placeholder="Full name"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    ref={username}
                    className="login__input"
                    placeholder="User name"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    ref={password}
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-phone"></i>
                  <input
                    ref={phone}
                    type="text"
                    className="login__input"
                    placeholder="Phone"
                  />
                </div>
                <button type="submit" className="button login__submit">
                  <span className="button__text">Register In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div
                  id="bold"
                  onClick={() => setRegister(false)}
                  className="text-center mt-3 text-warning"
                >
                  Log In <i className="fas fa-chevron-right mx-2"></i>
                </div>
              </form>
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
