import { useEffect, useState } from "react";
import { Bounds, Coords } from "../@types/bounds";

const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coords | undefined>(undefined);
  const [bounds, setBounds] = useState<Bounds | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return { coordinates, bounds, setCoordinates, setBounds };
};

export default useCoordinates;
