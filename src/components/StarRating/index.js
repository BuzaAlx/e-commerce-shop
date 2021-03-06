import React, { useState, useEffect } from "react";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const mapState = ({ user, ratingData }) => ({
  displayName: user.currentUser?.displayName,
  sagaRating: ratingData.postRating,
});
const rating = new Array(5).fill(<AiOutlineStar size="20" />);

function StarRating({
  titleVisibility,
  documentID,
  rewivsCount,
  averageCount,
  productRating,
  handleClick,
}) {
  const { displayName } = useSelector(mapState);
  const [stars, setStars] = useState(rating);
  const dispatch = useDispatch();

  useEffect(() => {
    let newRating = rating.map((s, index) => {
      if (index + 1 <= Math.round(averageCount)) {
        return <AiFillStar key={index} size="20" />;
      }
      return s;
    });

    setStars(newRating);
  }, [productRating, averageCount]);

  const handleRate = (index) => {
    if (!displayName) return;
    dispatch(handleClick({ productRating, displayName, index, documentID }));
  };

  return (
    <div className="rating">
      <div className="rating__icons">
        {stars?.map((obj, index) => (
          <span
            key={index}
            className="rating__icon"
            onClick={() => handleRate(index)}
          >
            {obj}
          </span>
        ))}
      </div>
      {titleVisibility && (
        <p className="rating__rewiews-number">
          {rewivsCount > 0 ? (
            <span>
              {averageCount} from {rewivsCount} reviews
            </span>
          ) : (
            <span>Be the first who estimate!</span>
          )}
        </p>
      )}
    </div>
  );
}

export default StarRating;
