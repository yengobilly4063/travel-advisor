import { Bounds } from "../../shared/@types/bounds";

export const getOptions = (bounds: Bounds) => {
  const { sw, ne } = bounds;
  return {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "2f633bfc32msh6a3ff8fbd1ca26bp174f07jsnffad05ee1db4",
    },
  };
};
