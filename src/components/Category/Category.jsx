import "./Category.css";
import premiumfood from '../../assets/images/premiumfood.png'
import treats from '../../assets/images/treats&snacks.png'
import toys from '../../assets/images/toys.png'
import essential from '../../assets/images/essential.png'
import FootPrintDog from '../../assets/images/Footprint-dog.png';
import FootPrintCat from '../../assets/images/Footprint-cat.png';

import useRevealOnView from "../../hooks/useRevealOnView";

function Category() {

    const titleReveal = useRevealOnView();
    const paragraphReveal = useRevealOnView();
    const FootPrintDogReveal = useRevealOnView();
    const FootPrintCatReveal = useRevealOnView();

    const CategoryProduct1Reveal = useRevealOnView();
    const CategoryProduct2Reveal = useRevealOnView();
    const CategoryProduct3Reveal = useRevealOnView();
    const CategoryProduct4Reveal = useRevealOnView();

    return (
        <section className="Category-section">
            <div className="container Category-container">
                {/*-----Category Text-----*/}
                <div className="Category-content">
                    <h1
                        ref={titleReveal.elementRef}
                        className={titleReveal.isVisible ? "show" : ""}
                    >Everything They Need</h1>
                    <p
                        ref={paragraphReveal.elementRef}
                        className={paragraphReveal.isVisible ? "show" : ""}
                    >From food to daily essentials, all in one place</p>
                </div>
                {/*-----FootPrint-----*/}

                <img src={FootPrintDog}
                    ref={FootPrintDogReveal.elementRef}
                    className={`FootPrintDog ${FootPrintDogReveal.isVisible ? "show" : ""}`}
                    alt="FootPrintDog" />
                <img src={FootPrintCat}
                    ref={FootPrintCatReveal.elementRef}
                    className={`FootPrintCat ${FootPrintCatReveal.isVisible ? "show" : ""}`}
                    alt="FootPrintCat" />

                {/*-----Product categories-----*/}
                <div className="Category-Product">
                    <div className="Category-Product-1"
                        ref={CategoryProduct1Reveal.elementRef}
                        className={`Category-Product-1 ${CategoryProduct1Reveal.isVisible ? "show" : ""}`}
                    >
                        <span className="category-glow"></span>
                        <img src={premiumfood} alt="premium food" />
                        <h1>Food</h1>
                    </div>

                    <span className="divider"></span>

                    <div className="Category-Product-2"
                        ref={CategoryProduct2Reveal.elementRef}
                        className={`Category-Product-2 ${CategoryProduct2Reveal.isVisible ? "show" : ""}`}
                    >
                        <span className="category-glow"></span>
                        <img src={treats} alt="treats & snacks" />
                        <h1>Treats</h1>
                    </div>

                    <span class="divider"></span>

                    <div className="Category-Product-3"
                        ref={CategoryProduct3Reveal.elementRef}
                        className={`Category-Product-3 ${CategoryProduct3Reveal.isVisible ? "show" : ""}`}
                    >
                        <span className="category-glow"></span>
                        <img src={toys} alt="premium food" />
                        <h1>Toys</h1>
                    </div>

                    <span class="divider"></span>

                    <div className="Category-Product-4"
                        ref={CategoryProduct4Reveal.elementRef}
                        className={`Category-Product-4 ${CategoryProduct4Reveal.isVisible ? "show" : ""}`}
                    >
                        <span className="category-glow"></span>
                        <img src={essential} alt="premium food" />
                        <h1>Essential</h1>
                    </div>


                </div>

            </div>
        </section>
    )
}
export default Category;