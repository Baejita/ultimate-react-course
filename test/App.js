import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
