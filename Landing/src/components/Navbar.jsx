
function Navbar() {
  return (
    <div className="div">
      <nav className="navbar">
        <h2 className="logo">Glow <span className="lab">Lab</span></h2>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <button className="btn">Get Started</button>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;