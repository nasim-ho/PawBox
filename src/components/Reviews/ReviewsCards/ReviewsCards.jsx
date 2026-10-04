import './ReviewsCards.css';
import quote from '../../../assets/icons/icons8-quote-left-96.png';

function ReviewsCards({ image , name , comment , active , position  }) {
    return(
        <div className={`reviews-card ${position}`}>
            <img className="reviews-card-image" src={image} alt='image of customer' />
            <div className="reviews-rating">★★★★★</div>

            <p className="reviews-comment">{comment}</p>
            <h3 className="reviews-name">{name}</h3>
            <img className='quote-icon' src={quote} alt="quote" />

        </div>
    )
}
export default ReviewsCards;