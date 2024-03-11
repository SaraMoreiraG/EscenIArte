import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarHome() {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isNavBarVisible, setisNavBarVisible] = useState(true);

  // Function to handle the scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to toggle the arrow visibility based on scroll position
  const toggleArrowVisibility = () => {
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    if (window.scrollY > 200) {
      setIsArrowVisible(true);
    } else {
      setIsArrowVisible(false);
    }

    if (reachedBottom) {
      setisNavBarVisible(false);
    } else {
      setisNavBarVisible(true);
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
      {isArrowVisible && (
        <div className="arrow-wrapper">
          <div className="arrow">
            <button onClick={() => scrollToSection("hero")}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      )}
      {isNavBarVisible && (
        <div className="links">
          <button onClick={() => scrollToSection("offer")}>
            Curso
          </button>
          <button onClick={() => scrollToSection("instructor")}>
            Instructor
          </button>
          <button onClick={() => scrollToSection("contacto")}>Contacto</button>
          <Link to="/login">
          <button onClick={() => scrollToSection("contacto")}>Acceso</button>
          </Link>
        </div>
      )}
    </footer>
  );
}

export default NavbarHome;
