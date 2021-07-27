import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../AppStyles';
export const useStyles = makeStyles({
  toolbar: {
    padding:'0px',
    justifyContent: 'space-between',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },

  },
  appbar: {
    marginTop: '40px',
    backgroundColor: '#fff',
    color: 'var(--navy)',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontStretch: 'condensed',
    letterSpacing: '0.5px',
    height: '80px',
    borderBottom:'solid 1px var(--light-grey-blue)'
  },
  image: {
    width: '120px',
    height: '48px',
  },
  list: {
    display: 'flex',
    '& :nth-child(1)': {
      borderBottom: '4px solid var(--deep-torquoise)',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  listItem: {
    padding: '30px 15px',
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
