import React from "react";
import { Link } from "react-router-dom";
import "./PetsListNav.css";

export const PetsListNav = () => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
