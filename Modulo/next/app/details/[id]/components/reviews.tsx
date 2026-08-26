import { Review } from "@/app/models/Review";
import "../styles.css";

export default function Reviews({ reviews }: { reviews: Review[] }) {
    return (
    <div className="reviews-container">
        <h2 className="text-lg font-bold mb-2">Reseñas ({reviews.length})</h2>
        {reviews.map((review: Review) => (
            <div key={review.id} className="review-container">
                <h3 className="text-lg font-bold mb-2">{review.date}</h3>
                <p>{review.author} : {review.comment}</p>
            </div>
        ))}
    </div>
    )
}