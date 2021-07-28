import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 70px 0px;
`;
export const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 'bold',
  },
  wrapper: {
    marginTop: '217px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '237px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '260px',
    },
  },
  btn: {
    marginBottom: '38px',
  },
}));
