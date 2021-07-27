import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    color: 'var(--deep-torquoise)',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  amount: {
    color: '#a8b400',
    fontSize: '2rem',
  },
  btn: {
    fontSize: '0.7rem !important',
  },
  icon: {
    width: '15px',
    marginLeft: '5px',
    marginBottom: '-6px',
  },
}));
