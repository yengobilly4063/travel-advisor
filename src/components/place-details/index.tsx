import React from "react";
import { IPlace } from "../../shared/@types/places";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnICon from "@material-ui/icons/LocationOn";
import PhoneICon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import Awards from "../awards";
import CuisineList from "../cuisine";

type Props = {
  place: Partial<IPlace>;
};
const defaultImage =
  "https://static4.depositphotos.com/1015060/494/i/600/depositphotos_4947647-stock-photo-restaurant.jpg";

const PlaceDetails: React.FC<Props> = ({ place }) => {
  const classes = useStyles();
  const { awards, cuisine: cuisines, address, phone, web_url, website } = place;
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place?.photo ? place?.photo?.images?.large?.url : defaultImage}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.ranking}
          </Typography>
        </Box>
        {awards && <Awards awards={awards} />}
        {cuisines && <CuisineList cuisines={cuisines} />}
        {address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnICon /> {address}
          </Typography>
        )}
        {address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <PhoneICon /> {phone}
          </Typography>
        )}
        <CardActions className={classes.right}>
          <Button size="small" color="primary" onClick={() => window.open(web_url, "_blank")}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(website, "_blank")}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
