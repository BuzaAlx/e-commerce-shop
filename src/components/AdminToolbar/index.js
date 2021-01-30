import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";
import { checkUserIsAdmin } from "../../helpers";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="admintoolbar">
      <div className="container">
        <div>
          <Link to="/admin">Admin Toolbar</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminToolbar;
