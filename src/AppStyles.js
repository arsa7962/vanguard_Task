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
    primary: '#505050',
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 991,
      lg: 1180,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#505050',
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '40px',
      },
    },
    MuiSelect: {
      icon: {
        color: '#022737',
      },
    },
    MuiPopover: {
      paper: {
        marginTop: '18px',
        width: '250px',
        marginLeft: '-15px',
      },
    },
    MuiTypography: {
      h4: {
        marginTop: '40px',
        marginBottom: '10px',
        fontFamily: 'BerkeleyStd',
        fontSize: ' 42px',
        fontWeight: 'bold',
        lineHeight: 1.14,
        letterSpacing: '0.5px',
        color: '#022737',
      },
      h6: {
        fontFamily: 'BerkeleyStd',
        fontSize: ' 1rem',
      },
    },
    MuiTab: {
      root: {
        minWidth: 'auto',
      },
    },
    MuiCard: {
      root: {
        height: '172px',
        marginBottom: '20px',
      },
    },
  },
});
