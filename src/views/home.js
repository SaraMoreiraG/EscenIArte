import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import CourseDetails from "../components/home/CourseDetails";

import "./Home.css";

function Home() {
  // Function to handle the scroll
  const scrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero" id="hero">
        <Link to="/login" className="purple-button">
          Iniciar sesión
        </Link>

        <div className="hero-text">
          <h1>
            Desbloquea el Potencial Creativo de ChatGPT en las Artes Escénicas
          </h1>
          <p>
            Desde los conceptos básicos hasta su integración en la creatividad
            teatral. <br></br>Inicia tu aventura en el universo de la tecnología
            del futuro.
          </p>
          <button
            onClick={() => scrollToSection("detalles-curso")}
            className="continue-button"
          >
            Más información
          </button>
        </div>
      </div>
      <CourseDetails />
      <div className="instructor" id="instructor">
        <div className="instructor-container text-center">
          <img
            src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
            alt="Avatar de Kike"
          />
          <h2 className="col-12 my-3">Enrique Torre</h2>
          <h3 className="">
            Distribuidor de Sol y Tierra, compañia que lleva más de 25 años
            sobre los escenarios.
          </h3>
        </div>
      </div>
      <div className="payment row m-0" id="precio">
        <div className="col-6">
          <h4>INSCRIPCIÓN Y PRECIOS</h4>
          <h2>Lorem ipsum dolor sit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="d-flex">
            <div className="left">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="right">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="col-11 mt-3 text-end">
            <a
              href="https://buy.stripe.com/test_5kA8x3g4Rd2x3oQcMM"
              target="_blank"
              rel="noreferrer"
              className="btn-green"
            >
              Comprar
            </a>
          </div>
        </div>
        <div className="col-5">
          <div className="position-relative text-center col-12 bg-primary">
            {/* <!-- Imagen de fondo --> */}
            <img
              src="https://ann.axiomthemes.com/splash/src/img/elm/1.jpg"
              className="img-fluid"
              alt="Background"
            />

            {/* <!-- Imagen superpuesta --> */}
            <div className="overlay-image-container position-absolute">
              <img
                src="https://ann.axiomthemes.com/splash/src/img/elm/1.jpg"
                className="img-fluid "
                alt="Overlay"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact row m-0" id="contacto">
        <div className="col-6">
          <h4>CONTACTO</h4>
          <h1>
            ¿Tienes alguna Duda? <br></br>Contáctanos
          </h1>
          <div className="mt-3">
            <img
              src="https://ann.axiomthemes.com/splash/src/img/elm/1.jpg"
              className="img-fluid"
              alt="Background"
            />
          </div>
        </div>
        <div className="form col-6">
          <div className="form-group my-4">
            <i className="fa-regular fa-user me-3"></i>
            <input type="text" placeholder="Nombre"></input>
          </div>
          <div className="form-group my-4">
            <i className="fa-solid fa-phone me-3"></i>
            <input type="text" placeholder="Teléfono"></input>
          </div>
          <div className="form-group my-4">
            <i className="fa-regular fa-envelope me-3"></i>
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="form-group my-4">
            <i className="fa-regular fa-comment me-3"></i>
            <input type="tex" placeholder="Asunto"></input>
          </div>
          <div className="form-group d-flex align-items-top my-4">
            <i className="fa-solid fa-pen me-3"></i>
            <textarea rows="3" cols="50" placeholder="Mensaje"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn-green">
              <i className="fa-regular fa-paper-plane me-2"></i> Enviar
            </button>
          </div>
        </div>
        {/* <div className="form col-6">
          <form
            className="form col-6"
            action="https://formspree.io/f/tuID" // Reemplaza "tuID" con tu ID real de Formspree
            method="POST"
          >
            <div className="form-group my-4">
              <i className="fa-regular fa-user me-3"></i>
              <input type="text" name="nombre" placeholder="Nombre" />
            </div>
            <div className="form-group my-4">
              <i className="fa-solid fa-phone me-3"></i>
              <input type="text" name="telefono" placeholder="Teléfono" />
            </div>
            <div className="form-group my-4">
              <i className="fa-regular fa-envelope me-3"></i>
              <input type="email" name="_replyto" placeholder="Email" />
            </div>
            <div className="form-group my-4">
              <i className="fa-regular fa-comment me-3"></i>
              <input type="text" name="asunto" placeholder="Asunto" />
            </div>
            <div className="form-group d-flex align-items-top my-4">
              <i className="fa-solid fa-pen me-3"></i>
              <textarea
                rows="3"
                cols="50"
                name="mensaje"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn-green">
                <i className="fa-regular fa-paper-plane me-2"></i> Enviar
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <NavbarHome />
    </>
  );
}

export default Home;
