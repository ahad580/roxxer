"use client";
import { useEffect } from "react";
export default function PreBookingPage() {
    useEffect(() => {
        function handleScroll() {
            const textDivs = document.querySelectorAll(".textDiv");
            const viewportHeight = window.innerHeight;
            const quarterHeight = viewportHeight / 4;
            const centerY = window.scrollY + viewportHeight / 2;

            textDivs.forEach((div) => {
                const rect = div.getBoundingClientRect();
                const divCenterY = rect.top + rect.height / 2;

                const distanceFromCenter = Math.abs(
                    divCenterY - viewportHeight / 2
                );

                let opacity;
                let weight;
                let size;

                if (divCenterY < quarterHeight) {
                    opacity = divCenterY / quarterHeight;
                } else if (divCenterY > viewportHeight - quarterHeight) {
                    opacity = (viewportHeight - divCenterY) / quarterHeight;
                    weight = (viewportHeight - divCenterY) / quarterHeight;
                } else {
                    opacity = 1;
                    weight = 100;
                }

                opacity = Math.max(0, Math.min(1, opacity));
                weight = opacity * 900;
                size = opacity + 3;

                div.style.opacity = opacity;
                div.style.fontWeight = weight;
                div.style.fontSize = size + "vw";
            });
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="prebooking-heading">
                <div className="prebooking-heading-content">
                    <h1>Join Our Premium Club</h1>
                    <p>For people who love cars</p>
                </div>
            </div>

            <section className="prebooking-signup">
                <div className="prebooking-signup-inner">
                    <div className="prebooking-signup-copy">
                        <h2>
                            Sign up today and get
                            <br />
                            exclusive club member
                            <br />
                            benefits
                        </h2>
                        <p>
                            Our premium membership will give you exclusive access to our
                            early-bird sales, new arrivals and other special offers.
                        </p>
                    </div>

                    <form className="prebooking-signup-form">
                        <div className="signup-field">
                            <label>
                                First Name<span>*</span>
                            </label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="signup-field">
                            <label>
                                Last Name<span>*</span>
                            </label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="signup-field">
                            <label>
                                Email<span>*</span>
                            </label>
                            <input type="email" placeholder="" />
                        </div>
                        <div className="signup-field">
                            <label>Phone</label>
                            <input type="tel" placeholder="" />
                        </div>
                        <div className="signup-checkbox-row">
                            <input id="newsletter-check" type="checkbox" />
                            <label htmlFor="newsletter-check">
                                Yes, subscribe me to your newsletter.
                            </label>
                        </div>
                        <button type="submit" className="signup-submit-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* wrapperwraplol */}
            <div className="wrapper-lol">
                <div className="textDiv">Roxxer runs multiple cities with passion</div>
                <div className="textDiv">Powering cities worldwide.</div>
                <div className="textDiv">appreciation in different ways.</div>
                <br />
                <br />
                <div className="textDiv">Global operations. Local commitment.</div>
                <div className="textDiv">Roxxer teams create magic on every project.</div>
                <div className="textDiv">to tYour ideas deserve a real home</div>
                <div className="textDiv">make something wonderful and</div>
                <div className="textDiv">put it out there.</div>
                <br />
                <br />
                <div className="textDiv">And you never meet the people.</div>
                <div className="textDiv">You never shake their hands.</div>
                <div className="textDiv">You never hear their story or tell yours.</div>
                <div className="textDiv">But somehow, in the act of making</div>
                <div className="textDiv">something with a great deal of care</div>
                <div className="textDiv">
                    and love, something’s transmitted there.
                </div>
                <br />
                <br />
                <div className="textDiv">
                    And it’s a way of expressing to the rest
                </div>
                <div className="textDiv">of our species our deep appreciation.</div>
                <div className="textDiv">
                    So we need to be true to who we are and
                </div>
                <div className="textDiv">
                    remember what’s really important to us.
                </div>
                <br />
                <br />
                <div className="textDiv">ROXXER, 1989</div>
            </div>


            {/* footerlool */}
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
                {/* <div classnam="footer-col">
                    <h4>Follow Us</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Twitter</p>
                </div> */}
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
        </>
    );
}
