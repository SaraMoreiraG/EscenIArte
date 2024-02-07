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
            Más información <i class="fa-solid fa-angles-down ms-1"></i>
          </button>
        </div>
      </div>
      <CourseDetails />

    <div className="benefits text-center">
      <h4>FÁCIL E INTUITIVA</h4>
      <h2>Beneficios de los alumnos</h2>
      <div className="row mt-5">
        <div className="col-4 p-2">
          <div className="benefit-card small mb-3">
            <div className="text-green">
              <img src="https://cdn-icons-png.flaticon.com/512/2001/2001761.png" />
            </div>
            <h3>7 módulos</h3>
            <p>Más de 8 horas de contenido</p>
          </div>
          <div className="benefit-card large">
            <div className="text-green">
              <img src="https://www.iconarchive.com/download/i110095/thalita-torres/office/documents.1024.png" />
            </div>
            <h3>Guarda el contenido</h3>
            <p>Descarga el temario en PDF</p>
          </div>
        </div>
        <div className="col-4 p-2">
          <div className="benefit-card large mb-3">
            <div className="text-green">
              <img src="https://ann.axiomthemes.com/splash/src/img/benefits/2.png" />
            </div>
            <h3>Acceso ilimitado</h3>
            <p>Compra una vez, utilizalo siempre</p>
          </div>
          <div className="benefit-card small">
            <div className="text-green">
              <img src="https://cdn-icons-png.freepik.com/512/8424/8424046.png" />
            </div>
            <h3>Obtén un certificado</h3>
            <p>Al completar todos los módulos</p>
          </div>
        </div>
        <div className="col-4 p-2">
          <div className="benefit-card medium mb-3">
            <div className="text-green">
              <img src="https://ann.axiomthemes.com/splash/src/img/benefits/3.png" />
            </div>
            <h3>6 meses de soporte premium</h3>
            <p>Obtén soporte técnico profesional</p>
          </div>
          <div className="benefit-card medium">
            <div className="text-green">
              <img src="https://ann.axiomthemes.com/splash/src/img/benefits/6.png" />
            </div>
            <h3>FAQ y Tutoriales en Video</h3>
            <p>Toda la información en un solo lugar</p>
          </div>
        </div>
      </div>
    </div>
      <div className="instructor m-0" id="instructor">
        <div className="d-flex justify-content-center m-0 p-0">
          <img
            src="https://esceniarte-images.s3.amazonaws.com/avatar-kike.webp"
            alt="Avatar de Kike"
            className=""
          />
        </div>
        <div className="col-7 text-center m-0 p-0">
          <h2>Enrique Torre</h2>
          <h5>
          Con más de dos décadas de trayectoria en la Compañía de Teatro Sol y Tierra, mi viaje artístico trasciende los escenarios para explorar cómo las nuevas tecnologías, como ChatGPT, pueden transformar la narrativa y la experiencia teatral.
          </h5>
          </div>
      </div>
      <div className="payment row m-0" id="precio">
        <div className="col-7">
          <h4>INSCRIPCIÓN Y PRECIOS</h4>
          <h2>Impulsa tu Arte Escénico Hoy</h2>
          <p>
          Equípate con Chat GPT para liderar la innovación teatral, ampliar tu creatividad y consolidar tu presencia en el mercado. Aprende estrategias digitales avanzadas, sé pionero en adoptar técnicas futuras y destaca en un campo competitivo. ¡Transforma tu arte y asegura tu lugar en la vanguardia del teatro moderno.
          </p>
          <div className="d-flex">
            <div className="left">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Transforma tu arte. ¡Inscríbete ya!</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p> Innova en escena. Descubre el futuro.</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Desbloquea creatividad. Comienza hoy.</p>
              </div>
            </div>
            <div className="right">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Revitaliza tu teatro. Sé pionero.</p>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Aprende técnicas futuras. Actúa ahora.</p>
              </div>
            </div>
          </div>
          <div className="col-11 mt-3 text-end">
            <a
              href="https://buy.stripe.com/4gw037bHd7OP2HedQQ"
              target="_blank"
              rel="noreferrer"
              className="btn-green"
            >
              Comprar
            </a>
          </div>
        </div>
        <div className="col-4">
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
