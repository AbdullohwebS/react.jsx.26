import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="logo">audiophile</h2>
        <p className="description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility – we’re open 7 days a week.
        </p>
        <p className="copyright">Copyright 2021. All Rights Reserved</p>
      </div>
      <div className="footer-right">
        <ul className="footer-nav">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/headphones">HEADPHONES</a>
          </li>
          <li>
            <a href="/speakers">SPEAKERS</a>
          </li>
          <li>
            <a href="/earphones">EARPHONES</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="#">
            <img src="./src/assets/shared/desktop/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/shared/desktop/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/shared/desktop/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
