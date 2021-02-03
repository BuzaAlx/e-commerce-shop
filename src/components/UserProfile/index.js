import React from "react";
import "./styles.scss";
import userIMG from "./../../assets/user.png";

const UserProfile = (props) => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="userProfile__img">
            <img src={userIMG} />
          </div>
        </li>
        <li>
          <span className="userProfile__displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
