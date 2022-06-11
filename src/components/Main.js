import React, { createContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Student from "./Student/Student";
import StudentEdit from "./Student/StudentEdit";
import StudentsList from "./Student/StudentsList";

export const UserContext = createContext();

export default function Main() {
  const [studentId, setStudentId] = useState("");
  // const [editStudentId, setEditStudentId] = useState("");

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div>
      <UserContext.Provider value={{ studentId, setStudentId, routeChange }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="students" element={<StudentsList />} />
          <Route path="student" element={<Student />} />
          <Route path="editStudent" element={<StudentEdit />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
