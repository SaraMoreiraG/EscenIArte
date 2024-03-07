import React, { useState, useEffect } from "react";

function ModulesManagement({
  courseId,
  allModules,
  selectedModule,
  setSelectedModule,
  admin,
}) {
  const token = localStorage.getItem("authToken");
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
    if (editingModule.moduleName !== "") {
      setEditingModule((prevState) => ({
        ...prevState,
        moduleId: id,
        readyForApiCall: true,
      }));

      // Lógica para hacer PATCH a la API con module.id y editingModule.moduleName.
      const body = {
        courseId: courseId,
        moduleId: id,
        newName: editingModule.moduleName, // Asegúrate de ajustar este cuerpo a lo que tu API espera recibir.
      };

      fetch(
        `https://vtedvak2bj.execute-api.us-east-1.amazonaws.com/prod/modules`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Asegúrate de que 'token' está definido y es válido
          },
          mode: "cors",
          body: JSON.stringify(body),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);

          setEditingModule({
            status: false,
            moduleIndex: null,
            moduleName: "",
            moduleId: null,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      return { ...module, name: editingModule.moduleName };
    } else {
      setErrorModules("Escribe un nombre");
    }
  };

  const startEditing = (moduleIndex) => {
    const currentModule = allModules[moduleIndex];
    setEditingModule({
      status: true,
      moduleIndex: moduleIndex,
      moduleName: currentModule.name, // Inicializa con el nombre actual del módulo
      moduleId: currentModule.id,
    });
  };

  const saveModuleChanges = async () => {
    // Verificar si el nombre ha cambiado.
    const currentModule = allModules[editingModule.moduleIndex];
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

    const updatedModules = allModules.map((module, index) => {
      if (index === editingModule.moduleIndex) {
        // Lógica para hacer PATCH a la API con module.id y editingModule.moduleName.
        const body = {
          courseId: courseId,
          moduleId: editingModule.moduleId,
          newName: editingModule.moduleName, // Asegúrate de ajustar este cuerpo a lo que tu API espera recibir.
        };

        fetch(
          `https://vtedvak2bj.execute-api.us-east-1.amazonaws.com/prod/modules`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Asegúrate de que 'token' está definido y es válido
            },
            mode: "cors",
            body: JSON.stringify(body),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        return { ...module, name: editingModule.moduleName };
      }
      return module;
    });

    setEditingModule({
      status: false,
      moduleIndex: null,
      moduleName: "",
      moduleId: null,
    });
  };

  const deleteModule = (id) => {
    console.log("delete module id: ", id);
    const body = {
      courseId: courseId,
      moduleId: id,
    };

    fetch(
      `https://vtedvak2bj.execute-api.us-east-1.amazonaws.com/prod/delete-module`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Asegúrate de que 'token' está definido y es válido
        },
        mode: "cors",
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="side-navbar">
        <div className="d-flex align-items-center justify-content-between p-4">
          <h4>Módulos:</h4>
          {admin && (
            <div>
              <i
                className="fa-solid fa-circle-plus"
                onClick={() => setAddingModule(!addingModule)}
              ></i>
            </div>
          )}
        </div>
        <div className="p-4">
          {allModules.map((module, index) => (
            <div key={module.id}>
              {admin &&
              editingModule.status &&
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
                  {admin && (
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
                  )}
                </div>
              )}
            </div>
          ))}
          {admin && addingModule && (
            <>
              <div className="form-group pe-0">
                {allModules.length + 1}.
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
                  onClick={() => addNewModule(allModules.length + 1)}
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
