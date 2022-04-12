import React from "react";
import { IPlace } from "../shared/@types/places";

type Props = {
  place: Partial<IPlace>;
};

const PlaceDetails: React.FC<Props> = ({ place }) => {
  return <h1>{place.name}</h1>;
};

export default PlaceDetails;
