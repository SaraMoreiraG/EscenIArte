import React from 'react';

const CourseDetails = () => {
  const imagesInfo = [
    { id: 1, text: 'Descripción de la imagen 1', imgSrc: '/path-to-image-1.jpg' },
    { id: 2, text: 'Descripción de la imagen 2', imgSrc: '/path-to-image-2.jpg' },
    { id: 3, text: 'Descripción de la imagen 3', imgSrc: '/path-to-image-3.jpg' },
    { id: 4, text: 'Descripción de la imagen 4', imgSrc: '/path-to-image-4.jpg' },
  ];

  return (
    <div className="course-details">
      <h2>Una gran frase que describa el curso</h2>
      <div className="images-container">
        {imagesInfo.map((image) => (
          <div key={image.id} className="image-wrapper">
            <div className="image-hover">
              <img src={image.imgSrc} alt={`Descripción ${image.id}`} />
              <div className="hover-text">
                <p>{image.text}</p>
              </div>
            </div>
            <p className="image-description">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
