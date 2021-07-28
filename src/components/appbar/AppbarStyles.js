import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '40px',
  },
  toolbar: {
    padding: '0px',
    float: 'right',
    minHeight: '40px',
    color: 'var(--white)',
    [theme.breakpoints.down('sm')]: {
      marginRight: '-15px',
    },
  },
  button: {
    boxSizing: 'unset',
    padding: '8px 15px',
    '&:hover': {
      backgroundColor: 'var(--deep-torquoise)',
    },
  },
  select: {
    maxWidth: '250px',
    color: theme.palette.primary.main,
    backgroundColor: 'var(--white)',
    borderRadius: '20px',
    border: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    padding: '0px 20px',
    margin: '0px 15px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '180px',
    },
  },
  link: {
    padding: '10px 0px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'var(--deep-torquoise)',
    },
  },
}));

export const Text = styled.div`
  color: var(--white);
  text-decoration: none;
  &:hover {
    background-color: 'var(--deep-torquoise)';
  }
  margin: 0px 15px;
  @media (max-width: 600px) {
    display: none;
  }
`;
