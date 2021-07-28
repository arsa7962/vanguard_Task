import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  accountDetails: {
    margin: '50px 0px',
    backgroundColor: 'var(--white-two)',
    padding: '50px 0px',
  },
  buttonWrapper: {
    marginTop: '10px',
    '&:nth-type(4) button': {
      backgroundColor: 'var(--white)',
      color: 'var(--deep-torquoise)',
    },
  },
  button: {
    margin: '0px 10px',
  },
}));
