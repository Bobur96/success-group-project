/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Login from "./components/LoginPage/Login";
import Main from "./components/Main";

export const userRegister = createContext();

function App() {
  const [register, setRegister] = useState(true);
  const [registerId, setRegisterId] = useState(null);
  const [user, setUser] = useState();

  setInterval(() => {
    setUser(localStorage.getItem("user"));
  }, 500);

  return (
    <userRegister.Provider
      value={{ register, setRegister, registerId, setRegisterId }}
    >
      <div className="App">
        {user === "true" ? (
          <>
            <Header />
            <Main />
          </>
        ) : (
          <Login />
        )}
      </div>
    </userRegister.Provider>
  );
}

export default App;
