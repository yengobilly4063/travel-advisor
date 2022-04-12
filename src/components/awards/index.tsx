import React, { FC } from "react";
import { Award } from "../../shared/@types/places";
import AwardDetails from "./award-details";
type Props = {
  awards: Award[];
};

const Awards: FC<Props> = ({ awards }) => {
  return (
    <>
      {awards.map((award, index) => (
        <AwardDetails award={award} key={index} />
      ))}
    </>
  );
};

export default Awards;
