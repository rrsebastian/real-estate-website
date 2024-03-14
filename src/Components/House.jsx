import React from "react";
import { Link } from "react-router-dom";
import "../Styles/House.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const House = ({
  houseImg,
  title,
  price,
  description,
  rooms,
  country,
  liked,
  handleToggleLike,
}) => {
  const handleClick = () => {
    if (window.innerWidth < 1320) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="house-wrapper">
      <Link
        onClick={handleClick}
        to={`/homes/${title}`}
        className="house-container"
      >
        <img src={houseImg} alt={`${title} House`} />
        <div className="house-info">
          <h1>{title}</h1>
          <p className="house-info-price">{price}</p>
          <p className="house-info-description">{description}</p>
          <p>Rooms: {rooms}</p>
          <p className="house-info-location">{country}</p>
        </div>
        {!liked ? (
          <FaRegHeart
            onClick={(e) => {
              e.preventDefault();
              handleToggleLike(e, title);
            }}
            className="house-heart-icon"
          />
        ) : (
          <FaHeart
            onClick={(e) => {
              e.preventDefault();
              handleToggleLike(e, title);
            }}
            className="house-heart-icon"
          />
        )}
      </Link>
    </div>
  );
};

export default House;
