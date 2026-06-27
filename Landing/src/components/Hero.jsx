
function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h2 className="sm"> PURE BEAUTY , PURE YOU</h2>
               <h1>Glow Smarter. Shine <span className="bright">Brighter</span> </h1>
              <p className="para">Discover premium beauty products designed to enhance your glow,
                 boost your confidence, and make every day feel beautiful.</p>
               <div className="hero-buttons">
                 <button className="btn1 ">Shop Now</button>
                <button className="btn2 ">Explore Products</button>
                </div>
            </div>
            <div className="hero-image">
                <img className="hero-img" src="/src/assets/imgs/hero-img.png" alt="Hero" />
            </div>
        </section>
    );
}
export default Hero;