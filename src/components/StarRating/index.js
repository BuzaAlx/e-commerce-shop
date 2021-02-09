import React, { useState, useEffect } from "react";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const rating = new Array(5).fill(<AiOutlineStar size="20" />);

function StarRating({ productRate = null, title_visibility, documentID }) {
  const [firebaseRating, setFirebaseRating] = useState(null);
  const [stars, setStars] = useState(rating);
  const [selectedStar, setSelectedStar] = useState(productRate);

  useEffect(() => {
    let newRating = rating.map((s, index) => {
      if (index + 1 <= selectedStar) {
        return <AiFillStar size="20" />;
      }
      return s;
    });

    setStars(newRating);
  }, [selectedStar]);

  const handleClick = (index) => {
    setSelectedStar(index + 1);
  };

  return (
    <div className="rating">
      <div className="rating__icons">
        {stars?.map((obj, index) => (
          <span className="rating__icon" onClick={() => handleClick(index)}>
            {obj}
          </span>
        ))}
      </div>
      {title_visibility && (
        <p className="rating__rewiews-number">3.5 from 272 reviews</p>
      )}
    </div>
  );
}

export default StarRating;
