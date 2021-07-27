import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 70px 0px;
`;
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '220px',
  },
  btn: {
    marginTop: '20px',
    marginBottom: '50px',
  },
}));
