import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { Award } from "../../shared/@types/places";
type Props = {
  award?: Award;
};
const AwardDetails: FC<Props> = ({ award }) => {
  return (
    <Box my={1} display="flex" justifyContent="space-between" alignItems="center" key={award?.images?.large}>
      <img src={award?.images?.small} alt={award?.display_name} />
      <Typography variant="subtitle2" color="textSecondary">
        {award?.display_name}
      </Typography>
    </Box>
  );
};

export default AwardDetails;
