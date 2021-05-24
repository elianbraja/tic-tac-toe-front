import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">TicTacToe</a>
      <div id="navbarNav" className="ml-auto">
        <ul class="navbar-nav">
          <NavLink className="nav-link" exact activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" exact activeClassName="active" to="/signup">
            Sign up
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
