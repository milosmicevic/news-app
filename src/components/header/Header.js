import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="" />
            simple<span className="highlighted">News</span>
          </div>
        </NavLink>
      </div>
      <nav className={click ? "navigation active" : "navigation"}>
        <ul className="navigation-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link navigation-link" : "navigation-link"
              }
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link navigation-link" : "navigation-link"
              }
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-toggle" onClick={handleClick}>
        {click ? <RiCloseFill /> : <BiMenuAltRight />}
      </div>
    </header>
  );
};

export default Header;
