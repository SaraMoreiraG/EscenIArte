// import React, { useState } from "react";

function Dashboard() {
  const modules = [
    {
      id: 1,
      name: "IA en Escena: Transformando las Artes",
	  image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
	  shortDescription: "Embárcate en un viaje a través de la revolución de la IA",
      description:
        "Embárcate en un viaje a través de la revolución de la IA, explorando cómo esta redefine las prácticas artísticas desde la concepción de ideas hasta su materialización. Descubre ejemplos concretos de innovación y creatividad potenciadas por la inteligencia artificial",
    },
	{
		id: 1,
		name: "IA en Escena: Transformando las Artes",
		image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
		shortDescription: "Embárcate en un viaje a través de la revolución de la IA",
		description:
		  "Embárcate en un viaje a través de la revolución de la IA, explorando cómo esta redefine las prácticas artísticas desde la concepción de ideas hasta su materialización. Descubre ejemplos concretos de innovación y creatividad potenciadas por la inteligencia artificial",
	  },
  ];
  return (
    <div className="dashboard row m-0 text-center">
      <h4>PANEL DEL ALUMNO</h4>
      <h2>¡Bienvenidx Alejandrx!</h2>
      <p> Inicia tu aventura en el universo de la tecnología del futuro.</p>
      <div className="row my-5">
        {modules.map((module) => (
          <div className="module col-lg-4 col-md-5 col-12 p-2">
            <img
              src={module.image}
              className="img-fluid"
			  alt=""
            />
            <div className="module-hover-text">
              <p>{module.name}</p>
            </div>
          </div>
        ))}
        {/* <div className="module col-lg-4 col-md-5 col-12 p-2">
          <img
            src="https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg"
            className="img-fluid"
          />
          <div className="module-hover-text">
            <p>1.Magia</p>
          </div>
        </div>
		<div className="module col-lg-4 col-md-5 col-12 p-2">
          <img
            src="https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg"
            className="img-fluid"
          />
          <div className="module-hover-text">
            <p>1.Magia</p>
          </div>
        </div>
		<div className="module col-lg-4 col-md-5 col-12 p-2">
          <img
            src="https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg"
            className="img-fluid"
          />
          <div className="module-hover-text">
            <p>1.Magia</p>
          </div>
        </div>
		<div className="module col-lg-4 col-md-5 col-12 p-2">
          <img
            src="https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg"
            className="img-fluid"
          />
          <div className="module-hover-text">
            <p>1.Magia</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
