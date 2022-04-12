import { useState } from "react";
import { getPlacesData } from "../../../api";
import { Bounds } from "../../../shared/@types/bounds";

const usePlaces = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([]);

  const getPlaces = (bounds: Bounds) => {
    getPlacesData(bounds).then((data) => setPlaces(data));
  };

  return { type, setType, rating, setRating, places, getPlaces };
};

export default usePlaces;
