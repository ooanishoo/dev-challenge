import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Property from "./Property";
import data from "../data/data.json";

console.log({ data });

const styles = {
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "29px",
  },
};

function PropertyList() {
  return (
    <div>
      <Grid container justify="space-between" wrap="nowrap" alignItems="center">
        <Grid item>
          {/* <div style={styles.title}></div> */}
          <Typography variant="h6" gutterBottom>
            <Box fontWeight="fontWeightBold">Stays in Finland</Box>
          </Typography>
        </Grid>
        <Grid item>
          <Box fontWeight={500}>12+ stays</Box>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" spacing={2}>
        {data.map((val) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            style={{
              display: "grid",
            }}
          >
            <Property props={val} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PropertyList;
