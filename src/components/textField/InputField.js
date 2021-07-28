import PropTypes from 'prop-types';

import { ButtonGroup, Button } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';

import { useStyles } from './InputFieldStyles';

export default function InputField(props) {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.root}>
      <input className={classes.input} placeholder={props.placeholder}></input>
      <Button className={classes.btn}><ArrowForward /></Button>
    </ButtonGroup>
  );
}

InputField.propTypes = {
    placeholder: PropTypes.string,
  };
  
InputField.defaultProps = {
placeholder:''
  };
  