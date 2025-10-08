import React, { useState, useEffect } from "react";
import "./devotionform.css"; // Import the CSS file

const DevotionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    gmail: "",
    address: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay to trigger animation when opening
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Thank you! Your devotional will be sent to your Gmail.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`overlay ${isVisible ? "show" : ""}`}>
      <div className={`popup ${isVisible ? "slide-up" : "slide-down"}`}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Get Your Free 7-Day Devotional</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Names"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="gmail"
            placeholder="Gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Get the Free Devotional
          </button>
        </form>
      </div>
    </div>
  );
};

export default DevotionForm;
