import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import Header from "../../components/Header";
import Content from "../../components/Content";

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div>
      <Header />
      <Content />
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Home;
