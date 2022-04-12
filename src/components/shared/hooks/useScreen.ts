import { useMediaQuery } from "@material-ui/core";
const useScreen = () => {
  const isMobile = useMediaQuery("(max-width:600px");
  const isDesktop = useMediaQuery("(min-width:600px");

  return { isMobile, isDesktop };
};

export default useScreen;
