import axios from "axios";
import { Bounds } from "../components/shared/@types/bounds";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "2f633bfc32msh6a3ff8fbd1ca26bp174f07jsnffad05ee1db4",
//   },
// };

export const getPlacesData = async (bounds: Bounds) => {
  const { sw, ne } = bounds;

  const options = {
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

  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
