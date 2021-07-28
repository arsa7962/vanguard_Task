import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--navy);
  color: var(--white);
  padding: 30px 0px;
`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-top: 10px;
    width: 120px;
    height: 48px;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    .input {
      text-align: left;
    }
  }
`;
export const Block2Wrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;

  max-width: 400px;
  margin: auto;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Icon = styled.div`
  padding: 6px 5px 0px;
  border: 1px solid var(--white);
  border-radius: 50%;
  margin: 0px 10px;
  opacity: 0.5;
  &:first-child {
    margin-left: 0px;
  }
`;
export const Div = styled.div`
  padding: 10px 10px;
  font-size: 0.6rem;
  text-transform: uppercase;
  text-align: left;
`;
export const Copyrights = styled.div`
  opacity: 0.5;
  font-size: 0.7rem;
  margin-top: 20px;
`;
export const Label = styled.div`
  opacity: 0.5;
  font-family: BerkeleyStd;
  line-height: 1;
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: 20px;
`;
