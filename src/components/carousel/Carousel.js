import React from 'react';

import Button from '../button/Button';
import Carousel from 'react-material-ui-carousel';
import { useStyles } from './CarouselStyles';
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from '@material-ui/core';

function CarouselContainer(props) {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];
  const classes = useStyles();
  return (
    <Carousel
      className={classes.carousel}
      indicators={false}
      animation='slide'
      autoPlay={false}
      navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentWrapper}>
        <div>
          <Typography variant='subtitle2'>Featured</Typography>
          <Typography className={classes.title}>
            Learn how to value your contributions
          </Typography>
        </div>
        <div>
          <Typography>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud dolore magna ali.''
          </Typography>
          <CardActions>
            <Button
              content='Learn more'
              color='white'
              align='left'
              className={classes.btn}
            />
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}

export default CarouselContainer;
