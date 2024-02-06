import React from "react";
import DifferentGallery from "./DifferentGallery";

import "../../images/1.jpg";

const CourseDetails = () => {
  const imagesInfo = [
    {
      id: 1,
      text: "Descripción de la imagen 1",
      shortText: "Imagen 1",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 2,
      text: "Descripción de la imagen 2",
      shortText: "Imagen 2",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 3,
      text: "Descripción de la imagen 3",
      shortText: "Imagen 3",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
    {
      id: 4,
      text: "Descripción de la imagen 4",
      shortText: "Imagen 4",
      imgSrc: "https://esceniarte.s3.amazonaws.com/logo.jpeg",
    },
  ];

  return (
    <div className="course-details" id="detalles-curso">
      <div className="header-center">
        <h2>Una gran frase que describa el curso</h2>
      </div>
      <div className="images-container">
        {imagesInfo.map((image) => (
          <div key={image.id} className="details-block">
            <div className="image-wrapper">
              <div className="image-hover">
                <img src={image.imgSrc} alt={`Descripción ${image.id}`} />
                <div className="hover-text">
                  <p>{image.text}</p>
                </div>
              </div>
            </div>
            <p className="image-description">{image.shortText}</p>
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
