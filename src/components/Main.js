import { Route, Routes, useNavigate } from "react-router-dom";
import React, { createContext, useState } from "react";
import StudentsList from "./Student/StudentsList";
import StudentEdit from "./Student/StudentEdit";
import AddStudent from "./Student/AddStudent";
import Student from "./Student/Student";
import Home from "./Home/Home";

export const UserContext = createContext();

export default function Main() {
  const [studentId, setStudentId] = useState("");

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
          <Route path="AddStudent" element={<AddStudent />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
