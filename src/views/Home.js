import React from "react";
import NavbarHome from "../components/NavbarHome";
import CourseDetails from "../components/home/CourseDetails";

import './Home.css'

function Home() {
  return (
    <>
      <div className="hero">
        {/* <button className="purple-button">Iniciar sesión</button> */}
        <div className="hero-text">
          <h1>
            Desbloquea el Potencial Creativo de ChatGPT en las Artes Escénicas
          </h1>
          <p>
            Desde los conceptos básicos hasta su integración en la creatividad
            teatral. <br></br>Inicia tu aventura en el universo de la tecnología
            del futuro.
          </p>
          <button className="continue-button">Más información</button>
        </div>
      </div>
      <CourseDetails />
      <div className="instructor">
        <div className="instructor-container">
        <img src="https://esceniarte.s3.amazonaws.com/logo.jpeg" alt="Avatar de Kike"/>
          <h2>Enrique Torre</h2>
          <h3>Distribuidor de Sol y Tierra,  compañia que lleva más de 25 años sobre los escenarios.</h3>
      </div>
      </div>
      <NavbarHome />
    </>
  );
}

export default Home;
