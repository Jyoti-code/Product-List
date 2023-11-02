import React, { useState } from "react";

function Navbar({ onCategoryChange }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      onCategoryChange("");
    } else {
      onCategoryChange(category);
    }
    setIsNavOpen(false);
  };

  return (
    <nav className="Navbar navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isNavOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleCategoryClick("All")}>
              All Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleCategoryClick("Women")}>
              Women
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleCategoryClick("Man")}>
              Man
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleCategoryClick("Child")}>
              Child
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
