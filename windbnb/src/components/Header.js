import React from "react";
import { Grid, requirePropFactory } from "@material-ui/core";

function Header() {
  return (
    <div>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        // style={{ backgroundColor: "blue" }}
      >
        <Grid item>
          <img src={require("../images/logo.png")}></img>
        </Grid>
        <Grid item>Search bar here</Grid>
      </Grid>
    </div>
  );
}

export default Header;
