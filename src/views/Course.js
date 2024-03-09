import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import ModulesManagement from "../components/ModulesManagement";
import ClassesManagement from "../components/ClassesManagement";

import { fetchCourseById } from "../apiServices/usersApi";

import "./Module.css";

function Course() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    coursesId: [],
    coursesInfo: [],
    admin: false,
  });
  const navigate = useNavigate();
  const prevCourseInfoRef = useRef();
  const { id } = useParams();
  const [isEdited, setIsEdited] = useState(false)
  const [courseInfo, setCourseInfo] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [error, setError] = useState("");

  console.log("Course Info: ", courseInfo);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwt_decode(token);

      setUserInfo((prevInfo) => ({
        ...prevInfo,
        email: decoded.email,
        name: decoded.nombreDelAlumno,
        coursesId: decoded.coursesID,
        admin: decoded.admin || false,
      }));
    } else {
      navigate("/login");
    }

    const loadCourseInfo = async () => {
      try {
        const data = await fetchCourseById(id);
        setCourseInfo(data);
        setError('');
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    if (id) {
      loadCourseInfo();
    }
  }, [id, isEdited, navigate]);

  // Referencia para almacenar el valor anterior de courseInfo

  useEffect(() => {
    // Comprueba si courseInfo ha cambiado comparándolo con su valor anterior
    if (courseInfo !== prevCourseInfoRef.current && courseInfo?.modules?.length > 0 && selectedModule === null) {
      setSelectedModule(courseInfo.modules[0].id);
    }

    // Actualiza la referencia con el valor actual de courseInfo después de cada renderizado
    prevCourseInfoRef.current = courseInfo;
  }, [courseInfo, selectedModule, setSelectedModule]);

  if (error) {
    return <div>Error: {error}</div>; // Mostramos un mensaje de error si lo hay
  }

  if (!courseInfo) {
    return <div>Loading...</div>; // Renderiza un estado de carga si la información del curso aún no está disponible
  }

  return (
    <div className="module-details">

      {courseInfo && (
        <div className="header-center">
          <h2>{courseInfo.name}</h2>
        </div>
      )}

      <div className="row justify-content-center my-5">
        <div className="col-lg-7 col-md-12">
          {userInfo && courseInfo.modules && (
            <ClassesManagement
              courseId={courseInfo.id}
              allClasses={courseInfo.modules.find(module => module.id === selectedModule)?.classes || []}
              selectedModule={selectedModule}
              isEdited = {isEdited}
              setIsEdited = {setIsEdited}
              admin={userInfo.admin}
            />
          )}
        </div>

        <div className="col-lg-3 col-md-12">
          {userInfo && courseInfo.modules && (
            <ModulesManagement
              courseId={courseInfo.id}
              allModules={courseInfo.modules}
              selectedModule={selectedModule}
              setSelectedModule={setSelectedModule}
              isEdited = {isEdited}
              setIsEdited = {setIsEdited}
              admin={userInfo.admin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Course;
