import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from './ButtonStyles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Index({
  width,
  align,
  color,
  dropdown,
  content,
  ...rest
}) {
  return (
    <Button width={width} align={align} color={color} {...rest}>
      {content}
      {dropdown ? (
        <ArrowDropDownIcon className='dropdown' />
      ) : (
        <span className='arrow'>&rarr;</span>
      )}
    </Button>
  );
}

Index.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
};

Index.defaultProps = {
  width: '100%',
  color: '#006778',
  content: '',
  align: 'center',
  dropdown: '',
};
