import React from "react";
import GoodleMapReact, { ChangeEventValue } from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";
import { Bounds, Coords } from "../../shared/@types/bounds";

type Props = {
  coordinates?: Coords;
  setCoordinates: (event: Coords) => void;
  setBounds: (event: Bounds) => void;
};
const Map: React.FC<Props> = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <h1></h1>
      <GoodleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBrHs-VRXSWxrfgd31NrEK5oYBAmc_jn-E" }}
        // defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={}
        onChange={(event: ChangeEventValue) => {
          setBounds(event.bounds);
          setCoordinates(event.center);
        }}
        // onChildClick={}
      ></GoodleMapReact>
    </div>
  );
};

export default Map;
