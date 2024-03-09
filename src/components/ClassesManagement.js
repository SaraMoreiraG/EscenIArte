import React, { useState } from "react";
import { updateOrAddResource, deleteResource } from "../apiServices/adminApi";
import { handleInputChange } from "../apiServices/managementFunctions";

function ClassesManagement({
  courseId,
  allClasses,
  selectedModule,
  isEdited,
  setIsEdited,
  admin,
}) {
  // State initialization
  const [editingClass, setEditingClass] = useState({
    status: false,
    id: null,
    name: "",
    description: "",
    duration: "",
    url: "",
    alt: "",
    pdf: "",
  });
  const [addingClass, setAddingClass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Initiates editing mode for a selected class
  const startEditing = (classId) => {
    const currentClass = allClasses.find((clase) => clase.id === classId);

    if (currentClass) {
      setEditingClass({
        status: true,
        id: currentClass.id,
        name: currentClass.name,
        description: currentClass.description,
        duration: currentClass.duration,
        url: currentClass.url,
        alt: currentClass.alt,
        pdf: currentClass.pdf,
      });
    }
  };

  // Exits editing mode, resetting the editing class state
  const stopEditing = () => {
    setEditingClass({
      status: false,
      classIndex: null,
      id: null,
      name: "",
      description: "",
      duration: "",
      url: "",
      alt: "",
      pdf: "",
      readyForApiCall: false,
    });
    setAddingClass(false);
  };

  // Adds a new module or updates an existing one based on the state
  const addOrUpdateClass = () => {
    let currentClass;
    if (editingClass.id) {
      currentClass = allClasses.find((clase) => clase.id === editingClass.id);
      // If attempting to update a class, but it doesn't exist, log an error and exit
      if (!currentClass) {
        console.error("Class to update not found.");
        return;
      }
      // Check if no changes were made to the class for updates only.
      if (currentClass === editingClass) {
        console.log("No changes made, exiting edit mode.");
        stopEditing();
        return;
      }
    }

    // Ensure the module name is provided.
    if (!editingClass.name.trim()) {
      setError("Introduce un nombre para la clase");
      return;
    }

    setIsLoading(true);
    const body = {
      courseId: courseId,
      id: editingClass.id, // Will be null for new modules
      name: editingClass.name,
      description: editingClass.description,
      duration: editingClass.duration,
      url: editingClass.url,
      alt: editingClass.alt,
      pdf: editingClass.pdf,
    };

    updateOrAddResource("class", body)
      .then((data) => {
        console.log("Class updated/added:", data);
        stopEditing();
        setIsEdited(!isEdited); // Toggle to refresh UI
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error updating/adding class:", error);
        setError("No se ha podido completar la soliciud. Prueba de nuevo.");
        setIsLoading(false);
      });
  };

  // Deletes a module by its ID
  const deleteClass = async (classId) => {
    console.log(selectedModule);
    const body = { courseId, selectedModule, classId };
    setIsLoading(true);
    try {
      await deleteResource("class", body);
      console.log("Class deleted successfully");
      setIsEdited(!isEdited);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to delete class:", error);
      setIsLoading(false);
      setError("No se ha podido eliminar la clase. Prueba de nuevo.");
    }
  };

  return (
    <div>
      {allClasses.map((info, index) => (
        <div className="class-wrapper row" key={info.id}>
          {admin && editingClass.status && editingClass.id === info.id ? (
            <>
              <div className="col-6 p-0">
                <div
                  className="img-editing"
                  style={{
                    backgroundImage: `url(${editingClass.url || info.url})`,
                  }}
                >
                  <textarea
                    type="text"
                    className="p-2"
                    rows={6}
                    value={editingClass.url || info.url}
                    onChange={handleInputChange("url", setEditingClass)}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <span>alt:</span>
                  <textarea
                    type="text"
                    className="text-center bg-white ms-2 p-2"
                    rows={1}
                    value={editingClass.alt || info.alt}
                    onChange={handleInputChange("alt", setEditingClass)}
                  />
                </div>
              </div>
              <div className="col-6 px-3 pt-3">
                <div className="d-flex justify-content-between mb-3">
                  <textarea
                    type="text"
                    className="title bg-white w-100 p-2"
                    rows={3}
                    value={editingClass.name || info.name}
                    onChange={handleInputChange("name", setEditingClass)}
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
                  value={editingClass.description || info.description}
                  onChange={handleInputChange("description", setEditingClass)}
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
                      value={editingClass.duration || info.duration}
                      onChange={handleInputChange("duration", setEditingClass)}
                    />
                  </div>
                  <div className="col-8 m-0">
                    <textarea
                      type="text"
                      className="pdf-link p-2"
                      rows={1}
                      value={editingClass.pdf || info.pdf}
                      onChange={handleInputChange("pdf", setEditingClass)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center pb-3">
                {isLoading ? (
                  <div className="save-button ">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="m-0">Guardando...</p>
                  </div>
                ) : (
                  <div className="save-button" onClick={addOrUpdateClass}>
                    <i className="fa-regular fa-floppy-disk me-3"></i>
                    <p className="m-0">GUARDAR</p>
                  </div>
                )}
              </div>
              <div className="text-center">
                {error && <p className="text-error col-12">{error}</p>}
              </div>
            </>
          ) : (
            <>
              <div className="col-6 p-0">
                <img src={info.url} alt={info.alt} className="img-fluid" />
              </div>
              <div className="col-6 p-3">
                <div className="d-flex justify-content-between">
                  <h3>{info.name}</h3>
                  {admin && (
                    <i
                      className="fa-regular fa-pen-to-square big"
                      onClick={() => startEditing(info.id)}
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
                      onClick={() => deleteClass(info.id)}
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
                  backgroundImage: `url(${editingClass.url || "Imagen URL"})`,
                }}
              >
                <textarea
                  type="text"
                  className="p-2"
                  rows={6}
                  value={editingClass.url || "Imagen URL"}
                  onChange={handleInputChange("url", setEditingClass)}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <span>alt:</span>
                <textarea
                  type="text"
                  className="text-center bg-white ms-2 p-2"
                  rows={1}
                  value={editingClass.alt || "Imagen alt"}
                  onChange={handleInputChange("alt", setEditingClass)}
                />
              </div>
            </div>
            <div className="col-6 px-3 pt-3">
              <div className="d-flex justify-content-between mb-3">
                <textarea
                  type="text"
                  className="title bg-white w-100 p-2"
                  rows={3}
                  value={editingClass.name || "Nombre de la clase"}
                  onChange={handleInputChange("name", setEditingClass)}
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
                value={editingClass.description || "Descripción"}
                onChange={handleInputChange("description", setEditingClass)}
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
                    value={editingClass.duration || "m"}
                    onChange={handleInputChange("duration", setEditingClass)}
                  />
                </div>
                <div className="col-8 m-0">
                  <textarea
                    type="text"
                    className="pdf-link p-2"
                    rows={1}
                    value={editingClass.pdf || "pdf url"}
                    onChange={handleInputChange("pdf", setEditingClass)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center pb-3">
              <div className="save-button ">
                <i className="fa-regular fa-floppy-disk me-3"></i>
                <p className="m-0" onClick={addOrUpdateClass}>
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
