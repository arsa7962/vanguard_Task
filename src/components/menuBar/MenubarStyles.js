import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  z-index: 999;
  transition: transform 0.5s;
`;
export const Div = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid #d9d9d9;
  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;
