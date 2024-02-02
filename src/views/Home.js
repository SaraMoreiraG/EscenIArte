import React from "react";
import NavbarHome from "../components/NavbarHome";
import CourseDetails from "../components/home/CourseDetails";

import './Home.css'

function Home() {
  return (
    <>
      <div className="hero">
        <button className="purple-button">Iniciar sesión</button>
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
      {/* <div className="course-details">
        <h1>Una gran frase que describa el curso</h1>
        <div className="course-grid">
          <div className="course-grid-item">
            <div className="course-image">imagen</div>
            <p>Text</p>
          </div>
          <div className="course-grid-item">
            <div className="course-image">imagen</div>
            <p>Text</p>
          </div>
          <div className="course-grid-item">
            <div className="course-image">imagen</div>
            <p>Text</p>
          </div>
          <div className="course-grid-item">
            <div className="course-image">imagen</div>
            <p>Text</p>
          </div>
        </div>
      </div> */}
      <CourseDetails />
      <NavbarHome />
    </>
  );
}

export default Home;
