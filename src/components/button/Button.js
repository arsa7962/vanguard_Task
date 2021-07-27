import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from './ButtonStyles';

export default function Index({ width,align,color, content, ...rest }) {
  return (
    <Button width={width} align={align} color={color} {...rest}>
      {content}
      <ArrowForwardIcon className='arrow' />
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
  align:'center'
};
