import React from "react";
import { Link } from "react-router-dom";

function CoursesManagement() {
  const course = {
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
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
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
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
          {
            id: 3,
            name: "¿Qué es la Inteligencia Artificial?",
            img: {
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
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
            name: "Bienvenida e Introducción",
            img: {
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
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
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
              alt: "ChatGPT y creatividad",
            },
            description: "La Evolución de la IA: Un Viaje a través del Tiempo",
            duration: "9",
            pdf: "",
          },
          {
            id: 3,
            name: "¿Qué es la Inteligencia Artificial?",
            img: {
              src: "https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png",
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
	const selectedModule = 0;

  return (
    <div className="module-details">
      {course &&
        (
          <>
            <div className="text-center">
              <h1>
				{course.name}
              </h1>
              <h2>{course.modules[selectedModule].name}</h2>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-7">
                <div className="class-wrapper row">
                  <div className="col-6 p-0">
                    <img
                      src="https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png"
                      alt="class 1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6 p-3">
                    <h3>Aplicación de DALL·E en las artes escénicas</h3>
                    <p>
                      Aprende a transformar tu arte con la visión de DALL·E.
                    </p>
                    <hr></hr>
                    <div className="col-6 d-flex justify-content-between my-3">
                      <span>
                        <i className="fa-regular fa-clock ms-2"></i> 7'
                      </span>
                      <button className="btn-pdf">
                        <i className="fa-solid fa-angles-down me-1"></i> PDF
                      </button>
                    </div>
                  </div>
                </div>
                <div className="class-wrapper row">
                  <div className="col-6 p-0">
                    <img
                      src="https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/2-ChatGPT+y+Creatividad.png"
                      alt="class 1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6 p-3">
                    <h3>Creación de Buyer Persona con ChatGPT</h3>
                    <p>
                      Aprende a diseñar tu audiencia ideal con la inteligencia
                      de ChatGPT.
                    </p>
                    <hr></hr>
                    <div className="col-6 d-flex justify-content-between my-3">
                      <span>
                        <i className="fa-regular fa-clock ms-2"></i> 10'
                      </span>
                      <button className="btn-pdf">
                        <i className="fa-solid fa-angles-down me-1"></i> PDF
                      </button>
                    </div>
                  </div>
                </div>
                <div className="class-wrapper row">
                  <div className="col-6 p-0">
                    <img
                      src="https://esceniarte-images.s3.amazonaws.com/1-potencial-creativo/modules/3-IA+en+Produccio%CC%81n+y+Promocio%CC%81n.png"
                      alt="class 1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6 p-3">
                    <h3>Estrategias de Venta y Marketing</h3>
                    <p>
                      Impulsa tus ventas y marketing con estrategias innovadoras
                      gracias a ChatGPT.
                    </p>
                    <hr></hr>
                    <div className="col-6 d-flex justify-content-between my-3">
                      <span>
                        <i className="fa-regular fa-clock ms-2"></i> 10'
                      </span>
                      <button className="btn-pdf">
                        <i className="fa-solid fa-angles-down me-1"></i> PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="side-navbar">
                  <h4 className="p-4 ">Módulos:</h4>
                  <div className="ps-4">
                    <Link to={"/module/1"}>
                      <p>
                        <i className="fa-regular fa-circle me-1"></i> 1.
                        Introducción a la IA
                      </p>
                    </Link>
                    <Link to={"/module/2"}>
                      <p>
                        <i className="fa-solid fa-circle-notch me-1"></i> 2.
                        Optimización de Comandos y Respuestas
                      </p>
                    </Link>
                    <Link to={"/module/23"}>
                      <p>
                        <i className="fa-regular fa-circle me-1"></i> 3.
                        Estrategias de Venta y Organización
                      </p>
                    </Link>
                    <p>
                      <i className="fa-solid fa-circle me-1"></i> 4. Innovación
                      y Generación de Ideas
                    </p>
                    <p>
                      <i className="fa-regular fa-circle me-1"></i> 5. Creación
                      de Imágenes con DALL·E
                    </p>
                    <p>
                      <i className="fa-regular fa-circle me-1"></i> 6.
                      Estrategias para Redes Sociales
                    </p>
                    <p>
                      <i className="fa-regular fa-circle me-1"></i> 7. Plugins y
                      el Potencial de los Modelos GPT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
		)}
    </div>
  );
}

export default CoursesManagement;
