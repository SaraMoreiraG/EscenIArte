import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

import "./Home.css";

function Home() {
  // State management for contact form inputs, validation errors, and loading status.
  const imagesInfo = [
    {
      id: 1,
      text: "Aprenderás a integrar ChatGPT en tu proceso creativo, utilizando IA para la generación de ideas innovadoras y la creación de contenidos artísticos.",
      shortText: "Dominio de ChatGPT en el Arte",
      imgSrc:
        "https://esceniarte-images.s3.amazonaws.com/home/1.-Dominio-de-ChatGPT-en-el-Arte.webp",
    },
    {
      id: 2,
      text: "Desarrollarás estrategias para emplear la IA en la mejora de la producción artística y en la ejecución de campañas de marketing digital efectivas.",
      shortText: "Innovación en Producción y Promoción",
      imgSrc:
        "https://esceniarte-images.s3.amazonaws.com/home/2.Innovacio%CC%81n-en-Produccio%CC%81n-y-Promocio%CC%81n.webp",
    },
    {
      id: 3,
      text: "Adquirirás habilidades para crear y distribuir contenido digital atractivo, ampliando tu alcance y conectando con audiencias globales",
      shortText: "Expansión de Audiencia Digital",
      imgSrc:
        "https://esceniarte-images.s3.amazonaws.com/home/3.Expansio%CC%81n-de-Audiencia-Digital.webp",
    },
    {
      id: 4,
      text: "Te posicionarás a la vanguardia de la intersección entre arte y tecnología, preparado para explorar y liderar innovaciones en las artes escénicas.",
      shortText: "Liderazgo Artístico Tecnológico",
      imgSrc:
        "https://esceniarte-images.s3.amazonaws.com/home/4.-Liderazgo-Arti%CC%81stico-Tecnolo%CC%81gico.webp",
    },
  ];
  const [contactForm, setContactForm] = useState({});
  const [errors, setErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [errorUserEmail, setErrorUserEmail] = useState({});
  const [emailLoading, setEmailLoading] = useState(false);

  // Handle input change and manage form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name] || errors.general) {
      // Clear specific field errors and general errors upon input change.
      setErrors((prev) => ({ ...prev, [name]: "", general: "", status: "" }));
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
  };

  // Validate form fields
  const handleValidations = () => {
    let isValid = true;
    let newErrors = {};

    // Required field validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      newErrors.general = "*Faltan uno o más campos requeridos.";
      isValid = false;
    }
    // Email format validation
    if (!isValidEmail(contactForm.email) && contactForm.email) {
      newErrors.email = "*El correo electrónico no es válido.";
      isValid = false;
    }
    // Phone number validation
    if (!/^\d{9}$/.test(contactForm.phone) && contactForm.phone) {
      newErrors.phone = "*El número de teléfono no es válido.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Async function to handle the contact form sending process
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidations()) {
      console.log("Validación falló");
      return false;
    }

    console.log("Validación exitosa");
    setFormLoading(true);

    try {
      const response = await fetch(process.env.REACT_APP_CONTACT_FORM_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm)
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const data = await response.json();
      console.log("Mensaje enviado exitosamente", data);
      setErrors({
        status: "Mensaje enviado. En breve nos pondremos en contacto."
      });

    } catch (error) {
      console.error("Error al enviar el mensaje", error);
      setErrors({ status: "Ha ocurrido un error, vuelve a intentarlo." });
    } finally {
      setFormLoading(false);
    }
  };

  // Async function to handle the email sending process
  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Validates the email format before proceeding
    if (!userEmail || !isValidEmail(userEmail)) {
      setErrorUserEmail({
        message: "Por favor, ingresa un correo electrónico válido.",
        code: "400",
      });
      return;
    }

    setErrorUserEmail({});

    try {
      setEmailLoading(true);
      // Makes a POST request to the API endpoint with the email
      const response = await fetch(
        process.env.REACT_APP_SEND_EMAIL_API,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        }
      );

      const data = await response.json();

      if (response.ok && data.statusCode === "200") {
        setUserEmail("");
        setErrorUserEmail({
          message: "Correo suscrito con éxito",
          code: data.statusCode,
        });
      } else {
        if (data.statusCode === "409") {
          setErrorUserEmail({
            message: "Correo ya suscrito.",
            code: data.statusCode,
          });
        } else {
          setErrorUserEmail({
            message: "Error al suscribir el correo.",
            code: data.statusCode,
          });
        }
      }
      setEmailLoading(false);
    } catch (error) {
          setEmailLoading(false);
          setErrorUserEmail({ message: "Error al suscribir el correo.", code:'400' });
    }
  };

  // Function to scroll to a specific section smoothly.
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
        <Link to="/login" className="btn-purple fixed-button">
          <span className="button-text">Entrar</span>
          <i className="fa-solid fa-right-to-bracket button-icon"></i>
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
            Más información <i className="fa-solid fa-angles-down ms-1"></i>
          </button>
        </div>
      </div>
      <div className="course-details" id="detalles-curso">
        <div className="header-center">
          {/* <h2><span className="text-green">Creatividad</span> Sin Límites: <br></br><span className="text-green">IA</span> en las <span className="text-green">Artes Escénicas</span></h2> */}
          <h2>
            Creatividad Sin Límites: <br></br>IA en las Artes Escénicas
          </h2>
        </div>
        <div className="images-container row mt-5 mx-0">
          {imagesInfo.map((image) => (
            <div key={image.id} className="details-block col-md-3 col-sm-6">
              <div className="image-wrapper">
                <div className="image-hover">
                  <img src={image.imgSrc} alt={`Descripción ${image.id}`} />
                  <div className="hover-text">
                    <p>{image.text}</p>
                  </div>
                </div>
              </div>
              <h5 className="image-description">{image.shortText}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="benefits row m-0 text-center">
        <h4>FÁCIL E INTUITIVA</h4>
        <h2>Beneficios de los alumnos</h2>
        <div className="row justify-content-between mx-0 my-5">
          <div className="col-lg-4 col-md-4 col-sm-6 p-2">
            <div className="benefit-card small mb-3">
              <div className="text-green">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2001/2001761.png"
                  alt="7 modulos"
                />
              </div>
              <h3>7 módulos</h3>
              <p>Más de 8 horas de contenido</p>
            </div>
            <div className="benefit-card large">
              <div className="text-green">
                <img
                  src="https://www.iconarchive.com/download/i110095/thalita-torres/office/documents.1024.png"
                  alt="descarga de contenido"
                />
              </div>
              <h3>Guarda el contenido</h3>
              <p>Descarga el temario en PDF</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 p-2">
            <div className="benefit-card large mb-3">
              <div className="text-green">
                <img
                  src="https://ann.axiomthemes.com/splash/src/img/benefits/2.png"
                  alt="acceso ilimitado"
                />
              </div>
              <h3>Acceso ilimitado</h3>
              <p>Compra una vez, utilizalo siempre</p>
            </div>
            <div className="benefit-card small">
              <div className="text-green">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8424/8424046.png"
                  alt="certificado"
                />
              </div>
              <h3>Obtén un certificado</h3>
              <p>Al completar todos los módulos</p>
            </div>
          </div>
          <div className="change-display col-lg-4 col-md-4 col-sm-12 p-2 gap-2">
            <div className="benefit-card medium col-md-12 col-sm-6 col-12 mb-3">
              <div className="text-green">
                <img
                  src="https://ann.axiomthemes.com/splash/src/img/benefits/3.png"
                  alt="soporte técnico"
                />
              </div>
              <h3>6 meses de soporte premium</h3>
              <p>Obtén soporte técnico profesional</p>
            </div>
            <div className="benefit-card medium col-md-12 col-sm-6 col-12">
              <div className="text-green">
                <img
                  src="https://ann.axiomthemes.com/splash/src/img/benefits/6.png"
                  alt="video tutoriales"
                />
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
          <h2 className="my-4">Enrique Torre</h2>
          <h5>
            Con más de dos décadas de trayectoria en la Compañía de Teatro Sol y
            Tierra, mi viaje artístico trasciende los escenarios para explorar
            cómo las nuevas tecnologías, como ChatGPT, pueden transformar la
            narrativa y la experiencia teatral.
          </h5>
        </div>
      </div>
      <div className="payment row m-0" id="precio">
        <div className="col-lg-6 col-md-12">
          <h4>INSCRIPCIÓN Y PRECIOS</h4>
          <h2>
            Impulsa tu <span className="text-purple">Arte Escénico </span>
            <span className="no-1149-screen">Hoy Mismo</span>
          </h2>
          <p className="col-lg-12 col-md-9 mt-3">
            Equípate con Chat GPT para liderar la innovación teatral, ampliar tu
            creatividad y consolidar tu presencia en el mercado. Aprende
            estrategias digitales avanzadas. ¡Transforma tu arte y aseguraté un
            lugar en la vanguardia del teatro moderno!
          </p>
          <div className="no-big-screen">
            <div className="col-10">
              <img
                src="https://ann.axiomthemes.com/splash/src/img/elm/1.jpg"
                className="img-fluid"
                alt="Background"
              />
            </div>
          </div>
          <div className="row m-0 pt-3">
            <div className="left col-md-6 col-sm-12">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Aprende a tu ritmo, sin límites.</p>
              </div>
              <div className="right">
                <div className="icon-name">
                  <i className="fa-solid fa-check"></i>
                  <p>Casos prácticos y reales.</p>
                </div>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Obtén tu certificado oficial.</p>
              </div>
            </div>
            <div className="right col-md-6 col-sm-12">
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p> 7 módulos de innovación.</p>
              </div>
              <div className="right">
                <div className="icon-name">
                  <i className="fa-solid fa-check"></i>
                  <p>Desbloquea tu creatividad.</p>
                </div>
              </div>
              <div className="icon-name">
                <i className="fa-solid fa-check"></i>
                <p>Acceso a ChatGPT 4.</p>
              </div>
            </div>
          </div>
          <div className="col-11 my-5 text-end">
            <a
              href="https://buy.stripe.com/4gw037bHd7OP2HedQQ"
              target="_blank"
              rel="noreferrer"
              className="btn-green"
            >
              ¡Inscribete ya!
            </a>
          </div>
        </div>
        <div className="col-lg-5 ps-4 col-md-5 no-medium-screen">
          <div className="position-relative text-center col-12 bg-primary">
            {/* <!-- Imagen de fondo --> */}
            <img
              src="https://ann.axiomthemes.com/splash/src/img/elm/1.jpg"
              className="img-fluid"
              alt="Background"
            />

            {/* <!-- Imagen superpuesta --> */}
            <div className="overlay-image-container">
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
        <div className="col-lg-6 col-md-5 col-12">
          <h4>CONTACTO</h4>
          <h2>¿Tienes alguna Duda?</h2>
          <div className="no-small-screen mt-3">
            <img
              src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
              className="img-fluid"
              alt="Background"
            />
          </div>
        </div>
        <div className="form col-lg-6 col-md-7 col-12">
          <div
            className={`form-group my-4 ${errors.general ? "input-error" : ""}`}
          >
            <i className="fa-regular fa-user"></i>
            <input
              type="text"
              className="col-11 ps-3"
              placeholder="Nombre"
              name="name"
              value={contactForm.name || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div
            className={`form-group my-4 ${
              !errors.general && errors.phone ? "input-error" : ""
            }`}
          >
            <i className="fa-solid fa-phone"></i>
            <input
              type="text"
              className="col-11 ps-3"
              placeholder="Teléfono"
              name="phone"
              value={contactForm.phone || ""}
              onChange={handleChange}
            ></input>
          </div>
          <p className="error">{!errors.general && errors.phone}</p>
          <div
            className={`form-group my-4 ${
              errors.general || errors.email ? "input-error" : ""
            }`}
          >
            <i className="fa-regular fa-envelope"></i>
            <input
              type="text"
              className="col-11 ps-3"
              placeholder="Email"
              name="email"
              value={contactForm.email || ""}
              onChange={handleChange}
            ></input>
          </div>
          <p>{errors.email}</p>
          <div
            className={`form-group d-flex align-items-top my-4 ${
              errors.general ? "input-error" : ""
            }`}
          >
            <i className="fa-solid fa-pen me-3"></i>
            <textarea
              rows="3"
              cols="50"
              placeholder="Mensaje"
              name="message"
              value={contactForm.message || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <p className="text-error">{errors.general}</p>
          <p className="error">{errors.status}</p>
          <div className="d-flex justify-content-end">
            <button className="btn-green" onClick={handleSubmit}>
              {formLoading ? (
                <div className="spinner-border text-light p-0" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <i className="fa-regular fa-paper-plane me-2"></i> Enviar
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="footer row m-0">
        <div className="row d-flex justify-content-between col-12 my-3">
          <h2 className="col-lg-6 col-md-5 col-sm-12 mb-3">EscenIArte</h2>
          <h2 className="col-lg-6 col-md-7 col-sm-12">
            Innovación en escena, actúa ahora
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-12 mb-3">
            <h5>Suscribete a nuestra NewsLetter</h5>
            <div className="d-flex align-items-center">
              <div
                className={`form-group my-4 col-9 me-3 mb-0${
                  errors.general || errors.email ? "input-error" : ""
                }`}
              >
                <i className="fa-regular fa-envelope ms-3"></i>
                <input
                  type="text"
                  className="col-10 ps-3"
                  placeholder="Email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </div>
              {emailLoading ? (
                <div className="spinner-border email-send" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <div className="email-send" onClick={handleSendEmail}>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              )}
            </div>
            <p
              className={`ms-2 ${
                errorUserEmail.code && errorUserEmail.code !== "200"
                  ? "text-error"
                  : ""
              }`}
            >
              {errorUserEmail.message}
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-6 mb-3">
            <h5 className="mb-3">Redes</h5>
            <ul>
              <li>Instagram</li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61556099401622"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-6 mb-3">
            <h5 className="mb-3">Menu</h5>
            <ul>
              <li onClick={() => scrollToSection("detalles-curso")}>Curso</li>
              <li onClick={() => scrollToSection("instructor")}>Instructor</li>
              <li onClick={() => scrollToSection("precio")}>Inscripción</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 mb-3">
            <h5>Contacto</h5>
            <ul>
              <li onClick={() => scrollToSection("contacto")}>
                esceniarte@gmail.com
              </li>
              <li>
                <a
                  href="https://wa.me/34699375412?text=Hola%21%20Estoy%20interesado%2Fa%20en%20vuestro%20curso."
                  target="_blank"
                  rel="noreferrer"
                >
                  699 37 54 12
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34618196103?text=Hola%21%20Estoy%20interesado%2Fa%20en%20vuestro%20curso."
                  target="_blank"
                  rel="noreferrer"
                >
                  618 19 61 03
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavbarHome />
    </>
  );
}

export default Home;
