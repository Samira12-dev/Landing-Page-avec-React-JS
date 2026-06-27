
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-column">
                <h4>GlowLab</h4>
                <p>Discover premium skincare products designed to enhance your natural beauty and confidence.</p>
                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <div className="footer-column">
                <h4>Quick Links</h4>

                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
                <h4>Customer Services</h4>

                <a href="#">FAQ</a>
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer-column">
                <h4>Newsletter</h4>
                <h6>Stay Updated</h6>
                <p>Subscribe to receive beauty tips and exclusive offers.</p>
                <div className="newsletter">
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
}
export default Footer;