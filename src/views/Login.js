import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Login() {
  const [userCredentials, setUserCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  // Handle input change and manage form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name] || errors.general) {
      // Clear specific field errors and general errors upon input change.
      setErrors((prev) => ({ ...prev, [name]: "", general: "", }));
    }
  };

  // Validate form fields
  const handleValidations = () => {
    let isValid = true;
    let newErrors = {};

    // Required field validation
    if (!userCredentials.password || !userCredentials.email) {
      newErrors.general = "*Introduce tus datos";
      isValid = false;
    }
    // Email format validation
    if (!/\S+@\S+\.\S+/.test(userCredentials.email) && userCredentials.email) {
      newErrors.general = "*El correo electrónico no es válido.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handles form submission including validation and setting loading state.
  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (!handleValidations()) {
    //   console.log("Validación falló");
    //   console.log(userCredentials)
    //   return false;
    // } else {
      console.log("Validación exitosa");
      setFormLoading(true);

      // IF MESSAGE SENT
      setFormLoading(false);
      setErrors({
        status: "Credenciales correctas.",
      });

      // IF MESSAGE NOT SENT , ERROR HANDLING
      setErrors({ status: "Ha ocurrido un error, vuelve a intentarlo." });
    // }
  };

  return (
    <div className="login row .flex-md-wrap-reverse flex-sm-wrap-reverse m-0">
      <div className="form-image my-3 col-lg-5 col-md-6 col-sm-12">
        <div className="form col-12">
          <div className="form-group my-4">
            <i className="fa-regular fa-envelope me-3"></i>
            <input
              type="text"
              placeholder="Email"
              name="name"
              value={userCredentials.name || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group my-4">
            <i className="fa-solid fa-lock me-2"></i>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={userCredentials.password || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/dashboard" className="btn-green" onClick={handleSubmit}>
              Entrar
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <p className="text-error mt-2">{errors.general}</p>
          </div>
          <div className="d-flex justify-content-center">
            <a href="/home" className="remember-password">
              Recordar contraseña
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-8">
        <h4>ACCESO AL CURSO</h4>
        <h1>
          Forma Parte de la{" "}
          <span className="text-purple">Comunidad de Creadores </span>{" "}
          Conectados
        </h1>
        <p className="no-small-screen">
          Desde los conceptos básicos hasta su integración en la creatividad
          teatral. Inicia tu aventura en el universo de la tecnología del
          futuro. <br></br> ¿Aún no tienes el curso?
        </p>
        <a
          href="https://buy.stripe.com/4gw037bHd7OP2HedQQ"
          target="_blank"
          rel="noreferrer"
          className="btn-purple no-small-screen"
        >
          ¡Inscribete ahora!
        </a>
      </div>
    </div>
  );
}

export default Login;
