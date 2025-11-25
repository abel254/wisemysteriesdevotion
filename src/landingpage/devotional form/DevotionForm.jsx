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
  const [loading, setLoading] = useState(false);
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
    setLoading(true); // 👈 start loading
    try {
      await axios.post("https://wisemysteriesserver-swl1.vercel.app/api/user", user);
      alert(
        "✅ Thank you! Your free chapter will be sent to your Gmail."
      );
      onClose();
      setUser(users);
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

        <h2>Get Your Free Chapter</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Names"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Country"
            value={user.address}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={`submit-btn ${loading ? "loading":""}`}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              "Get the Free Chapter"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DevotionForm;
