import React, { useContext } from "react";
import { UserContext } from "../Main";

export default function AddStudent() {
  const query = document.querySelector.bind(document);
  const { routeChange } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://online-excel-heroku.herokuapp.com/student/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: query("#fullName").value,
        universityName: query("#universityName").value,
        entranceYear: query("#entranceYear").value,
        graduationYear: query("#graduationYear").value,
        faculty: query("#faculty").value,
        speciality: query("#speciality").value,
        studyType: query("#studyType").value,
        academicType: query("#academicType").value,
        diplomaSerial: query("#diplomaSerial").value,
        diplomaRegistrationNumber: query("#diplomaRegistrationNumber").value,
        givenDate: query("#givenDate").value,
        academicLevel: query("#academicLevel").value,
        appendixNumber: query("#appendixNumber").value,
        organizationId: query("#organizationId").value,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        if (r.data.success === true) {
          routeChange("students");
        }
      });
  };

  return (
    <div className="d-flex justify-content-center flex-column container py-3">
      <form id="addform" className="was-validated" onSubmit={handleSubmit}>
        <div className="card form1">
          <div className="card-header">
            <h5 className="text-center">User Form</h5>
          </div>
          <div className="card-body">
            <div id="form" className="form-group row g-3 pb-3">
              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="fullName"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="universityName" className="form-label">
                  University
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="universityName"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="entranceYear" className="form-label">
                  Entrance Year
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="entranceYear"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="graduationYear" className="form-label">
                  Graduation Year
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="graduationYear"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="faculty" className="form-label">
                  Faculty
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="faculty"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="speciality" className="form-label">
                  Speciality
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="speciality"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="studyType" className="form-label">
                  Study Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="studyType"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="academicType" className="form-label">
                  Academic Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="academicType"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="diplomaSerial" className="form-label">
                  DiplomaSerial
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="diplomaSerial"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="diplomaRegistrationNumber"
                  className="form-label"
                >
                  diploma register №
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="diplomaRegistrationNumber"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="givenDate" className="form-label">
                  Given Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="givenDate"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="academicLevel" className="form-label">
                  Academic Level
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="academicLevel"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="appendixNumber" className="form-label">
                  Appendix Number
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="appendixNumber"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="organizationId" className="form-label">
                  Organization Id
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="organizationId"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <button
                  className="btn btn-success float-end mt-4"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
