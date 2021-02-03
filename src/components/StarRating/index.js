import React, { useState, useEffect } from "react";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const rating = new Array(5).fill(<AiOutlineStar size="20" />);

function StarRating({ productRate = null }) {
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

  return (
    <div className="rating">
      {stars.map((obj, index) => (
        <span onClick={() => setSelectedStar(index + 1)}>{obj}</span>
      ))}
    </div>
  );
}

export default StarRating;
