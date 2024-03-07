import React, { useState, useEffect } from "react";

function ClassesManagement({ classes, selectedModule, admin }) {
  //   console.log("clases: ", classes);
  const [editingClass, setEditingClass] = useState({
    status: false,
    classIndex: null,
    classId: null,
    name: "",
    description: "",
    duration: "",
    img: {
      url: "",
      alt: "",
    },
    pdf: "",
    readyForApiCall: false,
  });
  const [addingClass, setAddingClass] = useState(false);
  //   const [errorModules, setErrorModules] = useState("");

  //   useEffect(() => {
  //     if (editingModule.readyForApiCall) {
  //       setErrorModules("");
  //       console.log(
  //         "Llamando a la API con moduleId actualizado:",
  //         editingModule.moduleId,
  //         editingModule.moduleName
  //       );
  //       // Aquí iría tu lógica para llamar a la APIrror al llamar a la API:", error));
  //     }
  //     // eslint-disable-next-line
  //   }, [editingModule.readyForApiCall]);

  useEffect(() => {
    stopEditing();
  }, [selectedModule]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dividir el nombre del campo para manejar propiedades anidadas
    const nameParts = name.split(".");

    if (nameParts.length === 2) {
      // Manejar campos anidados como img.url o img.alt
      setEditingClass((prev) => ({
        ...prev,
        [nameParts[0]]: {
          ...prev[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else {
      // Manejar campos no anidados
      setEditingClass((prev) => ({ ...prev, [name]: value }));
    }
  };

  const startEditing = (classIndex) => {
    const currentClass = classes[classIndex];
    console.log("Current Class:", currentClass);
    setEditingClass({
      status: true,
      classIndex: classIndex,
      classId: currentClass.id,
      name: currentClass.name,
      description: currentClass.description,
      duration: currentClass.duration,
      img: {
        url: currentClass.img.url,
        alt: currentClass.img.alt,
      },
      pdf: currentClass.pdf,
    });
  };

  const stopEditing = () => {
    setEditingClass({
      status: false,
      classIndex: null,
      classId: null,
      name: "",
      description: "",
      duration: "",
      img: {
        url: "",
        alt: "",
      },
      pdf: "",
      readyForApiCall: false,
    });
    setAddingClass(false);
  };

  const saveClassChanges = () => {
    console.log("Datos de la clase que se quiere editar: ", editingClass);
  };

  const addNewClass = () => {
    console.log("Datos de la clase que se quiere añadir: ", editingClass);
  };

  //   const addNewClass = (id) => {
  //     if (editingModule.moduleName !== "") {
  //       setEditingModule((prevState) => ({
  //         ...prevState,
  //         moduleId: id,
  //         readyForApiCall: true,
  //       }));
  //     } else {
  //       setErrorModules("Escribe un nombre");
  //     }
  //   };

  //   const saveModuleChanges = () => {
  //     // Verificar si el nombre ha cambiado.
  //     const currentModule = classes[editingModule.moduleIndex];
  //     if (currentModule.name === editingModule.moduleName) {
  //       // Si el nombre no ha cambiado, solo salir del modo de edición.
  //       console.log("No changes made, exiting edit mode.");
  //       setEditingModule({
  //         status: false,
  //         moduleIndex: null,
  //         moduleName: "",
  //         moduleId: null,
  //       });
  //       return; // Finalizar la función aquí.
  //     }

  //     const updatedModules = classes.map((module, index) => {
  //       if (index === editingModule.moduleIndex) {
  //         console.log(
  //           "Updating module with id:",
  //           module.id,
  //           "New name:",
  //           editingModule.moduleName
  //         );
  //         // Aquí iría la lógica para hacer POST a tu API con module.id y editingModule.moduleName.
  //         return { ...module, name: editingModule.moduleName };
  //       }
  //       return module;
  //     });

  //     // setclasses({ ...classes, modules: updatedModules });
  //     setEditingModule({
  //       status: false,
  //       moduleIndex: null,
  //       moduleName: "",
  //       moduleId: null,
  //     });
  //   };

  const deleteModule = (id) => {
    console.log("delete module id: ", id);
  };

  return (
    <div>
      {classes.map((info, index) => (
        <div className="class-wrapper row" key={info.id}>
          {admin && editingClass.status && editingClass.classIndex === index ? (
            <>
              <div className="col-6 p-0">
                <div
                  className="img-editing"
                  style={{
                    backgroundImage: `url(${
                      editingClass.img.url || info.img.url
                    })`,
                  }}
                >
                  <textarea
                    type="text"
                    className="p-2"
                    rows={6}
                    name="img.url"
                    value={editingClass.img.url || info.img.url}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <span>alt:</span>
                  <textarea
                    type="text"
                    className="text-center bg-white ms-2 p-2"
                    rows={1}
                    name="img.alt"
                    value={editingClass.img.alt || info.img.alt}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-6 px-3 pt-3">
                <div className="d-flex justify-content-between mb-3">
                  <textarea
                    type="text"
                    className="title bg-white w-100 p-2"
                    rows={3}
                    name="name"
                    value={editingClass.name || info.name}
                    onChange={handleInputChange}
                  />
                  <i
                    className="fa-solid fa-xmark big ms-3"
                    onClick={stopEditing}
                  ></i>
                </div>
                <textarea
                  type="text"
                  className="bg-white w-100 p-2"
                  rows={2}
                  name="description"
                  value={editingClass.description || info.description}
                  onChange={handleInputChange}
                />
                <hr></hr>
                <div className="row justify-content-between align-items-center my-3">
                  <span className="col-1">
                    <i className="fa-regular fa-clock ms-2"></i>
                  </span>
                  <div className="col-2 p-2">
                    <textarea
                      type="text"
                      className="bg-white w-100 p-2"
                      rows={1}
                      name="duration"
                      value={editingClass.duration || info.duration}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-8 m-0">
                    <textarea
                      type="text"
                      className="pdf-link p-2"
                      rows={1}
                      name="pdf"
                      value={editingClass.pdf || info.pdf}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center pb-3">
                <div className="save-button ">
                  <i className="fa-regular fa-floppy-disk me-3"></i>
                  <p className="m-0" onClick={saveClassChanges}>
                    GUARDAR
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-6 p-0">
                <img
                  src={info.img.url}
                  alt={info.img.alt}
                  className="img-fluid"
                />
              </div>
              <div className="col-6 p-3">
                <div className="d-flex justify-content-between">
                  <h3>{info.name}</h3>
                  {admin && (
                    <i
                      className="fa-regular fa-pen-to-square big"
                      onClick={() => startEditing(index)}
                    ></i>
                  )}
                </div>
                <p>{info.description}</p>
                <hr></hr>
                <div className="col-6 d-flex justify-content-between my-3">
                  <span>
                    <i className="fa-regular fa-clock ms-2"></i> {info.duration}
                    '
                  </span>
                  <button className="btn-pdf">
                    <i className="fa-solid fa-angles-down me-1"></i> PDF
                  </button>
                </div>
                {admin && (
                  <div className="text-end">
                    <i
                      className="fa-regular fa-trash-can big"
                      onClick={() => deleteModule(info.id)}
                    ></i>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
      {admin && addingClass && (
        <>
          <div className="class-wrapper row">
            <div className="col-6 p-0">
              <div
                className="img-editing"
                style={{
                  backgroundImage: `url(${
                    editingClass.img.url || "Imagen URL"
                  })`,
                }}
              >
                <textarea
                  type="text"
                  className="p-2"
                  rows={6}
                  name="img.url"
                  value={editingClass.img.url || "Imagen URL"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <span>alt:</span>
                <textarea
                  type="text"
                  className="text-center bg-white ms-2 p-2"
                  rows={1}
                  name="img.alt"
                  value={editingClass.img.alt || "Imagen alt"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-6 px-3 pt-3">
              <div className="d-flex justify-content-between mb-3">
                <textarea
                  type="text"
                  className="title bg-white w-100 p-2"
                  rows={3}
                  name="name"
                  value={editingClass.name || "Nombre de la clase"}
                  onChange={handleInputChange}
                />
                <i
                  className="fa-solid fa-xmark big ms-3"
                  onClick={stopEditing}
                ></i>
              </div>
              <textarea
                type="text"
                className="bg-white w-100 p-2"
                rows={2}
                name="description"
                value={editingClass.description || "Descripción"}
                onChange={handleInputChange}
              />
              <hr></hr>
              <div className="row justify-content-between align-items-center my-3">
                <span className="col-1">
                  <i className="fa-regular fa-clock ms-2"></i>
                </span>
                <div className="col-2 p-2">
                  <textarea
                    type="text"
                    className="bg-white w-100 p-2"
                    rows={1}
                    name="duration"
                    value={editingClass.duration || "m"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-8 m-0">
                  <textarea
                    type="text"
                    className="pdf-link p-2"
                    rows={1}
                    name="pdf"
                    value={editingClass.pdf || "pdf url"}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center pb-3">
              <div className="save-button ">
                <i className="fa-regular fa-floppy-disk me-3"></i>
                <p className="m-0" onClick={addNewClass}>
                  GUARDAR
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn-new-class"
              onClick={() => setAddingClass(true)}
            >
              <i className="fa-solid fa-plus"></i> Añadir clase
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ClassesManagement;
