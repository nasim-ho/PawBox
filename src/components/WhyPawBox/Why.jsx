import "./Why.css";
import { useEffect, useRef, useState } from "react";

import dog from "../../assets/images/WhyPet-pic.webp";
import HeartDog from "../../assets/images/heart.png"

import organic from "../../assets/icons/icons8-organic-food-100.png";
import meat from "../../assets/icons/icons8-meat-100.png";
import medical from "../../assets/icons/icons8-medical-protection-96.png";
import heart from "../../assets/icons/heart-dog-paw.png";

import HeartAnimation from "./HeartAnimation/HeartAnimation";

import useRevealOnView from "../../hooks/useRevealOnView";

function Why() {

    const titleReveal = useRevealOnView();
    const paragraphReveal = useRevealOnView();
    const Whyfeature1Reveal = useRevealOnView();
    const Whyfeature2Reveal = useRevealOnView();
    const Whyfeature3Reveal = useRevealOnView();
    const Whyfeature4Reveal = useRevealOnView();

    {/*----------------Heart Animation-------------- */ }
    const heartRef = useRef(null);
    const [heartVisible, setHeartVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHeartVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        if (heartRef.current) {
            observer.observe(heartRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (

        <section className="Why-section">

            <div className="container">

                <div className="whypawbox-content">

                    <div className="Why-txt">

                        <h1
                            ref={titleReveal.elementRef}
                            className={titleReveal.isVisible ? "show" : ""}
                        >
                            Why Pet Parents Love PawBox?
                        </h1>
                        <p
                            ref={paragraphReveal.elementRef}
                            className={paragraphReveal.isVisible ? "show" : ""}
                        >
                            More than a pet store! We're your pet's partner for a healthier, happier life.
                        </p>

                    </div>


                    <div className="Why-features">

                        <div className="Why-img-and-list">


                            {/* ----- Left Features ----- */}

                            <div className="left-list">

                                <div 
                                    ref={Whyfeature1Reveal.elementRef}
                                    className={`Why-feature-1 ${Whyfeature1Reveal.isVisible ? "show" : ""}`}
                                >

                                    <img
                                        src={organic}
                                        alt=""
                                    />

                                    <div>
                                        <h2>Premium Ingredients</h2>

                                        <p>
                                            Carefully selected for your pet
                                        </p>
                                    </div>

                                </div>


                                <div 
                                    ref={Whyfeature4Reveal.elementRef}
                                    className={`Why-feature-4 ${Whyfeature4Reveal.isVisible ? "show" : ""}`}>

                                    <img
                                        src={heart}
                                        alt=""
                                    />

                                    <div>
                                        <h2>Loved by Pets</h2>

                                        <p>
                                            Made for happy moments
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* ----- Dog ----- */}

                            <div className="Why-dog-image">

                                <img src={dog} className="dog" alt="Why PawBox" />
                                <div className="heartdog">
                                    <HeartAnimation
                                        heartRef={heartRef}
                                        isVisible={heartVisible} />
                                </div>

                            </div>


                            {/* ----- Right Features ----- */}

                            <div className="right-list">

                                <div 
                                    ref={Whyfeature2Reveal.elementRef}
                                    className={`Why-feature-2 ${Whyfeature2Reveal.isVisible ? "show" : ""}`}
                                >
                                    <img
                                        src={meat}
                                        alt=""
                                    />
                                    <div>
                                        <h2>High Protein Recipes</h2>

                                        <p>
                                            Nutritious meals they love
                                        </p>
                                    </div>



                                </div>


                                <div 
                                    ref={Whyfeature3Reveal.elementRef}
                                    className={`Why-feature-3 ${Whyfeature3Reveal.isVisible ? "show" : ""}`}
                                >
                                    <img
                                        src={medical}
                                        alt=""
                                    />
                                    <div>
                                        <h2>Vet Approved Nutrition</h2>

                                        <p>
                                            Balanced nutrition for every pet
                                        </p>
                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Why;