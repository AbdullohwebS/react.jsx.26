import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img
          src="./src/assets/shared/desktop/Group.svg"
          alt="Menu Toggle"
          className="menu-icon"
        />
      </div>

      <img
        src="./src/assets/shared/desktop/logo.svg"
        alt="Logo"
        className="logo"
      />

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/headphones">HEADPHONES</a>
        <a href="/speakers">SPEAKERS</a>
        <a href="/earphones">EARPHONES</a>
      </nav>

      <div className="search-bar">
        <img
          src="./src/assets/shared/desktop/icon-cart.svg"
          alt="Cart"
          className="cart-icon"
        />
      </div>
    </header>
  );
}
