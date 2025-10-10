import React, { useState, useEffect } from "react";
import "./devotionform.css"; // Import the CSS file
import axios from "axios";

const DevotionForm = ({ isOpen, onClose }) => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);

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
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        alert("✅ Thank you! Your 7-day's devotional will be sent to your Gmail.");
        onClose();
      })
      .catch((error) => {
        console.log(error)
      })
  };

  if (!isOpen) return null;


  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`overlay ${isVisible ? "show" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={`popup ${isVisible ? "slide-up" : "slide-down"}`}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Get Your Free 7-Day Devotional</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Names"
            value={setUser.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            value={setUser.gmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Country"
            value={setUser.address}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Get the Free 7-day Devotional
          </button>
        </form>
      </div>
    </div>
  );
};

export default DevotionForm;
