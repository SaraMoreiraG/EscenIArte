import React, { useState } from "react";
import { Link } from "react-router-dom";

function Module() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
	const [videoInModal, setVideoInModal] = useState()
  // Función para abrir el modal
  const openModal = (video) => {
	setVideoInModal(video)
	setIsModalOpen(true)
	scrollToSection('video')
};

const scrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="module-details">
      {isModalOpen && (
        <div className="full-modal" id="video">
          <div className="modal-content">
            <div className="text-end">
              <i class="fa-solid fa-x" onClick={closeModal}></i>
            </div>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={videoInModal}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                // frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                // allowFullScreen
                title="Telstra 'This Is Footy Country' Video"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <p>
              <a href="https://vimeo.com/896261088">
                Telstra &quot;This Is Footy Country&quot;
              </a>{" "}
              from <a href="https://vimeo.com/user189947816">Mark Molloy</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
        </div>
      )}
      <div className="header-center">
        <h2>1. Introducción a la IA</h2>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-7">
          <div className="class-wrapper row">
            <div className="col-6 p-0">
              <img
                src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
                alt="class 1"
                className="img-fluid"
                onClick={() => openModal('https://player.vimeo.com/video/896261088?h=cc5afb0f31&title=0&byline=0&portrait=0')}
              />
            </div>
            <div className="col-6 p-3">
              <h3>Class Title</h3>
              <p>Class Description</p>
              <hr></hr>
              <div className="col-6 d-flex justify-content-between my-3">
                <span>
                  <i className="fa-regular fa-clock ms-2"></i> 10'
                </span>
                <button className="btn-pdf">
                  <i className="fa-solid fa-angles-down me-1"></i> PDF
                </button>
              </div>
            </div>
          </div>
		  <div className="class-wrapper row">
            <div className="col-6 p-0">
              <img
                src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
                alt="class 1"
                className="img-fluid"
                onClick={() => openModal('https://player.vimeo.com/video/896261088?h=cc5afb0f31&title=0&byline=0&portrait=0')}
              />
            </div>
            <div className="col-6 p-3">
              <h3>Class Title</h3>
              <p>Class Description</p>
              <hr></hr>
              <div className="col-6 d-flex justify-content-between my-3">
                <span>
                  <i className="fa-regular fa-clock ms-2"></i> 10'
                </span>
                <button className="btn-pdf">
                  <i className="fa-solid fa-angles-down me-1"></i> PDF
                </button>
              </div>
            </div>
          </div>
		  <div className="class-wrapper row">
            <div className="col-6 p-0">
              <img
                src="https://esceniarte.s3.amazonaws.com/logo.jpeg"
                alt="class 1"
                className="img-fluid"
                onClick={() => openModal('https://player.vimeo.com/video/885725676?h=b558d90589&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture')}
              />
            </div>
            <div className="col-6 p-3">
              <h3>Class Title</h3>
              <p>Class Description</p>
              <hr></hr>
              <div className="col-6 d-flex justify-content-between my-3">
                <span>
                  <i className="fa-regular fa-clock ms-2"></i> 10'
                </span>
                <button className="btn-pdf">
                  <i className="fa-solid fa-angles-down me-1"></i> PDF
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="side-navbar">
            <h4 className="p-4 ">Todos los módulos:</h4>
            <div className="ps-4">
              <Link to={"/module/1"}>
                <p>
                  <i className="fa-solid fa-circle me-1"></i> Módulo 1
                </p>
              </Link>
              <Link to={"/module/2"}>
                <p>
                  <i className="fa-solid fa-circle-notch me-1"></i> Módulo 2
                </p>
              </Link>
              <Link to={"/module/23"}>
                <p>
                  <i className="fa-regular fa-circle me-1"></i> Módulo 3
                </p>
              </Link>
              <p>Módulo 4</p>
              <p>Módulo 5</p>
              <p>Módulo 6</p>
              <p>Módulo 7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
