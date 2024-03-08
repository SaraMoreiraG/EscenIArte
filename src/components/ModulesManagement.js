import React, { useState } from "react";
import { updateOrAddResource, deleteResource } from "../apiServices/adminApi";

function ModulesManagement({
  courseId,
  allModules,
  selectedModule,
  setSelectedModule,
  isEdited,
  setIsEdited,
  admin,
}) {
  const token = localStorage.getItem("authToken");
  const [editingModule, setEditingModule] = useState({
    status: false,
    moduleName: "",
    moduleId: null,
  });
  const [addingModule, setAddingModule] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorModules, setErrorModules] = useState("");

  const handleEditModuleName = (e) => {
    const newName = e.target.value;
    setEditingModule((prev) => ({ ...prev, moduleName: newName }));
  };

  const startEditing = (moduleId) => {
    const currentModule = allModules.find((module) => module.id === moduleId);
    console.log(currentModule);
    if (currentModule) {
    setEditingModule({
      status: true,
      moduleName: currentModule.name, // Inicializa con el nombre actual del módulo
      moduleId: moduleId,
    });
  }
  };

  const stopEditing = () => {
    setEditingModule({
      status: false,
      moduleIndex: null,
      moduleName: "",
      moduleId: null,
    });
  };

  const addOrUpdateModule = () => {
    let currentModule;
    if (editingModule.moduleId) {
      currentModule = allModules.find(module => module.id === editingModule.moduleId);
      // If attempting to update a module, but it doesn't exist, log an error and exit
      if (!currentModule) {
        console.error("Module to update not found.");
        return;
      }
      // Check if no changes were made to the module name for updates only.
      if (currentModule.name === editingModule.moduleName) {
        console.log("No changes made, exiting edit mode.");
        stopEditing();
        return;
      }
    }

    // Ensure the module name is provided.
    if (!editingModule.moduleName.trim()) {
      setErrorModules("Introduce un nombre para el modulo");
      return;
    }

    setIsLoading(true);
    const body = {
      courseId: courseId,
      moduleId: editingModule.moduleId, // Will be null for new modules
      newName: editingModule.moduleName,
    };

    updateOrAddResource("module", body)
      .then((data) => {
        console.log("Module updated/added:", data);
        stopEditing();
        setIsEdited(!isEdited);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error updating/adding module:", error);
        setErrorModules("No se ha podido completar la soliciud. Prueba de nuevo.");
        setIsLoading(false);
      });
  };

  const deleteModule = async (moduleId) => {
    const body = { courseId, moduleId };
    setIsLoading(true)
    try {
      await deleteResource('module', body);
      console.log('Module deleted successfully');
      setIsEdited(!isEdited);
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to delete module:', error);
      setIsLoading(false);
      setErrorModules("No se ha podido eliminar el módulo. Prueba de nuevo.");
    }
  };

  return (
    <div>
      <div className="side-navbar">
        <div className="d-flex align-items-center justify-content-between p-4">
          <h4>Módulos:</h4>
          {admin &&
            (isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div>
                <i
                  className="fa-solid fa-circle-plus"
                  onClick={() => setAddingModule(!addingModule)}
                ></i>
              </div>
            ))}
        </div>
        <div className="p-4">
          {allModules
            .slice()
            .sort((a, b) => {
              const numA = a.name.match(/^\d+/);
              const numB = b.name.match(/^\d+/);

              if (numA && numB) {
                return parseInt(numA, 10) - parseInt(numB, 10);
              } else if (numA) {
                return -1;
              } else if (numB) {
                return 1;
              }
              return a.name.localeCompare(b.name);
            })
            .map((module, index) => (
              <div key={module.id}>
                {admin &&
                editingModule.status &&
                editingModule.moduleId === module.id ? (
                  <>
                    <div className="d-flex mb-3">
                      <div className="form-group w-100 d-flex">
                        <input
                          type="text"
                          className="col-12"
                          value={editingModule.moduleName || module.name}
                          onChange={handleEditModuleName}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                      <i
                        className="fa-regular fa-circle-check me-3"
                        onClick={addOrUpdateModule}
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
                      {module.name}
                    </p>
                    {admin && (
                      <div className="d-flex justify-content-end mb-3">
                        <i
                          className="fa-regular fa-pen-to-square me-3"
                          onClick={() => startEditing(module.id)}
                        ></i>
                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => deleteModule(module.id)}
                        ></i>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          {admin && addingModule && (
            <>
              <div className="form-group w-100 pe-0">
                <input
                  type="text"
                  className="col-12"
                  value={editingModule.moduleName || 'New Module'}
                  onChange={handleEditModuleName}
                ></input>
              </div>
              <div className="text-end">
                <i
                  className="fa-regular fa-circle-check"
                  onClick={addOrUpdateModule}
                ></i>
              </div>
            </>
          )}
          {errorModules && <p className="text-error">{errorModules}</p>}
        </div>
      </div>
    </div>
  );
}

export default ModulesManagement;
