// import React, { useState } from "react";

function Dashboard() {
  const modules = [
    {
      id:1,
      name: "Introducción a la IA en Artes Escénicas",
      shortName: "Introducción",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Empieza tu viaje explorando el impacto revolucionario de la IA en el arte.",
    },

    {
      id:2,
      name: "ChatGPT y Creatividad",
      shortName: "Creatividad",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Aprende a impulsar tu proceso creativo utilizando ChatGPT.",
    introText:"Domina el diálogo con IA: técnicas avanzadas para que ChatGPT sea tu musa creativa, desbloqueando un sinfín de posibilidades para tus proyectos. Reimaginando las Artes Escénicas: ChatGPT como Catalizador Creativo ",
    },

    {
      id:3,
      name: "IA en Producción y Promoción",
      shortName: "Marketing Escénico",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Descubre estrategias de IA para la promoción y producción eficiente de tus proyectos artísticos.",
    introText:"Revitaliza la promoción de tus producciones artísticas con estrategias de marketing digital de vanguardia. Aprende cómo ChatGPT puede ser tu socio estratégico, ayudándote a capturar la atención de audiencias globales y maximizar la visibilidad y ventas de tus espectáculos.  Marketing Escénico en la Era Digital con ChatGPT. ",
    },
    {
      id:4,
      name: "Construyendo tu Audiencia Digital",
      shortName: "Aumento de Audiencia",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Utiliza la IA para captar y crecer tu audiencia en el entorno digital.",
    },
    {
      id:5,
      name: "ChatGPT en la Creación de Guiones y Diálogos",
      shortName: "Guiones y diálogos",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Perfecciona tus guiones y diálogos con el poder de ChatGPT.",
    },
    {
      id:6,
      name: "Personalización del Arte con IA",
      shortName: "Canva",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Personaliza tus proyectos artísticos para conectar profundamente con tu audiencia.",
    },
    {
      id:7,
      name: "Proyecto Final",
      shortName: "Proyecto Final",
    image: "https://ann.axiomthemes.com/splash/src/img/new-update/1.jpg",
    description: "Integra la IA en una propuesta artística innovadora, aplicando todos los conocimientos adquiridos.",
    }

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
