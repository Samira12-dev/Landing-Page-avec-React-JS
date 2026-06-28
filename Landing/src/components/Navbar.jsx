import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">

      <h2 className="logo">
        Glow <span className="lab">Lab</span>
      </h2>

      <nav ref={navRef} className="navbar">
        <ul className="nav-links">
          <li><a href="#home" onClick={showNav}>Home</a></li>
          <li><a href="#features" onClick={showNav}>Features</a></li>
          <li><a href="#about" onClick={showNav}>About</a></li>
          <li><a href="#testimonials" onClick={showNav}>Testimonials</a></li>
          <li><a href="#contact" onClick={showNav}>Contact</a></li>

          <li>
            <button className="btn">Get Started</button>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn nav-open-btn" onClick={showNav}>
        <FaBars />
      </button>

    </header>
  );
}

export default Navbar;