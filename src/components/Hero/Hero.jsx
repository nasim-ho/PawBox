import { useEffect, useRef, useState } from "react";
import ShopIcon from "../../assets/icons/icons8-pet-food-96.png";
import HeroCat from "../../assets/images/cat-hero.webp";
import "./Hero.css";
import useCountUp from "./CountUp/useCountUp"
import HeroArrow from "./HeroArrow/HeroArrow"

import useRevealOnView from "../../hooks/useRevealOnView";

function Hero() {

    const btnReveal = useRevealOnView();

    {/*----------------Products Animation-------------- */ }
    const products = useCountUp(200);
    const parents = useCountUp(15000);
    const satisfaction = useCountUp(98);

    {/*----------------Arrow Animation-------------- */ }
    const arrowRef = useRef(null);
    const [arrowVisible, setArrowVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setArrowVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        if (arrowRef.current) {
            observer.observe(arrowRef.current);
        }

        return () => observer.disconnect();
    }, []);




    return (
        <section className="Hero-section">
            <div className="container">
                <div className="hero-content">
                    {/*-----Hero Text-----*/}
                    <h1 className="hero-title">
                        Smells Like<br />Happiness!
                    </h1>
                    <p className="hero-description">
                        Premium food, healthier lives and happier paws
                    </p>

                    {/*-----Hero Buttons-----*/}
                    <div className="hero-btns">
                        <div
                            ref={btnReveal.elementRef}
                            className={`hero-btn-shopnow-wrapper ${btnReveal.isVisible ? "show" : ""
                                }`}
                        >
                            <button className="hero-btn-shopnow">
                                Shop Now <img src={ShopIcon} alt="Shop Now Icon" />
                            </button>
                        </div>
                        
                        <button className="hero-btn-foodmenu">
                            <span>Food Menu</span>
                            <span className="foodmenu-arrow">→</span>
                        </button>
                    </div>
                    {/*-----stats-----*/}
                    <div className="hero-stats">
                        <div className="stat-1">
                            <h2>{products}+</h2>
                            <p>Premium Products</p>
                        </div>

                        <div className="stat-2">
                            <h2>{parents >= 15000
                                ? "15K+"
                                : `${(parents / 1000).toFixed(1)}K+`
                            }</h2>
                            <p>Happy Pet Parents</p>
                        </div>

                        <div className="stat-3">
                            <h2>{satisfaction}%</h2>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
                {/*-----images-----*/}
                <div className="hero-image">
                    <img className="hero-cat" src={HeroCat} alt="Hero Image" />
                    <HeroArrow
                        arrowRef={arrowRef}
                        isVisible={arrowVisible}
                    />
                </div>
            </div>
        </section>
    );
}
export default Hero;