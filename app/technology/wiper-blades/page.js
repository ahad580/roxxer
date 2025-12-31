"use client";
import { useState } from "react";
export default function WiperBladesPage(){
  const [qty, setQty] = useState(1);
  const inc = ()=> setQty(p=>p+1);
  const dec = ()=> setQty(p=> p>1? p-1:1);
  return (
    <>
      <main className="product-page">
        <section className="product-detail">
          <div className="product-detail-image">
            <div className="product-detail-image-box">
              <img src="/tyre.avif" alt="Wiper Blades" className="product-detail-img" />
            </div>
            <h2 className="quality-heading">Specification  ++</h2>
            <div className="quality-main">
              <div className="one-sp"><p className="spec-head">Type</p><p className="spec-para">Beam / Conventional</p></div>
              <div className="one-sp"><p className="spec-head">Size</p><p className="spec-para">Multiple sizes</p></div>
              <div className="one-sp"><p className="spec-head">Performance</p><p className="spec-para">Quiet, streak-free cleaning</p></div>
              <div className="one-sp"><p className="spec-head">Warranty</p><p className="spec-para">3 months</p></div>
            </div>
          </div>

          <div className="product-detail-info">
            <h1 className="product-detail-title">Wiper Blades</h1>
            <div className="product-detail-rating-row">
              <span className="product-detail-stars">★★★★★</span>
              <span className="product-detail-score">4.8</span>
              <span className="product-detail-reviews">| 11 reviews</span>
            </div>
            <p className="product-detail-price">$35.00</p>

            <div className="product-detail-qty-row">
              <span className="product-detail-qty-label">Quantity *</span>
              <div className="product-detail-qty-controls">
                <button onClick={dec} className="qty-btn">−</button>
                <span className="qty-value">{qty}</span>
                <button onClick={inc} className="qty-btn">+</button>
              </div>
            </div>

            <div className="product-detail-actions">
              <button className="btn-outline">Add to Cart</button>
              <button className="btn-solid">Buy Now</button>
            </div>

            <div className="product-detail-section">
              <h3 className="product-detail-section-title">Product Info</h3>
              <p className="product-detail-section-text">Durable wiper blades for clean visibility in wet conditions.</p>
            </div>

            <div className="product-detail-section">
              <h3 className="product-detail-section-title">Return and Refund Policy</h3>
              <p className="product-detail-section-text">7-day returns on unused items in original packaging.</p>
            </div>

            <div className="product-detail-section">
              <h3 className="product-detail-section-title">Description +++</h3>
              <p className="product-detail-section-text-01">High performance wiper blades that clear water quickly and quietly.</p>
            </div>

                        <div className="rating-row">
                            <span className="rating-label">5 stars</span>
                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "70%" }}></div>
                            </div>
                            <span className="rating-label">(30)</span>
                            <span className="rating-label">5 stars</span>

                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "30%" }}></div>
                            </div>
                            <span className="rating-label">(10)</span>
                        </div>
                        <div className="rating-row">
                            <span className="rating-label">5 stars</span>
                            <div className="rating-bar">
                                <div className="rating-bar-fill" style={{ width: "70%" }}></div>
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