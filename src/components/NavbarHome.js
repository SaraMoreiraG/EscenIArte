import React from "react";

function NavbarHome() {
  // Function to handle the scroll
  const scrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="navigation-bar">
      {/* Use onClick instead of href to scroll */}
	  <div className="arrow-wrapper">
	  <div className="arrow">
		<button onClick={() => scrollToSection("hero")}><i className="fa-solid fa-arrow-up"></i></button>
	  </div>
	  </div>
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
