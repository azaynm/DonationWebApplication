import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar(props) {
  const pathName = props?.location?.pathname;
  const logout = props.logout;
  const isLoggedIn = props.isLoggedIn;

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link
          to="/"
          className={pathName === "/" ? "header_link_active" : "header_link"}
          style={{ textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link to="/donate-cloth">Donate Cloth</Link>
        <Link to="/donate-food">Donate Food</Link>
        <Link to="/donation-list">Donation List</Link>
        <Link to="/stationery">Stationery</Link>
        <Link to="/medical">Medical</Link>
        {isLoggedIn ? (<Link onClick={handleLogout}>Logout</Link>) :
          (<Link to="/login">Login</Link>)}
      </div>
    </div>
  );
}

export default Navbar;
