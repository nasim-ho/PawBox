import { useEffect, useState } from "react";

import "./Header.css";

import Navbar from "./Navbar/Navbar";

import logo from "../../assets/images/logo.png";

import SigninIcon from "../../assets/icons/sign-in-icon.png";

import SignIconHover from "../../assets/icons/sign-in-icon-hover.png";


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth > 767) {
                setIsMenuOpen(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    return (

        <header>

            <div className="container header-wrapper">

                <img
                    className="logo"
                    src={logo}
                    alt="PawBox Logo"
                />


                <div className="header-right">

                    <Navbar />

                    <button className="sign-in-btn">

                        <span>Sign in</span>

                        <span className="sign-in-icon-wrapper">

                            <img
                                src={SigninIcon}
                                className="sign-in-icon sign-in-icon-default"
                                alt="Signin Icon"
                            />

                            <img
                                src={SignIconHover}
                                className="sign-in-icon sign-in-icon-hover"
                                alt="Signin Icon Hover"
                            />

                        </span>

                    </button>

                </div>


                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "close menu" : "Open menu"}
                >

                    {isMenuOpen ? (

                        <svg
                            viewBox="0 0 50 50"
                            aria-hidden="true"
                        >

                            <path
                                d="M10 10L40 40M40 10L10 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                        </svg>

                    ) : (

                        <svg
                            viewBox="0 0 50 50"
                            aria-hidden="true"
                        >

                            <path
                                d="M5 8h40M5 23h40M5 38h40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                        </svg>

                    )}

                </button>


                {/* ---------- Mobile Menu ---------- */}

                {isMenuOpen && (

                    <div className="mobile-menu">

                        <Navbar />


                        <button className="sign-in-btn">

                            <span>Sign in</span>

                            <span className="sign-in-icon-wrapper">

                                <img
                                    src={SigninIcon}
                                    className="sign-in-icon sign-in-icon-default"
                                    alt="Signin Icon"
                                />

                                <img
                                    src={SignIconHover}
                                    className="sign-in-icon sign-in-icon-hover"
                                    alt="Signin Icon Hover"
                                />

                            </span>

                        </button>

                    </div>

                )}

            </div>

        </header>

    );
}

export default Header;