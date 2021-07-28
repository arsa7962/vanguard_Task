import { makeStyles } from '@material-ui/core';
import { theme } from '../../AppStyles';
export const useStyles = makeStyles({
  toolbar: {
    padding: '0px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },
  },
  appbar: {
    marginTop: '40px',
    backgroundColor: 'var(--white)',
    color: 'var(--navy) !important',
    textTransform: 'uppercase',
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    fontStretch: 'condensed',
    letterSpacing: '0.5px',
    height: '80px',
    borderBottom: 'solid 1px var(--light-grey-blue)',
  },
  image: {
    width: '120px',
    height: '48px',
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  listItem: {
    padding: '28px 15px',
    opacity: 1,
    color: 'var(--navy) !important',
    textTransform: 'uppercase',
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    fontStretch: 'condensed',
    letterSpacing: '0.5px',
    height: '80px',
    '&:hover': {
      borderBottom: '4px solid var(--deep-torquoise)',
    },
  },
  icon: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});
