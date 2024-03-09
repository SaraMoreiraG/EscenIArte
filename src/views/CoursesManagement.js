import React, { useEffect, useState } from "react";
import ModulesManagement from "../components/ModulesManagement";
import ClassesManagement from "../components/ClassesManagement";

function CoursesManagement() {
  const mockCourse = {
    id: 1,
    name: "Desbloquea el Potencial Creativo de ChatGPT en las Artes Escénicas",
    modules: [
      {
        id: 1,
        name: "Introducción a la IA",
        classes: [
          {
            id: 1,
            name: "Bienvenida e Introducción",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description:
              "Aprende a transformar tu arte con la visión de DALL·E.",
            duration: "7",
            pdf: "",
          },
          {
            id: 2,
            name: "¿Qué es la Inteligencia Artificial?",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
          {
            id: 3,
            name: "Clase 3",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
        ],
      },
      {
        id: 2,
        name: "Optimizacion de Comandos y Respuestas",
        classes: [
          {
            id: 1,
            name: "Clase 1",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description:
              "Aprende a transformar tu arte con la visión de DALL·E.",
            duration: "7",
            pdf: "",
          },
          {
            id: 2,
            name: "Clase 2",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
          {
            id: 3,
            name: "Clase 3",
            img: {
              url: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
        ],
      },
    ],
  };
  const [course, setCourse] = useState(mockCourse);
  const [selectedModule, setSelectedModule] = useState(0);

  return (
    <div className="module-details">
      {course && (
        <>
          <div className="text-center">
            <h1>{course.name}</h1>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-7">
              {course.modules && (
                <ClassesManagement
                  classes={course.modules[selectedModule].classes}
                  selectedModule={selectedModule}
                />
              )}
            </div>

            <div className="col-3">
              {course.modules && (
                <ModulesManagement
                  allModules={course.modules}
                  selectedModule={selectedModule}
                  setSelectedModule={setSelectedModule}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CoursesManagement;
