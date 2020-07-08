import React from "react";
import {
  Container,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { Header, PropertyList, Copyright } from "./components";

function App() {
  let theme = createMuiTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
    // palette: {
    //   //primary: deepPurple,
    //   //main: "#8E38A3",
    //   primary: {
    //     main: purple[700],
    //   },
    // },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="lg"
          style={
            {
              //  backgroundColor: "green"
            }
          }
        >
          <Header />
          <PropertyList />
          <Copyright />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
