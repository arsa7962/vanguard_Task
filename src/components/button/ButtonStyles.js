import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  text-align: ${(props) => props.align };
  text-transform: uppercase;
  color: ${(props) => props.color === '#fff' ? 'var(--deep-torquoise)' : '#fff'};
  font-family: var(--helvetica);
  font-size: 14px;
  font-weight: 900;
  font-stretch: condensed;
  line-height: 1.67;
  letter-spacing: 0.5;
  background-color: ${(props) => props.color};
  height: 72px;
  padding: 20px 0px;
  width: ${(props) => props.width};
  box-sizing: border-box;
  .arrow {
    margin-bottom: -7px;
    margin-left: 10px;
  }
`;
