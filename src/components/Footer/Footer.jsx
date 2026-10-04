import './Footer.css';

import Instagram from '../../assets/icons/icons8-instagram-96.png';
import FaceBook from '../../assets/icons/icons8-facebook-96.png';
import Logo from '../../assets/images/logo.png';
import Footprint from '../../assets/images/Footprint.png';

function Footer() {
    return (
        <section className='footer'>

            <div className='container'>
                <img
                    className="footer-footprint"
                    src={Footprint}
                    alt=""
                />

                {/* ---------- Footer Top ---------- */}

                <div className='footer-content'>

                    {/* Logo */}
                    <div className='footer-logo'>
                        <img src={Logo} alt="PawBox Logo" />
                        <p>Everything for happier paws</p>
                    </div>


                    {/* Links */}
                    <div className='footer-links-columns'>

                        <div className='first-columns'>
                            <h2>Shop</h2>
                            <a href="#">Food</a>
                            <a href="#">Treats</a>
                            <a href="#">Toys</a>
                            <a href="#">Essentials</a>
                        </div>


                        <div className='second-columns'>
                            <h2>Company</h2>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Reviews</a>
                            <a href="#">Contact</a>
                        </div>


                        <div className='third-columns'>
                            <h2>Follow Us</h2>

                            <a href="#" className='social-link'>
                                <img src={Instagram} alt="Instagram" />
                                <span>Instagram</span>
                            </a>

                            <a href="#" className='social-link'>
                                <img src={FaceBook} alt="Facebook" />
                                <span>Facebook</span>
                            </a>

                        </div>

                    </div>

                </div>


                {/* ---------- Footer Bottom ---------- */}

                <div className='footer-bottom'>

                    <p>© 2026 PawBox</p>

                    <p>Designed & Developed by Nasim H.</p>

                </div>

            </div>

        </section>
    );
}

export default Footer;