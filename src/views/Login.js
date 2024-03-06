import React, { useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCallbackResponse = useCallback(
    async (response) => {
      setLoading(true);
      const userObject = jwt_decode(response.credential);

      try {
        const response = await fetch(process.env.REACT_APP_CHECK_EMAIL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userObject.email }),
        });

        const data = await response.json();

        if (data.userExists) {
          console.log("El usuario está registrado");
          localStorage.setItem("authToken", data.token);
          setError("");
          navigate("/dashboard");
        } else {
          console.log("El usuario no existe");
          setError("*Inscríbete para acceder al curso.");
        }
      } catch (error) {
        console.error("Error al comprobar el correo", error);
        setError("Ha ocurrido un error, vuelve a intentarlo.");
      }
      setLoading(false);
    },
    [navigate]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
  }, [handleCallbackResponse]);

  return (
    <>
      <div className="login row m-0">
        <div className="row justify-content-end p-0">
          {/* <div className="col-12 d-flex justify-content-end p-0 first-sign-in">
            <div id="signInDiv"></div>
          </div> */}
          <div className="col-12 justify-content-end">
            <p className="text-end text-error">{error}</p>
          </div>
          {loading && (
            <div className="col-12 d-flex justify-content-end">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 pb-5 pt-2 px-3">
          <h4>INSCRIPCIÓN</h4>
          <h1>
            Forma Parte de la{" "}
            <span className="text-purple">Comunidad de Creadores </span>{" "}
            Conectados
          </h1>
          <p className="mb-5">
            Desde los conceptos básicos hasta su integración en la creatividad
            teatral. Inicia tu aventura en el universo de la tecnología del
            futuro. <br></br> ¿Aún no tienes el curso?
          </p>
          <a
            href="https://buy.stripe.com/4gw037bHd7OP2HedQQ"
            target="_blank"
            rel="noreferrer"
            className="btn-purple"
          >
            ¡Inscribete ahora!
          </a>
          <p className="mt-5 mb-4">Si ya te ha inscrito accede al panel del alumno:</p>
          <div className="col-12 d-flex justify-content-start second-sign-in">
            <div id="signInDiv"></div>
          </div>
        </div>
        <div className="image-container col-lg-6 col-md-5 col-sm-12 p-0">
          <img
            src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
            alt="Esceniarte logo"
            className="img-fluid w-100"
          />
        </div>

      </div>
      <NavbarLogin />
    </>
  );
}

export default Login;
