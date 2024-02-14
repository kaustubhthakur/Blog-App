import React, { useState } from "react"; // Assuming you are using React Router for navigation
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="navbar-container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createpost" className="nav-link">
              Create Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/savedpost" className="nav-link">
              Saved Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/edit" className="nav-link">
              Edit Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deletepost" className="nav-link">
              Delete Post
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            {!cookies.access_token ? (
              <div>
                {" "}
                <Link className="nav-link" to="/register">
                  Register
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </div>
            ) : (
              <button onClick={logout}> Logout </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
