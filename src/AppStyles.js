import { createTheme } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  @media (min-width: 300px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const theme = createTheme({
  palette: {
    primary: { main: '#022737' },
    secondary: { main: '#006778' },
  },
  text: {
    primary: 'var(--text-color)',
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 991,
      lg: 1180,
    },
  },
  spacing:10,
  overrides: {
    MuiTypography: {
      root: {
        color: 'var(--text-color)',
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '40px',
      },
    },
    MuiSelect: {
      icon: {
        color: 'var(--navy)',
      },
    },
    MuiPopover: {
      paper: {
        marginTop: '18px',
        width: '250px',
        marginLeft: '-15px',
      },
    },
    MuiPaper:{
      rounded:{
        borderRadius:'0px'
      }
    },
    MuiTypography: {
      h4: {
        paddingTop: '50px',
        paddingBottom: '23px',
        fontFamily: 'BerkeleyStd',
        fontSize: ' 42px',
        fontWeight: 'bold',
        lineHeight: 1.14,
        letterSpacing: '0.5px',
        color: 'var(--navy)',
      },
      h6: {
        fontFamily: 'BerkeleyStd',
        fontSize: ' 16px',
        lineHeight:'1.5'
      },
    },
    MuiTab: {
      root: {
        minWidth: 'auto',
      },
    },
    MuiCardActions:{
      root:{
        padding:'0px'
      }
    },
  },
});
