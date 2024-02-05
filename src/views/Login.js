import React from "react";

function Login() {
  return (
    <div className="login row .flex-md-wrap-reverse flex-sm-wrap-reverse m-0">
      <div className="form-image my-3 col-lg-5 col-md-6 col-sm-12">
        <div className="form col-12">
          <div className="form-group my-4">
            <i className="fa-regular fa-envelope me-3"></i>
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="form-group my-4">
            <i className="fa-solid fa-lock me-2"></i>
            <input type="password" placeholder="Contraseña"></input>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-green">Entrar</button>
          </div>
		  <div className="d-flex justify-content-center">
            <p className="error mt-2">Usuario o contraseña incorrectos</p>
          </div>
		  <div className="d-flex justify-content-center">
            <a href="/home">Recordar contraseña</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-8">
        <h4>ACCESO AL CURSO</h4>
        <h1>
          Forma Parte de la <span className="text-purple">Comunidad de Creadores </span> Conectados
        </h1>
        <p className="no-small-screen">
          Desde los conceptos básicos hasta su integración en la creatividad
          teatral. Inicia tu aventura en el universo de la tecnología del
          futuro.
        </p>
        <button className="btn-purple no-small-screen">Comprar</button>
      </div>
    </div>
  );
}

export default Login;
