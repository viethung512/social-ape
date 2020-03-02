import React, { Fragment } from "react";
import NoImage from "../images/no-img.png";
import { makeStyles } from "@material-ui/core/styles";
// MUI stuff
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    marginBottom: 20
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: "cover"
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 10
  },
  fullline: {
    height: 15,
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10
  },
  halfline: {
    height: 15,
    width: "50%",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10
  }
}));

export default function() {
  const classes = useStyles();
  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImage} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullline} />
        <div className={classes.halfline} />
      </CardContent>
    </Card>
  ));
  return <Fragment>{content}</Fragment>;
}
