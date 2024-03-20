import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <header className="layout-header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="layout-nav">
        <ul>
          <li>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="trips">Our Trips</NavLink>
          </li>
          <li>
            <NavLink to="about us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="contact us">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
