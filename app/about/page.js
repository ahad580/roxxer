export default function AboutPage() {   
    return (
        <>
         <main className="about-page">
            <div className="car-showcase">
                <div className="car-showcase-image">
                    <img src="./bmw0.png" alt="" className="showcase-img" />
                    <img src="./lol.png" alt="" className="showcase-img-2" />
                </div>
            </div>
            {/* ol */}
            <div className="gooey-container">
                <div className="gooey-marquee">
                    <div className="gooey-blur">
                        <div className="gooey-track">
                            <p className="gooey-text">ROXXER brings you premium automotive parts for every journey.</p>
                            <p className="gooey-text">ROXXER brings you premium automotive parts for every journey.</p>
                        </div>
                    </div>

                    <div className="gooey-clear">
                        <div className="gooey-track">
                            <p className="gooey-text">ROXXER brings you premium automotive parts for every journey.</p>
                            <p className="gooey-text">ROXXER brings you premium automotive parts for every journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vision-section">

                <div className="vision-left">
                    <div className="vision-line"></div>

                    <div className="vision-text">
                         <h4 className="vision-subtitle">Vision</h4>
                        <h1 className="vision-title">
                            We're Changing The <br />
                            Way The World Thinks <br />
                            About Cars.
                        </h1>
                        <p className="vision-para">
                            <strong> Rolls-Royce La Rose Noire Droptail</strong> The Droptail was unveiled in 2023 and is one of the most expensive new cars in the world, with an estimated price exceeding $30 million.The design is inspired by the Black Baccara rose, featuring a deep red exterior finish made up of five layers of clear lacquer over a secret base coat.
                        </p>
                    </div>
                </div>

                <div className="vision-right" style={{ alignItems: 'center', gap: '24px' }}>
                    <img src="./rr11.png" alt="" className='vision-img' />
                </div>
            </div >

            <div className="services-section">
                <div className="services-left">
                    <div className="services-line"></div>

                    <div className="services-text">
                        <h4 className="services-subtitle">SERVICES</h4>

                        <h1 className="services-title">
                            We Deliver Exceptional <br />
                            Products and Services <br />
                            Around the World
                        </h1>
                    </div>
                </div>
            </div>

            <div className="center-heading">
                <h2 className="animated-heading">LUXURY <br />PERFORMANCE</h2>
            </div>

            <div className="cars-wrapper">
                <img src="./bug.png" className="car1" />
                <img src="./mclaren.png" className="car2" />
                <img src="./pagani.png" className="car3" />
            </div>
            <div className="specture-main">
                {/* <img className="specture" src="./spect.png" alt="" /> */}
                <div className="specture-text">
                    <h1 className="specture-head">ROXXER</h1>
                    <h2 className="head2">WE CUSTOMIZE EVERY INCH OF METAL</h2>
                </div>
            </div>

            <div className="cars-wrapper-2">
                <img src="./ferr.png" className="car4" />
                <img src="./ferr1.png" className="car5" />
                <img src="./ferr6.png" className="car6" />
            </div>
            <div className="ferr-heading">
                <h1 className="ferr-h">
                    Unmatched Presence. <br />Unparalleled Performance.
                </h1>
            </div>
            <div className="last-rox-image">
                <img src="./rox1.png" alt="" className="last-roxxer" />
            </div>
            {/* brands we trust */}
            
            <div className="brand-head">
                <h1 className="brand-h">
                    Brands We Trust.
                </h1>
            </div>
            <div className="brand-trust-logos">
                <img className="brand-t-lgs" src="./mishi.png" alt="" />
                <img className="brand-t-lgs" src="./br.png" alt="" />
                <img className="brand-t-lgs" src="./akr.png" alt="" />
            </div>
            <div className="brand-trust-logos-2">
                <img className="brand-t-lgs-1" src="./mer.png" alt="" />
                <img className="brand-t-lgs-2" src="./bmww.png" alt="" />
                <img className="brand-t-lgs-3" src="./bbs.png" alt="" />
                  <img className="brand-t-lgs-3" src="./pgnpgn.webp" alt="" />
            </div>
            {/* brand */}

            <div className="stats-title">
                Roxxer In <br />Numbers
            </div>

            <div className="stats-section">
                <div className="stats-image">
                    <img src="./st.png" alt="" />
                </div>
                <div className="stats-grid">
                    <div className="stat-box">
                        <h2>200</h2>
                        <div className="line"></div>
                        <p>EMPLOYEES</p>
                    </div>
                    <div className="stat-box">
                        <h2>32</h2>
                        <div className="line"></div>
                        <p>CORE TEAMS</p>
                    </div>
                    <div className="stat-box">
                        <h2>350M$</h2>
                        <div className="line"></div>
                        <p>CAPITAL</p>
                    </div>
                    <div className="stat-box">
                        <h2>452</h2>
                        <div className="line"></div>
                        <p>PARTNERS</p>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <div className="footer-brand">
                    <img src="./roxfn2.png" className="footer-logo-brand" />
                </div>

                <div className="footer-col">
                    <h4>Shop</h4>
                    <p>Shop Parts</p>
                    <p>Wheels & Rims</p>
                    <p>Engine</p>
                    <p>Vehicle Body Parts</p>
                    <p>Accessories</p>
                    <p>Wholesale</p>
                </div>
                <div className="footer-col">
                    <h4>The Company</h4>
                    <p>About Us</p>
                    <p>Reviews</p>
                    <p>Premium Area</p>
                    <p>FAQ</p>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>info@mysite.com</p>
                    <p>500 Terry Francine St.</p>
                    <p>San Francisco,</p>
                    <p>CA 94158</p>
                    <p>Tel: 123-456-7890</p>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="last-side-footer"></div>
            <div className="footer-middle">
                <div className="footer-divider"></div>

                <div className="footer-links">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Shipping Policy</a>
                    <a href="#">Refund Policy</a>
                    <a href="#" className="cookie-policy">Cookie Policy</a>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-payments">
                    <p>Payment Methods</p>

                    <div className="payment-icons">
                        <img src="./master.png" />
                        <img src="./union.png" />
                    </div>
                </div>
            </div>
            </main>
        </>
    );
}
