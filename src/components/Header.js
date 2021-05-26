import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header(props) {
const [logged_out, setLoggedOut] = useState(false);

  function logOutUser() {
    localStorage.removeItem('token')
    setLoggedOut(true)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar" style={{background:"#171d25"}}>
      <a className="navbar-brand" href="/">TicTacToe</a>
      <div id="navbarNav" className="ml-auto">
        <ul className="navbar-nav">
          {logged_out || !props.user ?
            <React.Fragment>
              <NavLink className="nav-link" exact activeClassName="active" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="/signup">
                Sign up
              </NavLink>
            </React.Fragment>
          :
            <NavLink className="nav-link" exact activeClassName="active" to="/login" onClick={logOutUser}>
              Logout
            </NavLink>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Header;
