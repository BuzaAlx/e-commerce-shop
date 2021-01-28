import React from "react";
import "./styles.scss";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <section className="footer__about-block">
            <h3 className="footer__title">About Company</h3>
            <p className="footer__subtitle">
              The store is closed until 25.01.2021 Our online store AdiTIME
              offers customers a decent range of the most sophisticated and
              functional shoes and clothing from the German company Adidas.
              Today, Adidas is one of the most famous and popular manufacturers
              accessories Adidas . Source: https://www.adidas.net.ua/
            </p>
            <div className="footer__social-links">
              <div>
                <FiInstagram className="footer__social-icon" size={20} />
              </div>
              <div>
                <FiFacebook className="footer__social-icon" size={20} />
              </div>
              <div>
                <FaTelegramPlane className="footer__social-icon" size={20} />
              </div>
              <div>
                <FiTwitter className="footer__social-icon" size={20} />
              </div>
              <div>
                <FiYoutube className="footer__social-icon" size={20} />
              </div>
            </div>
          </section>
          <section className="footer__contacts-block">
            <h3 className="footer__title">Contacts</h3>
            <ul>
              <li> North America 5055 Avenue Portland</li>
              <li>info@adidas.com</li>
              <li>065 555-33-22</li>
              <li>035 235-31-93</li>
              <li>094 361-17-15</li>
              <li>The store is closed until 25.01.2021</li>
            </ul>
          </section>
          <section className="footer__map-block">
            <div className="map"></div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
