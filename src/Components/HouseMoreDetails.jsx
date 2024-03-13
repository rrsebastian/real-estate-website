import React from "react";
import "../Styles/HouseMoreDetails.css";
import Header from "./Header";

const HouseMoreDetails = ({
  houseImg,
  title,
  price,
  rooms,
  description,
  location,
}) => {
  return (
    <>
      <Header />
      <div className="house-more-details-container">
        <div className="more-details-img-container">
          <button onClick={() => window.history.back()}>Back</button>
          <img src={houseImg} />
        </div>
        <div className="house-more-details-info-wrapper">
          <p className="more-details-info">{location}</p>
          <h1>{title}</h1>
          <p className="more-details-description">{description}</p>
          <p className="more-details-info">{price}</p>
          <p className="more-details-info">Rooms: {rooms}</p>
        </div>
      </div>
    </>
  );
};

export default HouseMoreDetails;
