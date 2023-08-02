import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.scss";

import Logo from "../assets/Logo.png";
import Facebook from "../assets/fb.png"
import Instagram from "../assets/ig.png"
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-evenly my-3">
        <img src={Logo} className="img-fluid" width="200"/>

        {/* DESKTOP MENU */}
          <div className="navbar-nav options collapse-on-small m-0">
            <button className="nav-link selected my-0 p-0">
              Home
            </button>
            <button className="nav-link my-0 p-0">
              Projects
            </button>
            <button className="nav-link my-0 p-0">
              Gallery
            </button>
            <button className="nav-link my-0 p-0">
              Contact
            </button>
        </div>
        <div className="navbar-nav fs-5 options collapse-on-small m-0">
            <a href="https://www.instagram.com/marebik/" className="link">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/marebik/" className="link">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/lmlgabriel/" className="link">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/LuisMav23" className="link">
              <img src={Github} alt="Github" />
            </a>
        </div>

        {/* OFF CANVAS MENU */}
        
      </div>
    </nav>
  );
}

export default NavBar;
