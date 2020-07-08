import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 395,
    //width: "100%",
  },
  rootMobile: {
    //minWidth: 395,
    width: "100%",
  },
  media: {
    height: 269,
    borderRadius: "24px",
  },
  rating: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

function Property({ props }) {
  const classes = useStyles();
  const { beds, photo, rating, superHost, title, type } = props;
  const isDesktop = useMediaQuery("(min-width:1028px)");

  return (
    <div>
      <Card
        className={isDesktop ? classes.root : classes.rootMobile}
        elevation={0}
      >
        <CardActionArea disableRipple disableTouchRipple>
          <CardMedia className={classes.media} image={photo} title={title} />
          <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "baseline",
                }}
              >
                {superHost ? (
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 12,
                      height: 28,
                      marginRight: 11,
                    }}
                  >
                    SUPER HOT
                  </Button>
                ) : null}
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {type} {beds > 0 ? `. ${beds} beds` : null}
                </Typography>
              </div>
              <div className={classes.rating}>
                <StarRateIcon style={{ color: "rgba(235, 87, 87, 0.72)" }} />
                <Typography variant="body2">{rating}</Typography>
              </div>
            </div>
            <div>
              <Typography gutterBottom variant="body2" component="h2">
                {title}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Property;
