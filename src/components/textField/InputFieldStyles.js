import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '40px',
    width: '280px',
    border: '1px solid #fff',
    backgroundColor: 'var(--deep-torquoise)',
    borderRadius: '0px',
  },
  input: {
    border: 'none',
    focus: 'none',
    padding: '0px 20px',
    width: '240px',
  },
  btn: {
    width: '40px',
    color: '#fff',
  },
}));
