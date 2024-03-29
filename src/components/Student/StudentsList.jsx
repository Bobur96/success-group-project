/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Main";
import "./StudentsList.css";

export default function StudentsList() {
  const { setStudentId, routeChange } = useContext(UserContext);
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch("https://online-excel-heroku.herokuapp.com/student/list", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDate(data.data.data));
  }, [date]);

  const showStudent = (id) => {
    fetch(`https://online-excel-heroku.herokuapp.com/student/get/${id}`)
      .then((res) => res.json())
      .then((date) => setStudentId(date.data.data));

    routeChange("student");
  };

  const editStudent = (id) => {
    fetch(`https://online-excel-heroku.herokuapp.com/student/get/${id}`)
      .then((res) => res.json())
      .then((date) => setStudentId(date.data.data));

    routeChange("editStudent");
  };

  const deleteStudent = (id) => {
    console.log(id);
    fetch(`https://online-excel-heroku.herokuapp.com/student/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((date) => console.log(date));
  };

  return (
    <section
      id="sectionJobList"
      className="section section-job-list gradient-light--lean-left"
    >
      <div className="container">
        <div className="row row-grid justify-content-center">
          <div className="col-md-12">
            <div className="job-list__wrapper mb-6">
              <h5 className="my-4 text-center">Students List</h5>
              <div
                id="header"
                className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover"
              >
                <div className="card-body">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-8 col-md-4 color--heading">
                      <span className="badge background--tertiary text-white me-2">
                        IMG
                      </span>
                      Fullname
                    </span>

                    <span className="d-none d-md-block col-md-4 my-sm-0">
                      <svg
                        className="mb-1 me-1"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z" />
                      </svg>
                      Univercity
                    </span>

                    <span className="d-none d-md-block col-md-2 my-sm-0">
                      <svg
                        className="mb-1 me-1"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" />
                      </svg>
                      Type
                    </span>

                    <span className="col-4 col-md-2 text-center">
                      <svg
                        className="me-1 mb-1"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z" />
                      </svg>
                      Actions
                    </span>
                  </span>
                </div>
              </div>

              <div id="scroll">
                {date.map((el, i) => (
                  <div
                    key={el.id}
                    className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover"
                  >
                    <div className="card-body">
                      <span className="row justify-content-between align-items-center">
                        <span className="col-md-4 col-9 color--heading">
                          <span
                            id="strong"
                            className="badge badge-circle background--danger text-white me-2"
                          >
                            {el.fullName.slice(0, 2)}
                          </span>{" "}
                          {el.fullName}
                        </span>

                        <span className="d-none d-md-block col-md-4 my-sm-0 color--text">
                          <i className="fa-solid fa-building-columns"></i>{" "}
                          {el.universityName}
                        </span>

                        <span className="d-none d-md-block col-md-2 my-sm-0 color--text">
                          {el.academicType}
                        </span>

                        <span className="col-3 col-md-2 text-center color--text">
                          <ul className="list-unstyled mb-0 d-flex justify-content-evenly">
                            <li>
                              <span
                                className="text-primary"
                                data-toggle="tooltip"
                                title="view"
                                data-original-title="view"
                                onClick={() => showStudent(el.id)}
                              >
                                <i className="far fa-eye"></i>
                              </span>
                            </li>
                            <li>
                              <span
                                className="text-info"
                                data-toggle="tooltip"
                                title="edit"
                                data-original-title="Edit"
                                onClick={() => editStudent(el.id)}
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </span>
                            </li>
                            <li>
                              <span
                                className="text-danger"
                                data-toggle="tooltip"
                                title="delete"
                                data-original-title="Delete"
                                onClick={() => deleteStudent(el.id)}
                              >
                                <i className="far fa-trash-alt"></i>
                              </span>
                            </li>
                          </ul>
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
