import { useEffect, useState } from "react";

import "./ScrollToTop.css";

function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (
        <button
            className={`scroll-to-top ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}

export default ScrollToTop;