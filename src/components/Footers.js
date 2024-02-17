import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear any previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Perform basic input validation
    if (!name.trim() || !email.trim() || !suggestion.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Replace with your preferred email sending function or API
      // For demonstration purposes, I'll use a placeholder function:



      await sendEmail({ name, email, suggestion });

      setSuccessMessage(
        "Thank you for your suggestion! We appreciate your feedback."
      );
      setName("");
      setEmail("");
      setSuggestion("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage(
        "An error occurred while sending your suggestion. Please try again later."
      );
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content flex-container">
          <div className="footer-links flex-left">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
            
          </div>
          <div className="footer-form flex-right">
            <form onSubmit={handleSubmit}>
              <h3>Leave a Suggestion</h3>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="suggestion">Suggestion:</label>
              <textarea
                id="suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2021 Your Company. All rights reserved.</p>
        <p> logo is copyright of stack up</p>
      </div>
    </footer>
  );
};

export default Footer;

async function sendEmail({ name, email, suggestion }) {
  try {
    // Make a POST request to your email sending API
    await axios.post("/api/send-email", { name, email, suggestion });
    console.log("Email sent successfully:", { name, email, suggestion });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("An error occurred while sending the email.");
  }
}
