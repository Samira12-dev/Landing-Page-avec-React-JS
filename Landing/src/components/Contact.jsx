function Contact() {
    return (
        <section className="contact">
            <img src="../src/assets/imgs/design.png" alt="" />
            <div className="container">
                <h3>Get in Touch</h3>
                <h1>We'd Love to Hear from You!</h1>
                <p>Ready to start your journey?Join thousands of happy users today.</p>

                <form action="" className="form">
                    <div className="input-group">
                     <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    </div>
                    
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact