import "./customers.scss";
import customersImage from "../../images/customers.svg";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Customers = () => {
  return (
    <div className="customers-section">
      <div className="customers-left">
        <img src={customersImage} alt="customers" className="customers-image" />
      </div>
      <div className="customers-right">
        <h1 className="customers-heading">
          Impressing our <br /> customers
        </h1>
        <p className="customers-description">
          What separates good content from great content is a willingness to
          take risks and push the envelope.
        </p>
        <div className="customers-cards-container">
          <div className="customers-card">
            <h3 className="customers-card-heading">
              <AiOutlineInfoCircle />
              Trust
            </h3>
            <p className="customers-card-text">
              Our relationships are built on trust and a marriage of equals. Our
              goal is to help clients become digital by facilitating their
              journey from idea generation to the continuous deployment of
              platforms.
            </p>
          </div>
          <div className="customers-card">
            <h3 className="customers-card-heading">
              <AiOutlineInfoCircle /> Satisfaction
            </h3>
            <p className="customers-card-text">
              We challenged ourselves to imagine what a better process and
              solution would look like for all sides involved, and out of this
              simpleNews was born.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
