import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../assets/Logo.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <img src={Logo} className="img-fluid" width="200"/>
        <div class="navbar-nav justify-space-between">
          <p>dhaklsj</p>
          <p>dhaklsj</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
