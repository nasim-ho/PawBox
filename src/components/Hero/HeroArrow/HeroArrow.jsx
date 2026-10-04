function HeroArrow({ isVisible, arrowRef }) {
    return (
        <svg
            ref={arrowRef}
            className={`hero-arrow ${isVisible ? "is-visible" : ""}`}
            viewBox="0 0 1213 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                {`
                    .hero-arrow .arrow-line,
                    .hero-arrow .arrow-head {
                        stroke: #5C9E4A;
                        stroke-width: 20;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        fill: none;
                        stroke-dasharray: 1;
                        stroke-dashoffset: 1;
                    }

                    .hero-arrow.is-visible .arrow-line {
                        animation: draw-line 1.8s cubic-bezier(.65, 0, .35, 1) forwards;
                    }

                    .hero-arrow.is-visible .arrow-head-left {
                        animation: draw-head 0.35s ease-out 1.8s forwards;
                    }

                    .hero-arrow.is-visible .arrow-head-bottom {
                        animation: draw-head 0.35s ease-out 1.9s forwards;
                    }

                    @keyframes draw-line {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }

                    @keyframes draw-head {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .hero-arrow .arrow-line,
                        .hero-arrow .arrow-head {
                            animation: none;
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>

            <path
                className="arrow-line"
                pathLength="1"
                d="
                    M 1130 258
                    C 1010 165, 830 165, 700 214
                    C 625 242, 598 325, 631 383
                    C 666 444, 752 414, 755 337
                    C 758 275, 724 228, 678 215
                    C 606 194, 520 211, 428 247
                    C 320 289, 205 352, 86 414
                "
            />

            <path
                className="arrow-head arrow-head-left"
                pathLength="1"
                d="M 86 414 L 148 292"
            />

            <path
                className="arrow-head arrow-head-bottom"
                pathLength="1"
                d="M 86 414 L 252 414"
            />
        </svg>
    );
}

export default HeroArrow;