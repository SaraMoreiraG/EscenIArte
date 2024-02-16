import React, { useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCallbackResponse = useCallback(
    async (response) => {
      setLoading(true);
      const userObject = jwt_decode(response.credential);
      console.log("userObject", userObject);

      try {
        const response = await fetch(process.env.REACT_APP_CHECK_EMAIL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userObject.email }),
        });

        const data = await response.json();
        console.log("data", data);
        if (data.userExists) {
          console.log("El usuario está registrado");
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
      size: "large",
    });
  }, [handleCallbackResponse]);

  return (
    <div className="login row m-0 p-0">
      <div className="col-12 d-flex justify-content-end">
        <div>
          <div id="signInDiv"></div>
          <p className="text-end text-error">{error}</p>
        </div>
      </div>
      <div className="form-image col-lg-5 col-md-6 col-sm-12">
        {loading && (
          <div className="col-12 d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-8">
        <h4>ACCESO AL CURSO</h4>
        <h1>
          Forma Parte de la{" "}
          <span className="text-purple">Comunidad de Creadores </span>{" "}
          Conectados
        </h1>
        <p>
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
      </div>
    </div>
  );
}

export default Login;
