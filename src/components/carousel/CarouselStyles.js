import { makeStyles } from '@material-ui/core';
import logo from '../../images/vc-logo-cmyk-leaf-01.jpg';

export const useStyles = makeStyles((theme) => ({
  carousel: {
    marginTop: '30px',
    boxShadow: '0 9px 21px 0 rgba(0, 0, 0, 0.08)',
    position: 'relative',
  },
  root: {
    minHeight: '172px',
    boxSizing: 'border-box',
    padding: '28px 72px',
    backgroundImage: `url(${logo})`,
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      padding: '28px 50px',
    },
  },
  title: {
    fontFamily: 'BerkeleyStd',
    fontSize: '24px',
    color: 'var(--navy)',
    lineHeight: 1.25,
    letterSpacing: '0.5px',
    fontWeight: 500,
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: 1.3,
    },
  },
  contentWrapper: {
    display: 'flex',
    zIndex: 250,
    padding: '0px !important',
    justifyContent: 'space-between',
    '& div:last-child': {
      maxWidth: '700px',
    },
    '& div:first-child': {
      maxWidth: '201px',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  image: {
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    zIndex: 99,
  },
  btn: {
    backgroundColor: 'transparent !important',
  },
}));
