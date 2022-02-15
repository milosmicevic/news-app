import { useState } from "react";
import "./newsletter.scss";
import newsletterImage from "../../images/newsletter.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const validateEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidationMessage("The E-mail you entered is valid.");
      setEmail("");
    } else {
      setValidationMessage("Please enter a valid E-mail.");
    }

    setTimeout(() => {
      setValidationMessage("");
    }, 3000);
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-text">
        <h2>
          Subscribe to our <br />
          Newsletter!
        </h2>
        <p>Stay up to date with our latest news.</p>
      </div>
      <div className="newsletter-input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={validateEmail}>Subscribe</button>
        <span className="validation-message">{validationMessage}</span>
      </div>
      <img
        src={newsletterImage}
        alt="newsletter"
        className="newsletter-image"
      ></img>
    </div>
  );
};

export default Newsletter;
