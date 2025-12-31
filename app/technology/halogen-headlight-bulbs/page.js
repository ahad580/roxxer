"use client";
import { useState } from "react";
export default function HalogenBulbsPage() {
    const [qty, setQty] = useState(1);
    const handleIncrease = () => {
        setQty(prev => prev + 1);
    };
    const handleDecrease = () => {
        setQty(prev => (prev > 1 ? prev - 1 : 1));
    };
    return (
        <>
            <main className="product-page">
                <section className="product-detail">
                    <div className="product-detail-image">
                        <div className="product-detail-image-box">
                            <img src="/halogen.png" alt="Halogen Headlight Bulbs" className="product-detail-img" />
                        </div>
                        <h2 className="quality-heading">Specification  ++</h2>
                        <div className="quality-main">

                            <div className="one-sp">
                                <p className="spec-head">Brightness</p>
                                <p className="spec-para">Up to 1500 lumens,Bright and focused beam pattern</p>
                            </div>

                            <div className="one-sp">
                                <p className="spec-head">Visual</p>
                                <p className="spec-para">Transparent quartz glass tube</p>
                            </div>

                            <div className="one-sp">
                                <p className="spec-head">Common Uses</p>
                                <p className="spec-para">Car headlights (H1, H4, H7 etc.)</p>
                            </div>

                            <div className="one-sp">
                                <p className="spec-head">Brightness</p>
                                <p className="spec-para">Up to 1500 lumens</p>
                            </div>
                        </div>
                    </div>

                    {/* new */}
                    <div className="product-detail-info">
                        <h1 className="product-detail-title">Halogen Headlight Bulbs</h1>

                        <div className="product-detail-rating-row">
                            <span className="product-detail-stars">★★★★★</span>
                            <span className="product-detail-score">4.8</span>
                            <span className="product-detail-reviews">| 8 reviews</span>
                        </div>
                        <p className="product-detail-price">$14.00</p>

                        <div className="product-detail-qty-row">
                            <span className="product-detail-qty-label">Quantity *</span>
                            <div className="product-detail-qty-controls">
                                <button onClick={handleDecrease} className="qty-btn">−</button>
                                <span className="qty-value">{qty}</span>
                                <button onClick={handleIncrease} className="qty-btn">+</button>
                            </div>
                        </div>

                        <div className="product-detail-actions">
                            <button className="btn-outline">Add to Cart</button>
                            <button className="btn-solid">Buy Now</button>
                        </div>

                        <div className="product-detail-section">
                            <h3 className="product-detail-section-title">Product Info</h3>
                            <p className="product-detail-section-text">
                                High-performance halogen bulbs that give you brighter, clearer
                                visibility for safer night driving. Direct replacement for most
                                OEM headlight housings.
                            </p>
                        </div>

                        <div className="product-detail-section">
                            <h3 className="product-detail-section-title">
                                Return and Refund Policy
                            </h3>
                            <p className="product-detail-section-text">
                                Easy 7-day returns on unused items in original packaging. Contact
                                support if you receive a damaged or faulty bulb.
                            </p>
                        </div>
                        <div className="product-detail-section">
                            <h3 className="product-detail-section-title">
                                Description +++
                            </h3>
                            <p className="product-detail-section-text-01">
                                I'm a product detail. I'm a great place to add more information about your product such as sizing,
                                material, care and cleaning instructions. This is also a great space to write what makes this product s
                                pecial and how your customers can benefit from this item. Buyers like to know what they’re getting before
                                they purchase,
                                so give them as much information as possible so they can buy with confidence and certainty.
                            </p>
                        </div>

                        <div className="rating-row">
                            <span className="rating-label">5 stars</span>
                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "70%;" }}></div>
                            </div>
                            <span className="rating-label">(30)</span>
                            <span className="rating-label">5 stars</span>

                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "30%;" }}></div>
                            </div>
                            <span className="rating-label">(10)</span>
                        </div>
                        <div className="rating-row">
                            <span className="rating-label">5 stars</span>
                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "70%;" }}></div>
                            </div>
                            <span className="rating-label">(30)</span>
                        </div>
                    </div>
                </section>
            </main>
            {/* more products */}
            <div className="moreproducts">
                <h2 className="moreproducts-head">You Might Also Like</h2>
            </div>
            {/* start */}
            <div className="relatedpr">
                <div className="related-card">
                    <img src="/90.avif" alt="" className="related-image" />
                    <h2 className="related-title">LED Headlight Bulbs</h2>
                </div>

                <div className="related-card">
                    <img src="/10.avif" alt="" className="related-image" />
                    <h2 className="related-title">LED Headlight Bulbs</h2>
                </div>

                <div className="related-card">
                    <img src="/tyre.avif" alt="" className="related-image" />
                    <h2 className="related-title">LED Headlight Bulbs</h2>
                </div>

                <div className="related-card">
                    <img src="/110.avif" alt="" className="related-image" />
                    <h2 className="related-title">Breaks</h2>
                </div>
            </div>
            {/* cards lmfao */}

            <div className="networking">
                <div className="net-card">
                    <h2 className="net-head">Community​</h2>
                    <p className="net-para">
                        Join a community that grows together, learns together, and wins together.We believe in people first — a community built on respect, trust, and shared success
                    </p>
                </div>
                <div className="net-card">
                    <h2 className="net-head">Networking</h2>
                    <p className="net-para">
                        Join a community that grows together, learns together, and wins together.We believe in people first — a community built on respect, trust, and shared success
                    </p>
                </div>
                <div className="net-card">
                    <h2 className="net-head">Special Events</h2>
                    <p className="net-para">
                        Join a community that grows together, learns together, and wins together.We believe in people first — a community built on respect, trust, and shared success
                    </p>
                </div>
            </div>
            {/* footer last rahhh */}
            {/* <div className="f1line"></div> */}
            <div className="footer-f1-main">
                <img src="/lollol.webp" alt="" className="f1-image" />
                <div className="footer-f1-content">
                    <div className="footer-f1-title-block">
                        <h1 className="footer-title">Explore Status</h1>
                        <p className="footer-subtext">
                            Build meaningful partnerships and stay connected with innovators, creators,
                            and the future of technology. We bring together teams, brands, and ideas that
                            push boundaries.
                        </p>
                    </div>
                    <div className="footer-f1-grid">
                        <div className="footer-f1-col">
                            <h3>Explore</h3>
                            <p>Work with Us</p>
                            <p>Partnerships</p>

                        </div>
                        <div className="footer-f1-col">
                            <h3>Reach Out</h3>
                            <p>Contact Support</p>
                            <p>Business Inquiries</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
