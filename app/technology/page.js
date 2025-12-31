import Link from "next/link";
export default function TechnologyPage() {
  return (
    <>
      <div className="products-page-container">
        <div className="filter-box">
          <h3 className="filter-title">Browse by</h3>

          <ul className="filter-list">
            <li><a className="active">All Products</a></li>
            <li><a>Accessories</a></li>
            <li><a>Best Seller</a></li>
            <li><a>Engine</a></li>
            <li><a>Vehicle Body Parts</a></li>
            <li><a>Wheels & Rims</a></li>
            <li><a>Wholesale</a></li>
          </ul>
        </div>


        <div className="products-content">
          <h1 className="technologymainheading">All Products</h1>
          <p className="products-count">24 products</p>

          <div className="allcards-tech">
            {/* slug-01 */}
            <Link href="/technology/halogen-headlight-bulbs" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="halogen headlight bulbs" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">halogen headlight bulbs.</p>
              <p className="price-tech">14$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>5.0</strong>
                (4)
              </p>
            </Link>

            <Link href="/technology/handle" className="card-01">
              <div className="card-img-wrap">
                <img src="./handle.avif" alt="Handle" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Handle</p>
              <p className="price-tech">200$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>5.0</strong>
                (4)
              </p>
            </Link>
            <Link href="/technology/gps" className="card-01">
              <div className="card-img-wrap">
                <img src="./2.avif" alt="GPS Tracker" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">GPS Tracker</p>
              <p className="price-tech">100$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.9</strong>
                (12)
              </p>
            </Link>
            <Link href="/technology/steering-wheel-cover" className="card-01">
              <div className="card-img-wrap">
                <img src="./3.avif" alt="Steering Wheel Cover" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Steering Wheel Cover</p>
              <p className="price-tech">99$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>5.0</strong>
                (4)
              </p>
            </Link>
            <Link href="/technology/brake-pads" className="card-01">
              <div className="card-img-wrap">
                <img src="./4.avif" alt="Brake Pads" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Brake Pads</p>
              <p className="price-tech">80$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.7</strong>
                (10)
              </p>
            </Link>
            <Link href="/technology/led-headlight-bulbs" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="LED Headlight Bulbs" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">LED Headlight Bulbs</p>
              <p className="price-tech">14$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.8</strong>
                (8)
              </p>
            </Link>
            <Link href="/technology/wheel-rim" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Wheel Rim" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Wheel Rim</p>
              <p className="price-tech">149$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.6</strong>
                (6)
              </p>
            </Link>
            <Link href="/technology/car-battery" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Car Battery" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Car Battery</p>
              <p className="price-tech">120$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.5</strong>
                (22)
              </p>
            </Link>
            <Link href="/technology/air-filter" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Air Filter" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Air Filter</p>
              <p className="price-tech">25$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.6</strong>
                (9)
              </p>
            </Link>
            <Link href="/technology/spark-plug" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Spark Plugs" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Spark Plugs</p>
              <p className="price-tech">30$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.7</strong>
                (16)
              </p>
            </Link>
            <Link href="/technology/rear-view-mirror" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Rear View Mirror" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Rear View Mirror</p>
              <p className="price-tech">45$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.5</strong>
                (7)
              </p>
            </Link>
            <Link href="/technology/wiper-blades" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Wiper Blades" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Wiper Blades</p>
              <p className="price-tech">35$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.8</strong>
                (11)
              </p>
            </Link>
            <Link href="/technology/seat-cover" className="card-01">
              <div className="card-img-wrap">
                <img src="./img1.jpeg" alt="Seat Cover" className="tech-img" />
                <button className="add-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Seat Cover</p>
              <p className="price-tech">89$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.9</strong>
                (14)
              </p>
            </Link>
            <Link href="/technology/floor-mats" className="card-01">
              <div className="card-img-wrap glass">
                <img src="./img1.jpeg" alt="Floor Mats" className="tech-img" />
                <button className="glass-btn">Add to Cart</button>
              </div>
              <p className="h2-tech">Floor Mats</p>
              <p className="price-tech">60$</p>
              <p className="stars-rating">
                ⭐⭐⭐⭐
                <strong>4.8</strong>
                (9)
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* type */}
      <div className="new-marquee-wrapper">
        <div className="new-marquee">
          <div className="new-marquee-track">
            <p className="new-marquee-text">
              Powering your drive with premium parts built for performance • Experience a smoother ride with components built to last.
            </p>
            <p className="new-marquee-text">
              Powering your drive with premium parts built for performance • Experience a smoother ride with components built to last.
            </p>
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
        {/* <div classna="footer-col">
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
