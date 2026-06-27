import { testimonials } from "../assets/Data/Testimonials"; 
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <h1>Testiminials</h1>
            <h2>What Our Customers Say</h2>
            <div className="testimonial-container">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                key={testimonial.id}
                rating={testimonial.rating}
                review={testimonial.review}
                image={testimonial.image}
                name={testimonial.name}
                />
                ))}
             </div>
        </section>
    )
}
export default Testimonials