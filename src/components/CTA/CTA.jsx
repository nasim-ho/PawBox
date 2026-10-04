import './CTA.css';
import catdog from '../../assets/images/CTA-pic.png'
import sparkleBig from "../../assets/images/sparkleBig.png";
import sparkleSmall from "../../assets/images/sparkleSmall.png";
import useRevealOnView from "../../hooks/useRevealOnView";

function CTA() {
    const titleReveal = useRevealOnView();
    const paragraphReveal = useRevealOnView();
    const btnReveal = useRevealOnView();

    return (
        <section className='CTA'>
            <div className='container'>
                <div className='CTA-content'>
                    <div className='CTA-pic'>
                        <img src={catdog} className='catdog' alt="cat and dog" />

                        <img src={sparkleBig} className='sparkleBig' alt="sparkle" />
                        <img src={sparkleSmall} className='sparkleSmall' alt="sparkle" />

                    </div>
                    <div className='CTA-txt'>
                        <h1
                            ref={titleReveal.elementRef}
                            className={titleReveal.isVisible ? "show" : ""}
                        >
                            What's Your Pet's
                            <br />Next Favorite?</h1>
                        <p
                            ref={paragraphReveal.elementRef}
                            className={paragraphReveal.isVisible ? "show" : ""}
                        >Discover carefully selected food, treats, toys,
                            and everyday essentials your furry friend will truly love.
                            Everything they need for happier, healthier days.</p>

                        <div className='CTA-btns'>
                            <div
                                ref={btnReveal.elementRef}
                                className={`btn-Explore-wrapper ${btnReveal.isVisible ? "show" : ""
                                    }`}
                            >
                                <button className="btn-Explore">
                                    Explore Products
                                </button>
                            </div>
                            <button className='btn-Browse'>
                                <span>Browse Categories</span>
                                <span className='btn-Browse-arrow'>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTA;