import React, { useState, useEffect } from "react";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { firestore } from "../../firebase/utils";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostRatingStart,
  resetRatingState,
  handleStarStart,
} from "../../redux/Rating/rating.actions";
import {
  selectReviewsCount,
  selectAverageCount,
} from "../../redux/Rating/rating.selectors";
import { createStructuredSelector } from "reselect";

const mapState = ({ user, ratingData }) => ({
  displayName: user.currentUser?.displayName,
  sagaRating: ratingData.postRating,
});

const selectState = createStructuredSelector({
  reviewsCount: selectReviewsCount,
  averageCount: selectAverageCount,
});

const rating = new Array(5).fill(<AiOutlineStar size="20" />);

function StarRating({ titleVisibility, documentID }) {
  const { displayName, sagaRating } = useSelector(mapState);
  const { reviewsCount, averageCount } = useSelector(selectState);
  const [stars, setStars] = useState(rating);
  const dispatch = useDispatch();

  useEffect(() => {
    let newRating = rating.map((s, index) => {
      if (index + 1 <= Math.round(averageCount)) {
        return <AiFillStar size="20" />;
      }
      return s;
    });

    setStars(newRating);
  }, [sagaRating]);

  useEffect(() => {
    dispatch(getPostRatingStart(documentID));
    return () => dispatch(resetRatingState());
  }, [documentID]);

  const handleClick = (index) => {
    if (!displayName) return;
    dispatch(handleStarStart({ sagaRating, displayName, index, documentID }));
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
      {titleVisibility && (
        <p className="rating__rewiews-number">
          {averageCount} from {reviewsCount} reviews
        </p>
      )}
    </div>
  );
}

export default StarRating;
