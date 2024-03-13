import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./index.css";
import HouseMoreDetails from "./Components/HouseMoreDetails.jsx";
import Homes from "./Homes.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/homes/Modern Villa with Ocean View"
        element={
          <HouseMoreDetails
            houseImg={Homes[0].image}
            title={Homes[0].title}
            price={Homes[0].price}
            rooms={Homes[0].rooms}
            location={Homes[0].country}
            description={`Discover the epitome of luxury in this spacious modern villa,
            showcasing panoramic ocean views. This upscale property features
            state-of-the-art amenities and a private pool, creating an oasis of
            comfort and sophistication. Immerse yourself in the allure of
            contemporary living, where every detail is thoughtfully curated to
            provide an unforgettable experience. Indulge in the perfect blend of
            elegance and relaxation, making this villa a haven for those seeking
            a refined lifestyle.`}
          />
        }
      />
      <Route
        path="/homes/Cozy Cottage in the Countryside"
        element={
          <HouseMoreDetails
            houseImg={Homes[1].image}
            title={Homes[1].title}
            price={Homes[1].price}
            rooms={Homes[1].rooms}
            location={Homes[1].country}
            description={`
            Nestled in serene countryside, our charming cottage is the perfect retreat for those seeking peace and nature's embrace. Escape to a tranquil sanctuary where rustic charm meets timeless elegance, offering a respite from the ordinary. Whether for solitude or a romantic getaway, create cherished memories in this cozy haven surrounded by the beauty of nature.`}
          />
        }
      />
      <Route
        path="/homes/City Loft with Skyline Views"
        element={
          <HouseMoreDetails
            houseImg={Homes[2].image}
            title={Homes[2].title}
            price={Homes[2].price}
            rooms={Homes[2].rooms}
            location={Homes[2].country}
            description={`
            Nestled in the heart of the city, our stylish loft offers a contemporary haven with breathtaking skyline views. Immerse yourself in the dynamic energy of urban living, complemented by convenient access to amenities and the vibrant pulse of city life. Discover a perfect synthesis of modern comfort and metropolitan excitement, making this loft an ideal retreat for those seeking a stylish and dynamic lifestyle.`}
          />
        }
      />
      <Route
        path="/homes/Rustic Mountain Cabin"
        element={
          <HouseMoreDetails
            houseImg={Homes[3].image}
            title={Homes[3].title}
            price={Homes[3].price}
            rooms={Homes[3].rooms}
            location={Homes[3].country}
            description={`
            Tucked away in the mountains, our charming cabin provides a cozy retreat for those yearning for a rustic atmosphere amidst scenic beauty. Experience the perfect blend of simplicity and natural allure, making this cabin an ideal sanctuary for mountain living enthusiasts.`}
          />
        }
      />
      <Route
        path="/homes/Luxury Penthouse with Terrace"
        element={
          <HouseMoreDetails
            houseImg={Homes[4].image}
            title={Homes[4].title}
            price={Homes[4].price}
            rooms={Homes[4].rooms}
            location={Homes[4].country}
            description={`
            Indulge in the epitome of luxury with our opulent penthouse boasting an expansive terrace. Elevate your lifestyle surrounded by high-end amenities, revel in the lavish ambiance, and relish unparalleled views that redefine exclusivity. Experience a heightened level of sophisticated living in this truly remarkable property, where every detail is crafted to offer a luxurious retreat.`}
          />
        }
      />
      <Route
        path="/homes/Beachfront Bungalow"
        element={
          <HouseMoreDetails
            houseImg={Homes[5].image}
            title={Homes[5].title}
            price={Homes[5].price}
            rooms={Homes[5].rooms}
            location={Homes[5].country}
            description={`
            Embrace coastal bliss in our charming beachfront bungalow, granting you direct access to the sandy shores. Immerse yourself in sun-soaked days and sea-kissed evenings, creating memories in this perfect retreat for sun, sea, and sand lovers. Enjoy the ultimate fusion of comfort and nature, making every moment a serene celebration of beachside living.`}
          />
        }
      />
      <Route
        path="/homes/Classic Colonial Estate"
        element={
          <HouseMoreDetails
            houseImg={Homes[6].image}
            title={Homes[6].title}
            price={Homes[6].price}
            rooms={Homes[6].rooms}
            location={Homes[6].country}
            description={`
            Indulge in refined living at our elegant colonial-style estate, where timeless architecture meets grandeur. Experience the expansive interiors adorned with sophistication and step into the lush garden, a tranquil retreat complementing the grandeur. Revel in the perfect fusion of classic charm and contemporary comfort, creating an unparalleled ambiance of luxurious living.`}
          />
        }
      />
      <Route
        path="/homes/Sustainable Urban Residence"
        element={
          <HouseMoreDetails
            houseImg={Homes[7].image}
            title={Homes[7].title}
            price={Homes[7].price}
            rooms={Homes[7].rooms}
            location={Homes[7].country}
            description={`
            Indulge in modern living at our eco-friendly residence, where sustainable features meet contemporary design. Embrace an environmentally conscious lifestyle without compromising on style or comfort. Discover the perfect balance of innovation and elegance within these sleek interiors. Experience luxury living while reducing your carbon footprint in this forward-thinking abode.
            `}
          />
        }
      />
      <Route
        path="/homes/Historic Townhouse with Character"
        element={
          <HouseMoreDetails
            houseImg={Homes[8].image}
            title={Homes[8].title}
            price={Homes[8].price}
            rooms={Homes[8].rooms}
            location={Homes[8].country}
            description={`
            Step into the past as you explore the intricate architectural details of this charming historic townhouse. Immerse yourself in the rich heritage and character of a bygone era, preserved within the walls of this unique property. Delight in the timeless elegance and craftsmanship that define each corner of this historic gem. Let the stories of generations past whisper through the halls, inviting you to be part of its enduring legacy.
            `}
          />
        }
      />
      <Route
        path="/homes/Lakefront Retreat with Dock"
        element={
          <HouseMoreDetails
            houseImg={Homes[9].image}
            title={Homes[9].title}
            price={Homes[9].price}
            rooms={Homes[9].rooms}
            location={Homes[9].country}
            description={`
            Indulge in lakeside living at this tranquil retreat boasting a private dock. Immerse yourself in the serene beauty of the surrounding landscape, offering breathtaking views and endless opportunities for water activities. Relax and unwind amidst the peaceful ambiance of the lake, creating cherished memories in this idyllic setting. Experience the perfect blend of relaxation and adventure in your own private lakeside sanctuary.
            `}
          />
        }
      />
    </Routes>
  </Router>
);
