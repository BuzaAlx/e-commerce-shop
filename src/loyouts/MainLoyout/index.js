import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MainLoyout({ children }) {
  return (
    <>
      <Header />
      <div className="mainLoyoutContent">{children}</div>
      <Footer />
    </>
  );
}

export default MainLoyout;
