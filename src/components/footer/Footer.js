import "./footer.scss";
import { FaLocationArrow, FaCity, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Feel free to</p>
        <h2>
          Contact us. <br />
          Let's Talk.
        </h2>
      </div>
      <div className="location-info">
        <h3>Where we are</h3>
        <p>
          <FaLocationArrow />
          Veljka Dugoševića 54
        </p>
        <p>
          <FaCity />
          Belgrade
        </p>
      </div>
      <div className="contact-info">
        <h3>Our contact info</h3>
        <p>
          <FaPhoneAlt />
          +381012345678
        </p>
        <p>
          <IoMdMail />
          example@mail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
