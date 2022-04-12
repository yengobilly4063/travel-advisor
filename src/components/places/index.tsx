import React from "react";
import { Typography, Grid, CircularProgress, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "./styles";
import usePlaces from "./hooks/usePlaces";
import PlaceDetails from "../place-details";
import { IPlace } from "../shared/@types/places";
type Props = {
  places?: Partial<IPlace>[];
};

const Places: React.FC<Props> = ({ places }) => {
  const classes = useStyles();
  const { type, setType, rating, setRating } = usePlaces();
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value as string)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event) => setRating(event.target.value as string)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Places;
