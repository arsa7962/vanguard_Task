import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  text-align: ${(props) => props.align};
  text-transform: uppercase;
  color: ${(props) =>
    props.color === 'white' ? 'var(--deep-torquoise)' : 'var(--white)'};
  font-family: var(--helvetica);
  font-size: 14px;
  font-weight: bold;
  font-stretch: condensed;
  line-height: 1.67;
  letter-spacing: 0.5;
  background-color: ${(props) => props.color};
  height: 50px;
  width: ${(props) => props.width};
  box-sizing: border-box;
  .dropdown {
    margin-bottom: -5px;
    margin-left: 10px;
  }
  .arrow {
    font-size: 20px;
    display: inline-block;
    position: relative;
    /* top:2px; */
    margin-left: 10px;
  }
`;
