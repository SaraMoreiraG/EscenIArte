import React, { useEffect, useState } from "react";

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
  const [course, setCourse] = useState(mockCourse);
  const [selectedModule, setSelectedModule] = useState(0);
  const [editingModule, setEditingModule] = useState({
    status: false,
    moduleIndex: null,
    moduleName: "",
    moduleId: null,
	readyForApiCall: false,
  });
  const [addingModule, setAddingModule] = useState(false);
  const [errorModules, setErrorModules] = useState("");

  useEffect(() => {
    if (editingModule.readyForApiCall) {
      setErrorModules("");
	  console.log(
        "Llamando a la API con moduleId actualizado:",
        editingModule.moduleId,
        editingModule.moduleName
      );
      // Aquí iría tu lógica para llamar a la APIrror al llamar a la API:", error));
    }
	// eslint-disable-next-line
  }, [editingModule.readyForApiCall]);

  const handleEditModuleName = (e) => {
    const newName = e.target.value;
    setEditingModule((prev) => ({ ...prev, moduleName: newName }));
  };

  const addNewModule = (id) => {
	if(editingModule.moduleName !== ''){
		setEditingModule((prevState) => ({
			...prevState,
			moduleId: id,
			readyForApiCall: true,
		  }));
	}
	else {
		setErrorModules('Escribe un nombre')
	}
  };

  const startEditing = (moduleIndex) => {
    const currentModule = course.modules[moduleIndex];
    setEditingModule({
      status: true,
      moduleIndex: moduleIndex,
      moduleName: currentModule.name, // Inicializa con el nombre actual del módulo
      moduleId: currentModule.id,
    });
  };

  const saveModuleChanges = () => {
    // Verificar si el nombre ha cambiado.
    const currentModule = course.modules[editingModule.moduleIndex];
    if (currentModule.name === editingModule.moduleName) {
      // Si el nombre no ha cambiado, solo salir del modo de edición.
      console.log("No changes made, exiting edit mode.");
      setEditingModule({
        status: false,
        moduleIndex: null,
        moduleName: "",
        moduleId: null,
      });
      return; // Finalizar la función aquí.
    }

    const updatedModules = course.modules.map((module, index) => {
      if (index === editingModule.moduleIndex) {
        console.log(
          "Updating module with id:",
          module.id,
          "New name:",
          editingModule.moduleName
        );
        // Aquí iría la lógica para hacer POST a tu API con module.id y editingModule.moduleName.
        return { ...module, name: editingModule.moduleName };
      }
      return module;
    });

    setCourse({ ...course, modules: updatedModules });
    setEditingModule({
      status: false,
      moduleIndex: null,
      moduleName: "",
      moduleId: null,
    });
  };

  const deleteModule = (id) => {
    console.log("delete module id: ", id);
  };

  return (
    <div className="module-details">
      {course && (
        <>
          <div className="text-center">
            <h1>{course.name}</h1>
            <h2>{course.modules[selectedModule].name}</h2>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-7">
              {course.modules[selectedModule].classes.map((clase) => (
                <div className="class-wrapper row" key={clase.id}>
                  <div className="col-6 p-0">
                    <img
                      src={clase.img.src}
                      alt={clase.img.alt}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6 p-3">
                    <h3>{clase.name}</h3>
                    <p>{clase.description}</p>
                    <hr></hr>
                    <div className="col-6 d-flex justify-content-between my-3">
                      <span>
                        <i className="fa-regular fa-clock ms-2"></i>{" "}
                        {clase.duration}'
                      </span>
                      <button className="btn-pdf">
                        <i className="fa-solid fa-angles-down me-1"></i> PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-3">
              <div className="side-navbar">
                <div className="d-flex align-items-center justify-content-between p-4">
                  <h4>Módulos:</h4>
                  <div>
                    <i
                      className="fa-solid fa-circle-plus"
                      onClick={() => setAddingModule(!addingModule)}
                    ></i>
                  </div>
                </div>
                <div className="p-4">
                  {course.modules.map((module, index) => (
                    <div key={module.id}>
                      {editingModule.status &&
                      editingModule.moduleIndex === index ? (
                        <>
                          <div className="d-flex mb-3">
                            <p>{module.id}. </p>

                            <div className="form-group d-flex">
                              <input
                                type="text"
                                className="px-3"
                                value={editingModule.moduleName || module.name}
                                onChange={handleEditModuleName}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mb-3">
                            <i
                              className="fa-regular fa-circle-check me-3"
                              onClick={saveModuleChanges}
                            ></i>
                            <i
                              className="fa-regular fa-trash-can"
                              onClick={() => deleteModule(module.id)}
                            ></i>
                          </div>
                        </>
                      ) : (
                        <div>
                          <p
                            className={
                              selectedModule === index
                                ? "module-title selected m-0"
                                : "module-title m-0"
                            }
                            onClick={() => setSelectedModule(index)}
                          >
                            {module.id}. {module.name}
                          </p>
                          <div className="d-flex justify-content-end mb-3">
                            <i
                              className="fa-regular fa-pen-to-square me-3"
                              onClick={() => startEditing(index)}
                            ></i>
                            <i
                              className="fa-regular fa-trash-can"
                              onClick={() => deleteModule(module.id)}
                            ></i>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {addingModule && (
                    <>
                      <div className="form-group pe-0">
                        {course.modules.length + 1}.
                        <input
                          type="text"
                          className="ps-3"
                          placeholder="Módulo"
                          name="module"
                          value={editingModule.moduleName}
                          onChange={handleEditModuleName}
                        ></input>
                      </div>
                      <div className="text-end">
                        <i
                          className="fa-regular fa-circle-check"
                          onClick={() =>
                            addNewModule(course.modules.length + 1)
                          }
                        ></i>
                      </div>
                    </>
                  )}
                  {errorModules && <p className="text-error">{errorModules}</p>}
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
