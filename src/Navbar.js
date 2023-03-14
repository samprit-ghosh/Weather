import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';



export default function Footer()  {

    return (
<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <a className="navbar-brand style" href="/">Weather App</a>
  <button className="navbar-toggler navcon" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav navcon-1 ">
      <li className="nav-item active">
        <a className="nav-link navlink" href="/" >Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link navlink" href="/About"  >About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navlink" href="/Contact" >Contact</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle navlink" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</>


    )}
