import React, { useState } from "react";
import "./landingpage.css";
import DevotionForm from "./devotional form/DevotionForm";

const LandingPage = () => {
   const [showForm, setShowForm] = useState(false);
  const currentYear = new Date().getFullYear()

  return (
    <div className="devotion-lp">
      <section className="hero-section">
        <div className="hero-heading">
          <div className="heading-info">
            <h1>Why is God letting me go through this?</h1>
            <p className="sub-heading">
              Discover the hidden biblical patterns of how God uses wilderness,
              crisis, and trials to prepare you for your destiny.
            </p>
            <h4>Get you FREE 7-Day Devotional Wise Mysteries</h4>
            <div className="heading-par">
              <p className="everyday">Every day you'll receive:</p>
              <div className="offers-par">
                <p className="offers">A powerful scripture</p>
                <p className="offers">A short reflection</p>
                <p className="offers">A prayer to guide you through hardship</p>
              </div>
            </div>

            <button className="devotion-button" onClick={() => setShowForm(true)}>
              Get The Free 7-Day Devotional
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="overlay"></div>
          <img src="35.png" alt="" />
        </div>
      </section>

      <section className="benefits-section">
        <h4 className="experience-heading">
          What you'll experience in 7 Days:
        </h4>
        <div className="benefits-info">
          <div className="clarity benefits">
            <div className="benefits-image">
              <img src="./clarity.jpg" alt="" />
            </div>
            <div className="benefits-desc">
              <h4>Clarity</h4>
              <p>Understand the hidden meaning of your trials</p>
            </div>
          </div>
          <div className="strength benefits">
            <div className="benefits-image">
              <img src="./strength.jpg" alt="" />
            </div>
            <div className="benefits-desc">
              <h4>Strength</h4>
              <p>Find encouragement to keep pushing forward.</p>
            </div>
          </div>
          <div className="faith benefits">
            <div className="benefits-image">
              <img src="./faith.jpg" alt="" />
            </div>
            <div className="benefits-desc">
              <h4>Faith</h4>
              <p>See how biblical heroes turned into destiny</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section">
        <h4 className="final-heading">Don’t Miss This Free Devotional</h4>
        <p>Your struggle isn’t the end — it’s the preparation. Discover the mystery inside your wilderness.</p>
        <button className="devotion-button" onClick={() => setShowForm(true)}>
          Yes, Send Me My Free 7-Day Devotional
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
