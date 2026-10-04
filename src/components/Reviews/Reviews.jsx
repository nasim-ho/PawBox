// Component
import ReviewsCards from './ReviewsCards/ReviewsCards';

// Images
import ImageCustomer1 from '../../assets/images/customer1.png';
import ImageCustomer2 from '../../assets/images/customer2.png';
import ImageCustomer3 from '../../assets/images/customer3.png';
import ImageCustomer4 from '../../assets/images/customer4.png';
import ImageCustomer5 from '../../assets/images/customer5.png';
import ImageCustomer6 from '../../assets/images/customer6.png';

// Swiper
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Reviews.css';
import { useState } from 'react';

//title animation
import useRevealOnView from "../../hooks/useRevealOnView";

// Customer Array
const ReviewsArray = [
    {
        image: ImageCustomer1,
        name: 'Daniel T.',
        comment: `"I love how fresh and carefully selected everything feels. My cat enjoys every bite, and I’m really happy with the quality and service PawBox provides."`
    },
    {
        image: ImageCustomer2,
        name: 'Emily R.',
        comment: `"Fast delivery, beautiful packaging, and my dog absolutely loves the treats. PawBox has become our favorite pet store."`
    },
    {
        image: ImageCustomer3,
        name: 'Sophia M.',
        comment: `"My Cat gets excited every time I open a PawBox bag. The ingredients are great, and I finally found food he never gets tired of."`
    },
    {
        image: ImageCustomer4,
        name: 'James W.',
        comment: `"PawBox made choosing healthy food so much easier. My dog loves every box we receive, and delivery is always fast."`
    },
    {
        image: ImageCustomer5,
        name: 'Anna P.',
        comment: `"I finally found food my picky cat actually loves! The quality is amazing, delivery is always fast, and he gets excited every time I open a PawBox bag."`
    },
    {
        image: ImageCustomer6,
        name: 'Jack K.',
        comment: `"My rescue dog finally finishes every meal. I couldn't be happier! Healthy ingredients and customer service that's always helpful."`
    }
];

export default () => {

    const titleReveal = useRevealOnView();
    const paragraphReveal = useRevealOnView();


    const [swiper, setSwiper] = useState(null);

    return (
        <section className='reviews-section'>

            <div className='container'>

                <div className='Reviews-content'>
                    <div className='Reviews-title'>
                        <h1
                            ref={titleReveal.elementRef}
                            className={titleReveal.isVisible ? "show" : ""}
                        >Trusted by Pet Parents</h1>

                        <p
                            ref={paragraphReveal.elementRef}
                            className={paragraphReveal.isVisible ? "show" : ""}
                        >Real stories from pet parents whose furry friends love PawBox</p>
                    </div>

                    <div className="reviews-slider">

                        <Swiper
                            className="reviews-swiper"
                            modules={[Autoplay, Pagination]}
                            loop={true}

                            slidesPerView={1}
                            spaceBetween={20}

                            centeredSlides={true}

                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    centeredSlides: false,
                                },

                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centeredSlides: true,
                                },
                            }}

                            speed={900}

                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            pagination={{
                                el: '.reviews-pagination',
                                clickable: true,
                            }}

                            onSwiper={(swiper) => setSwiper(swiper)}
                        >

                            {/*------- Reviews Cards -------*/}

                            {ReviewsArray.map((review, index) => (

                                <SwiperSlide
                                    key={review.name}
                                    onClick={() => swiper?.slideToLoop(index)}
                                >

                                    <ReviewsCards
                                        image={review.image}
                                        name={review.name}
                                        comment={review.comment}
                                    />

                                </SwiperSlide>

                            ))}

                        </Swiper>


                        {/*---------- Prev and Next ----------*/}

                        <div className="reviews-controls">

                            <button
                                className="reviews-prev"
                                type="button"
                                onClick={() => swiper?.slidePrev()}
                            >
                                ←
                            </button>


                            <div className="reviews-pagination"></div>


                            <button
                                className="reviews-next"
                                type="button"
                                onClick={() => swiper?.slideNext()}
                            >
                                →
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};