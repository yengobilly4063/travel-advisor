import { useEffect } from "react";
import Header from "./components/header";
import Map from "./components/map";
import Places from "./components/places";
import { CssBaseline, Grid } from "@material-ui/core";
import useCoordinates from "./shared/hooks/useCoordinates";
import usePlaces from "./components/places/hooks/usePlaces";

const App = () => {
  const { places, getPlaces } = usePlaces();
  const { coordinates, setBounds, setCoordinates, bounds } = useCoordinates();

  useEffect(() => {
    if (!bounds) {
      return;
    }
    getPlaces(bounds);
  }, [bounds]);

  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <Places places={places} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map coordinates={coordinates} setBounds={setBounds} setCoordinates={setCoordinates} />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
