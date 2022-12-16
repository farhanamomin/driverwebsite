import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";


function Hero(props) {
  var items = [
    {
      name: "The driver on the highway is safe not when He reads the signs, but when He obeys them.",
      description: "~Aiden Wilson Tozer ",
      img_src: "carosel1.jpg"
    },
    {
      name: "If you have to use your phone while driving please, pull over to a safe place.",
      description: "~Oprah Winfrey ",
      img_src: "carosel2.jpg"
    },
    
    {
      name:  "Know how to drive safely when its raining or whan its snowing.The two conditiona are different ",
     
      description: "~Marilyn Vos Savant ",
      img_src: "carosel3.jpg"
    }
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  img_responsive: {
    maxHeight: "560px",
    width: "100%"
  },
  sec: {
    position: "absolute",
    top: "30%",
    left: "10%",
    color: "#fff"
  }
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec} id="type">
        <Typography variant="h3">{props.item.name}</Typography>
        <Typography variant="subtitle1">{props.item.description}</Typography>
        
        
      </div>

      <img className={classes.img_responsive} id="image" src={props.item.img_src} />
    </Paper>
  );
}

export default Hero;