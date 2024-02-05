import React from 'react';
import './DifferentGallery.css'; // Make sure this is the correct path to your CSS file

const DifferentGallery = () => {
  const galleryItems = [
    { id: 1, icon: 'Icon 1', header: 'Header Text 1', description: 'Sort Description 1', size: 'small' },
    { id: 2, icon: 'Icon 2', header: 'Header Text 2', description: 'Sort Description 2', size: 'large' },
    { id: 3, icon: 'Icon 3', header: 'Header Text 3', description: 'Sort Description 3', size: 'medium' },
    { id: 1, icon: 'Icon 1', header: 'Header Text 1', description: 'Sort Description 1', size: 'large' },
    { id: 2, icon: 'Icon 2', header: 'Header Text 2', description: 'Sort Description 2', size: 'small' },
    { id: 3, icon: 'Icon 3', header: 'Header Text 3', description: 'Sort Description 3', size: 'medium' },
  ];

  return (
    <div className="gallery row m-0">
      {galleryItems.map((item) => (
        <div key={item.id} className={`uniform-card col-3 ${item.size}`}>
          <div className="icon">{item.icon}</div>
          <h3>{item.header}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DifferentGallery;
