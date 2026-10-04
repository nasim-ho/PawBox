function HeartAnimation({ heartRef, isVisible }) {
    return (
        <svg
            ref={heartRef}
            className={`heart-animation ${isVisible ? "is-visible" : ""}`}
            viewBox="0 0 680 690"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                {`
                    .heart-animation .heart-path {
                        fill: none;
                        stroke: #5C9E4A;
                        stroke-width: 22;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-dasharray: 1;
                        stroke-dashoffset: 1;
                    }

                    .heart-animation.is-visible .heart-path {
                        animation: draw-heart 1.8s cubic-bezier(.65, 0, .35, 1) forwards;
                    }

                    @keyframes draw-heart {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .heart-animation .heart-path {
                            animation: none;
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>

            {/* One continuous path: starts at the lower tip, goes around the left side,
                crosses the top notch, then follows the right side and ends at the short lower tip. */}
            <path
                className="heart-path"
                pathLength="1"
                d="
                    M 512 643
                    C 513 640, 506 631, 487 617
                    C 432 578, 356 543, 281 504
                    C 210 467, 136 438, 85 392
                    C 43 354, 18 306, 42 266
                    C 70 220, 145 192, 218 194
                    C 278 196, 324 221, 357 260
                    C 352 222, 365 167, 401 108
                    C 431 58, 480 36, 535 45
                    C 585 53, 615 84, 620 124
                    C 628 188, 592 265, 548 337
                    C 518 386, 486 431, 458 486
                "
            />
        </svg>
    );
}

export default HeartAnimation;
