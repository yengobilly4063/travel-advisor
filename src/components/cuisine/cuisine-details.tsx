import { Chip } from "@material-ui/core";
import { FC } from "react";
import useStyles from "./styles";
type Props = {
  name?: string;
};
const CuisineDetails: FC<Props> = ({ name }) => {
  const classes = useStyles();
  return <Chip label={name} size="small" className={classes.chip} />;
};

export default CuisineDetails;
