import { FC } from "react";
import { Cuisine } from "../../shared/@types/places";
import CuisineDetails from "./cuisine-details";
type Props = {
  cuisines?: Cuisine[];
};
const CuisineList: FC<Props> = ({ cuisines }) => {
  return (
    <>
      {cuisines?.map(({ name, key }) => (
        <CuisineDetails key={key} name={name} />
      ))}
    </>
  );
};

export default CuisineList;
