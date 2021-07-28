import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '230px !important',
    [theme.breakpoints.down('md')]: {
      height: 'auto !important',
    },
    paddingBottom: '30px',
  },
  title: {
    padding: '0px',
    paddingBottom: '15px',
    fontSize: '20px',
    textDecoration: 'underline',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  value: {
    fontWeight: 'bold',
  },
  mt: {
    marginTop: '5px',
  },
  btn: {
    paddingTop: '20px !important',
    paddingBottom: '0px !important',
    height: 'auto !important',
    lineHeight: 'normal !important',
  },
  divider: {
    // marginTop:'30px'
  },
}));
