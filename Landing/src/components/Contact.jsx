
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
    return (
        <section className="contact" id="contact">
            <img src="../src/assets/imgs/products.png" alt="" />
            <div className="container">
                <h3>Get in Touch</h3>
                <h1>We'd Love to Hear from You!</h1>
                <p>Ready to start your journey?Join thousands of happy users today.</p>
                <div className="some">

                    <form action="" className="form">
                        <div className="input-group">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                        </div>

                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>


                    <div className="contact-info">

                        <div className="item">
                            <div className="title">
                                <MdEmail className="icon" />
                                <h4>Email</h4>
                            </div>
                            <p>contact@glowlab.com</p>
                        </div>

                        <div className="item">
                            <div className="title">
                                <FaPhoneAlt className="icon" />
                                <h4>Phone</h4>
                            </div>
                            <p>+212 6 12 34 56 78</p>
                        </div>

                        <div className="item">
                            <div className="title">
                                <FaLocationDot className="icon" />
                                <h4>Location</h4>
                            </div>
                            <p>Casablanca, Morocco</p>
                        </div>

                    </div>
                </div>



            </div>
        </section>
    )
}
export default Contact