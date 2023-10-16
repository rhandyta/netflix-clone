import { green, red } from "@mui/material/colors";

const { createTheme, responsiveFontSizes } = require("@mui/material");

const app = createTheme({
  palette: {
    primary: {
      main: "#E50915",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      main: red[400]
    },
    success: {
      main: green[400]
    }
  },
});
const theme = responsiveFontSizes(app);
export default theme;
