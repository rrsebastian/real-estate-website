import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import HomeOptions from "./Components/HomeOptions";
import House from "./Components/House";
import Homes from "./Homes.json";
import SorryMessage from "./Components/SorryMessage";

const Home = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [filteredListings, setFilteredListings] = useState(Homes);
  const [likedHouses, setLikedHouses] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("any");

  const handleRoomSelection = (roomNumber) => {
    setSelectedRooms((prevSelectedRooms) => {
      if (prevSelectedRooms.includes(roomNumber)) {
        return prevSelectedRooms.filter((room) => room !== roomNumber);
      } else {
        return [roomNumber];
      }
    });
  };

  const handleToggleLike = (e, title) => {
    e.stopPropagation();

    setLikedHouses((prevLikedHouses) => {
      if (prevLikedHouses.includes(title)) {
        return prevLikedHouses.filter((likedTitle) => likedTitle !== title);
      } else {
        return [...prevLikedHouses, title];
      }
    });
  };

  useEffect(() => {
    const filteredListings = Homes.filter((listing) => {
      const isRoomSelected =
        selectedRooms.length === 0 ||
        (selectedRooms.includes("6+") && listing.rooms >= 6) ||
        selectedRooms.includes(listing.rooms);

      const numericPrice = parseInt(listing.price.replace(/[$,]/g, ""), 10);

      const isPriceInRange =
        (!minPrice || numericPrice >= minPrice) &&
        (!maxPrice || numericPrice <= maxPrice);

      const isCountrySelected =
        selectedCountry === "any" || selectedCountry === listing.country;

      return isRoomSelected && isPriceInRange && isCountrySelected;
    });

    setFilteredListings(filteredListings);
  }, [selectedRooms, minPrice, maxPrice, selectedCountry]);

  const setPriceRange = (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    const storedRooms = localStorage.getItem("selectedRooms");
    if (storedRooms) {
      setSelectedRooms(JSON.parse(storedRooms));
    }

    const storedLikedHouses = localStorage.getItem("likedHouses");
    if (storedLikedHouses) {
      setLikedHouses(JSON.parse(storedLikedHouses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedRooms", JSON.stringify(selectedRooms));
  }, [selectedRooms]);

  useEffect(() => {
    localStorage.setItem("likedHouses", JSON.stringify(likedHouses));
  }, [likedHouses]);

  return (
    <div>
      <Header />
      <HomeOptions
        selectedRooms={selectedRooms}
        handleRoomSelection={handleRoomSelection}
        setPriceRange={setPriceRange}
        handleCountryChange={handleCountryChange}
      />
      <div
        style={{ display: filteredListings.length === 0 && "none" }}
        className="house-container-background"
      >
        {filteredListings.map((listing, index) => (
          <House
            key={index}
            title={listing.title}
            price={listing.price}
            description={listing.description}
            houseImg={listing.image}
            rooms={listing.rooms}
            country={listing.country}
            liked={likedHouses.includes(listing.title)}
            handleToggleLike={handleToggleLike}
          />
        ))}
      </div>
      {filteredListings.length === 0 && (
        <SorryMessage selectedRooms={selectedRooms} />
      )}
    </div>
  );
};

export default Home;
