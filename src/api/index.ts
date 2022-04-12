import axios from "axios";
import { Bounds } from "../shared/@types/bounds";
import { getOptions } from "./helpers/options";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (bounds: Bounds) => {
  const options = getOptions(bounds);

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
