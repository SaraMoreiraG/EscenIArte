import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarLogin() {
  const [isNavBarVisible, setisNavBarVisible] = useState(true);

  // Function to toggle the arrow and NavBar visibility based on scroll position
  const toggleArrowVisibility = () => {
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    if (reachedBottom) {
      setisNavBarVisible(true);
    } else {
      setisNavBarVisible(false);
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
      {isNavBarVisible && (
        <div className="links">
          <Link to={'/'}>Más información</Link>
        </div>
      )}
    </footer>
  );
}

export default NavbarLogin;
