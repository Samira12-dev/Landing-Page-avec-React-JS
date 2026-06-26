import { FaStar } from "react-icons/fa";

function TestimonialCard({ name, review, image, rating }) {
    return (
        <div className="testimonial-card">
            <div className="stars">
                {Array.from({ length: rating }, (_, index) => (
                    <FaStar key={index} />
                ))}
            </div>

            <p className="review">{review}</p>

            <div className="user-info">
                <img src={image} alt={name} className="user-image" />
                <h5>{name}</h5>
            </div>
        </div>

    )
}
export default TestimonialCard