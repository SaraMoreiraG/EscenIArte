import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    coursesId: [],
    coursesInfo: [],
    isAdmin: false,
  });
  // const [error, setError] = useState("");

  console.log("UserInfo: ", userInfo);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwt_decode(token);

      setUserInfo((prevInfo) => ({
        ...prevInfo,
        email: decoded.email,
        name: decoded.nombreDelAlumno,
        coursesId: decoded.coursesID,
        isAdmin: decoded.admin || false,
      }));
    }
  }, []);

  return (
    <div className="dashboard row m-0 text-center">
      <h4>PANEL DEL ALUMNO</h4>
      <h2>¡Bienvenidx {userInfo.name}!</h2>
      <p> Inicia tu aventura en el universo de la tecnología del futuro.</p>
      {/* <p>{error}</p> */}
      <div className="row my-5">
        {userInfo.coursesId &&
          userInfo.coursesId.map((course) => (
            <Link
              to={`/course/1`}
              key={course.courseId}
              className="module col-lg-4 col-md-5 col-12 p-2"
            >
              <img src={course.courseImage} className="img-fluid" alt="" />
              <div className="module-hover-text">
                <p>{course.courseTitle}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
