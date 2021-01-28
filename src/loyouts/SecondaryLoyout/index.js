import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function SecondaryLoyout({ children }) {
  return (
    <>
      <Header />
      <div className="secondaryLoyoutContent">{children}</div>
      <Footer />
    </>
  );
}

export default SecondaryLoyout;
