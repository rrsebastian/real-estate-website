import React, { useEffect, useState } from "react";
import "../Styles/HomeOptions.css";

const HomeOptions = ({
  handleRoomSelection,
  selectedRooms,
  setPriceRange,
  selectedCountry,
  handleCountryChange,
}) => {
  const [countries, setCountries] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const formatPrice = (value) => {
    return value.replace(/[^\d]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = formatPrice(value);

    if (name === "from") {
      setMinPrice(formattedValue);
      setPriceRange(
        parseInt(formattedValue.replace(/,/g, ""), 10),
        parseInt(maxPrice.replace(/,/g, ""), 10)
      );
    } else if (name === "to") {
      setMaxPrice(formattedValue);
      setPriceRange(
        parseInt(minPrice.replace(/,/g, ""), 10),
        parseInt(formattedValue.replace(/,/g, ""), 10)
      );
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setPriceRange]);

  return (
    <div className="home-options-container">
      <div className="price-room-wrapper">
        <div>
          <h2>Price</h2>
          <div className="price-input-wrapper">
            <div className="price-currency-wrapper">
              <input
                name="from"
                type="text"
                placeholder="From"
                value={minPrice}
                onChange={handlePriceChange}
                maxLength={15}
              />
              <span className="currency">$</span>
            </div>
            <div className="price-currency-wrapper">
              <input
                name="to"
                type="text"
                placeholder="To"
                value={maxPrice}
                onChange={handlePriceChange}
                maxLength={15}
              />
              <span className="currency">$</span>
            </div>
          </div>
        </div>
        <div>
          <h2>Number of rooms</h2>
          <div className="number-spans-wrapper">
            {[1, 2, 3, 4, 5, "6+"].map((roomNumber) => (
              <span
                key={roomNumber}
                onClick={() => handleRoomSelection(roomNumber)}
                className={
                  selectedRooms.includes(roomNumber)
                    ? "selected-num-rooms"
                    : "num-rooms"
                }
              >
                {roomNumber}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="country-dropdown-container">
        <h2>Country</h2>
        <select
          name="countrySelect"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="any">Any</option>
          {countries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country, index) => (
              <option key={index} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default HomeOptions;
