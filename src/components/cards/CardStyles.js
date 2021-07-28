import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '172px !important',
    marginBottom: '20px',
    padding: '20px 30px',
    boxShadow: '0 9px 21px 0 rgba(128, 152, 213, 0.08)',
  },
  content: { padding: '0px !important' },
  title: {
    color: 'var(--deep-torquoise)',
    fontSize: '24px',
    lineHeight: 1.25,
    letterSpacing: '0.5px',
    fontFamily: 'BerkeleyStd',
    marginBottom: '5px',
  },
  amount: {
    color: '#a8b400',
    fontSize: '42px',
    fontWeight: 300,
    lineHeight: 'normal',
  },
  btn: {
    marginTop: '28px !important',
    padding: '0px !important',
    lineHeight: 'normal !important',
    letterSpacing: '0.5px !important',
    height: 'auto !important',
  },
  icon: {
    width: '15px',
    marginLeft: '5px',
    marginBottom: '-6px',
  },
}));
