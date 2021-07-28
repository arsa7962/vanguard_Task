import PropTypes from 'prop-types';

import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import Button from '../button/Button';
import { useStyles } from './CardStyles';

export default function CardBlock(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>
          {props.title}
          <InfoIcon className={classes.icon} />
        </Typography>
        <Typography className={classes.amount}>{props.amount}</Typography>
      </CardContent>
      {props.btnContent && (
        <CardActions>
          <Button
            className={classes.btn}
            color='white'
            align='left'
            content={props.btnContent}
          />
        </CardActions>
      )}
    </Card>
  );
}

CardBlock.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.string,
  btnContent: PropTypes.string,
};

CardBlock.defaultProps = {
  name: '',
};
