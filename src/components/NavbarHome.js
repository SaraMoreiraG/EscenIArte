import React, { useState, useEffect } from "react";

function NavbarHome() {
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  // Function to handle the scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to toggle the arrow visibility based on scroll position
  const toggleArrowVisibility = () => {
    if (window.scrollY > 200) {
      setIsArrowVisible(true);
    } else {
      setIsArrowVisible(false);
    }
  };

  // Effect to add/remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleArrowVisibility);

    return () => {
      window.removeEventListener("scroll", toggleArrowVisibility);
    };
  }, []);

  return (
    <footer className="navigation-bar">
      {/* Conditional rendering based on isArrowVisible state */}
      {isArrowVisible && (
        <div className="arrow-wrapper">
          <div className="arrow">
            <button onClick={() => scrollToSection("hero")}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      )}
      <div className="links">
        <button onClick={() => scrollToSection("detalles-curso")}>Curso</button>
        <button onClick={() => scrollToSection("instructor")}>Instructor</button>
        <button onClick={() => scrollToSection("precio")}>Precio</button>
        <button onClick={() => scrollToSection("contacto")}>Contacto</button>
      </div>
    </footer>
  );
}

export default NavbarHome;
