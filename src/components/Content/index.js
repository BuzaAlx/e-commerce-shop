import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import "./styles.scss";
import { useHistory } from "react-router-dom";

function Content() {
  const history = useHistory();

  return (
    <section className="content">
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
                <Link className="product__link" to="/search">
                  View Shop
                </Link>
              </div>
            </div>
            <div className="product__images-box">
              <div
                className="product__image-container"
                onClick={() => history.push(`/search/children`)}
              >
                <img
                  className="product__image"
                  src="kids.jpg"
                  alt="product__image"
                />
                <div className="product__inner">children</div>
              </div>
              <div
                className="product__image-container"
                onClick={() => history.push(`/search/mens`)}
              >
                <img
                  className="product__image"
                  src="man.jpg"
                  alt="product__image"
                />
                <div className="product__inner">mans</div>
              </div>
              <div
                className="product__image-container"
                onClick={() => history.push(`/search/womens`)}
              >
                <img
                  className="product__image"
                  src="woman.jpg"
                  alt="product__image"
                />
                <div className="product__inner">women</div>
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
