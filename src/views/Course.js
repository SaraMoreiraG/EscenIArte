import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ModulesManagement from "../components/ModulesManagement";
import ClassesManagement from "../components/ClassesManagement";

import { fetchCourseById } from "../apiServices/usersApi";

import "./Module.css";

function Course() {
  const [admin, setAdmin] = useState(true);
  const { id } = useParams();
  const [isEdited, setIsEdited] = useState(false)
  const [courseInfo, setCourseInfo] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [error, setError] = useState("");

  console.log("Course Info: ", courseInfo);

  useEffect(() => {
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
  }, [id, isEdited]);

  useEffect(() => {
    // Selecciona el primer módulo solo cuando se carga courseInfo por primera vez o cambia
    if (courseInfo && courseInfo.modules?.length > 0 && selectedModule === null) {
      setSelectedModule(courseInfo.modules[0].id);
    }
  }, [courseInfo]);

  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoInModal, setVideoInModal] = useState();

  // Función para abrir el modal
  const openModal = (video) => {
    setVideoInModal(video);
    setIsModalOpen(true);
    scrollToSection("video");
  };

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (error) {
    return <div>Error: {error}</div>; // Mostramos un mensaje de error si lo hay
  }

  if (!courseInfo) {
    return <div>Loading...</div>; // Renderiza un estado de carga si la información del curso aún no está disponible
  }

  return (
    <div className="module-details">
      {isModalOpen && (
        <div className="full-modal" id="video">
          <div className="modal-content">
            <div className="text-end">
              <i className="fa-solid fa-x" onClick={closeModal}></i>
            </div>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={videoInModal}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                // frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                // allowFullScreen
                title="Telstra 'This Is Footy Country' Video"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <p>
              <a href="https://vimeo.com/896261088">
                Telstra &quot;This Is Footy Country&quot;
              </a>{" "}
              from <a href="https://vimeo.com/user189947816">Mark Molloy</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
        </div>
      )}
      {courseInfo && (
        <div className="header-center">
          <h2>{courseInfo.name}</h2>
        </div>
      )}

      <div className="row justify-content-center my-5">
        <div className="col-lg-7 col-md-12">
          {courseInfo.modules && (
            <ClassesManagement
              courseId={courseInfo.id}
              allClasses={courseInfo.modules.find(module => module.id === selectedModule)?.classes || []}
              selectedModule={selectedModule}
              isEdited = {isEdited}
              setIsEdited = {setIsEdited}
              admin={admin}
            />
          )}
        </div>

        <div className="col-lg-3 col-md-12">
          {courseInfo.modules && (
            <ModulesManagement
              courseId={courseInfo.id}
              allModules={courseInfo.modules}
              selectedModule={selectedModule}
              setSelectedModule={setSelectedModule}
              isEdited = {isEdited}
              setIsEdited = {setIsEdited}
              admin={admin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Course;
