import { FC } from "react";
import { Cuisine } from "../../shared/@types/places";
import CuisineDetails from "./cuisine-details";
type Props = {
  cuisine?: Cuisine[];
};
const CuisineList: FC<Props> = ({ cuisine }) => {
  return (
    <>
      {cuisine?.map(({ name, key }) => (
        <CuisineDetails key={key} name={name} />
      ))}
    </>
  );
};

export default CuisineList;
