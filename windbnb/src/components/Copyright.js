import React from "react";
import { Typography, Link, Divider } from "@material-ui/core";

export default function Copyright() {
  return (
    <div>
      <Divider variant="middle" />
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        <Link
          color="inherit"
          href="https://github.com/ooanishoo/"
          target="_blank"
        >
          Anish Maharjan @ DevChallenges.io
        </Link>
      </Typography>
    </div>
  );
}
