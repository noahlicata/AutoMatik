import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ setCurrentUser, loggedIn, setLoggedIn }) {
  let history = useHistory();

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setLoggedIn(false);
        history.push("./");
      }
    });
  };

  return (
    <div id="navbar">
      <div className="logo">
        <Link className="automatik-logo" to="/">
          AutoMatik
        </Link>
      </div>
      <div className="banner">
        <Link className="route-link" to="/shop">
          Shop Cars
        </Link>
        <Link className="route-link" to="/sell">
          Sell My Car
        </Link>
        {loggedIn ? (
          <div className="banner">
            <Link className="route-link" to="/" onClick={handleLogout}>
              Logout
            </Link>
            <Link className="route-link" to="/profile">
              Profile
            </Link>
          </div>
        ) : (
          <Link className="route-link" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
