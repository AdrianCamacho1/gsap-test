import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((value, index) =>
        value ? (
          <FontAwesomeIcon
            key={index}
            icon={faSolidStar}
            className="text-lg text-yellow-500 mr-1"
          />
        ) : (
          <FontAwesomeIcon
            key={index}
            icon={faRegularStar}
            className="text-lg text-yellow-200 mr-1"
          />
        )
      )}
    </>
  );
};
