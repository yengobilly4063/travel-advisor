import { useState } from "react";
import { Bounds } from "../../shared/@types/bounds";

const usePlaces = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([]);

  const getPlaces = (bounds: Bounds) => {
    console.log("getting places after being sure boounds is set", bounds);
    // getPlacesData(bounds).then((data) => setPlaces(data));
  };

  return { type, setType, rating, setRating, places, getPlaces };
};

export default usePlaces;
