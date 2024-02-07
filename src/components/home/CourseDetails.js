import React from "react";
import DifferentGallery from "./DifferentGallery";

import "../../images/1.jpg";

const CourseDetails = () => {
  const imagesInfo = [
    {
      id: 1,
      text: "Aprenderás a integrar ChatGPT en tu proceso creativo, utilizando IA para la generación de ideas innovadoras y la creación de contenidos artísticos.",
      shortText: "Dominio de ChatGPT en el Arte",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 2,
      text: "Desarrollarás estrategias para emplear la IA en la mejora de la producción artística y en la ejecución de campañas de marketing digital efectivas.",
      shortText: "Innovación en Producción y Promoción",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 3,
      text: "Adquirirás habilidades para crear y distribuir contenido digital atractivo, ampliando tu alcance y conectando con audiencias globales",
      shortText: "Expansión de Audiencia Digital",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 4,
      text: "Te posicionarás a la vanguardia de la intersección entre arte y tecnología, preparado para explorar y liderar innovaciones en las artes escénicas.",
      shortText: "Liderazgo Artístico Tecnológico",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
  ];

  return (
    <div className="course-details" id="detalles-curso">
      <div className="header-center">
        <h2><span className="text-purple">Creatividad</span> Sin Límites: <br></br><span className="text-purple">IA</span> en las <span className="text-purple">Artes Escénicas</span></h2>
      </div>
      <div className="images-container row my-5 mx-0">
        {imagesInfo.map((image) => (
          <div key={image.id} className="details-block col-md-3 col-sm-5">
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
      <div className="header-center">
        <h2>Detalles del curso</h2>
      </div>
      <DifferentGallery />

    </div>
  );
};

export default CourseDetails;
