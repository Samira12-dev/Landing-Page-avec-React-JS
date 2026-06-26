import { features } from "../assets/Data/Features";
import Card from "./Card";

function Features() {
  return (
    <section className="features">
      <h1>Our Features</h1>
      <h2>Why Choose GlowLab?</h2>

      <div className="cards-container">
        {features.map((feature) => (
          <Card
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;