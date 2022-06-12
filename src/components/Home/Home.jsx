import React, { useContext } from "react";
import { UserContext } from "../Main";
import "./Home.css";

export default function Home() {
  const { routeChange } = useContext(UserContext);

  const change = () => {
    localStorage.setItem("user", "");
  };

  return (
    <div className="home">
      <div className="screeen"></div>
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="cart">
          <button
            onClick={() => routeChange("students")}
            className="btn btn-outline-info"
          >
            Students list
          </button>
          <button onClick={change} className="btn btn-outline-info">
            Log Out
          </button>
        </div>
        <p className="d-block text-black">
          Bu yerga nima qilishga ikkilandim! sorry 😕
        </p>
      </div>
    </div>
  );
}
