import './ProductCard.css';
import shopping from '../../../assets/icons/icons8-add-shopping-cart-96.png';

import useRevealOnView from "../../../hooks/useRevealOnView";

function ProductCard({ name, image, rating, price }) {

    const ButtonReveal = useRevealOnView();

    return (
        <div className="product-card">
            <img className="product-card-image" src={image} alt={name} />
            <h3>{name}</h3>

            <div className="product-rating">
                ★★★★★
                <span>{rating}</span>
            </div>

            <p className="product-price">{price}</p>

            <div
                ref={ButtonReveal.elementRef}
                className={`add-to-cart-wrapper ${ButtonReveal.isVisible ? "show" : ""
                    }`}
            >
                <button className="add-to-cart-btn">
                    Add to Cart
                    <img src={shopping} alt="" />
                </button>
            </div>
        </div>
    )
}
export default ProductCard;