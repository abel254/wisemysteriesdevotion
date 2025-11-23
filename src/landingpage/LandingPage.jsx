import React, { useState } from "react";
import "./landingpage.css";
import DevotionForm from "./devotional form/DevotionForm";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="devotion-lp">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Why is God letting me go through this?</h1>
          <p className="sub-heading">
            Discover the hidden biblical patterns of how God uses wilderness,
            crisis, and trials to prepare you for your destiny.
          </p>
          <h4 className="free-chapter">
            Get your FREE Chapter from:{" "}
            <i>The Hidden Path To Divine Promotion</i>
          </h4>
          <button className="devotion-button" onClick={() => setShowForm(true)}>
            GET THE FREE CHAPTER - WISE MYSTERIES
          </button>
        </div>

        <div className="hero-container">
          <div className="left"></div>
          <div className="right">
            <img src="35.webp" alt="heavenly battle" />
          </div>
        </div>
      </section>

      <section className="ebook-section">
        <div className="ebook-left">
          <div className="ebook-content">
            <h3>THE HIDDEN PATH TO DIVINE PROMOTION</h3>
            <p>
              <strong>The Hidden Path to Divine Promotion</strong> is a
              powerful, revelation-filled guide that uncovers the spiritual
              process God uses to prepare His chosen ones for elevation. Through
              deep biblical insight, cinematic storytelling, and practical
              reflection exercises, this ebook will help you finally understand
              the why behind your pain, waiting, and battles — and how God is
              strategically using them to position you for your breakthrough.
            </p>

            <p>
              <strong>
                This is your roadmap out of confusion, frustration, and
                spiritual exhaustion — into clarity, courage, and destiny.
              </strong>{" "}
              <br />
              Your pain has purpose. Your delay has design. Your story is about
              to make sense.
            </p>
            <p>
              <strong>
                If you’re ready to understand your journey, embrace your
                process, and finally step into the divine promotion God prepared
                for you — get your copy now.
              </strong>
            </p>

            <p className="offer-price">$10.00</p>
            <p className="old-price">
              <del>$25.00</del>
            </p>

            <div className="button-wrapper">
              <a
                href="https://payhip.com/b/bmOev"
                target="_blank"
                rel="noreferrer"
                className="ebook-link"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className="ebook-right">
          <img src="book.webp" alt="heavenly battle" />
        </div>
      </section>

      <section className="reminder-section">
        <h4 className="reminder-heading">Don’t Miss This Free Chapter</h4>
        <p>
          Your struggle isn’t the end — it’s the preparation. Discover the
          mystery inside your wilderness.
        </p>
        <button className="devotion-button" onClick={() => setShowForm(true)}>
          GET THE FREE CHAPTER - WISE MYSTERIES
        </button>
      </section>


      <section className="footer-section">
       
        <p>&copy; {currentYear} Wise Mysteries</p>
      </section>

      <DevotionForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default LandingPage;
