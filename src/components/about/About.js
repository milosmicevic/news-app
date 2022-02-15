import "./about.scss";
import aboutImage from "../../images/about.svg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <img src={aboutImage} alt="about-section" />
      </div>
      <div className="about-right">
        <p>What are we doing?</p>
        <h1>
          We are bringing <br />
          The latest news worldwide <br />
          Just in a few clicks.
        </h1>
        <p>
          With us, being informed is
          <span className="highlighted">#simple</span>!
        </p>
      </div>
    </div>
  );
};

export default About;
