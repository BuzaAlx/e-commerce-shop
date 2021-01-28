import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import "./styles.scss";

function Content() {
  return (
    <section className="slider">
      <div className="product">
        <div className="container">
          <div className="product__row">
            <div className="product__column-description">
              <div className="product__description fade-anim">
                <h1 className="product__title">Adidas for everyone</h1>
                <p className="product__subtitle">
                  Contrary to popular belief,is not simply random text.It has
                  roots in a priece of classical Latin literature 45BC,making it
                  over 2000 years ago.Richard McClintock,a Latin
                </p>
                <Link className="product__link btn" to="#">
                  View Shop
                </Link>
              </div>
            </div>
            <div className="product__images-box">
              <div className="product__image-container">
                <img
                  className="product__image"
                  src="kids.jpg"
                  alt="product__image"
                />
              </div>
              <div className="product__image-container">
                <img
                  className="product__image"
                  src="man.jpg"
                  alt="product__image"
                />
              </div>
              <div className="product__image-container">
                <img
                  className="product__image"
                  src="woman.jpg"
                  alt="product__image"
                />
              </div>
            </div>
            <AiOutlineDownCircle className="pointer-icon" size={35} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
