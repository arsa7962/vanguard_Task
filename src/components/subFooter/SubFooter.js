import { Cast, Facebook, Mail, Twitter, YouTube } from '@material-ui/icons';

import { subFooter } from '../../mockData/Strings';
import Input from '../textField/InputField';
import logo from '../../images/VanguardLogoWhite_0.png';

import {
  Wrapper,
  Div,
  IconWrapper,
  Icon,
  InnerWrapper,
  Block2Wrapper,
  Copyrights,
  Label,
} from './SubFooterStyles';
import { Container } from '../../AppStyles';

const Block1 = () => {
  return (
    <div>
      <img src={logo} alt='Logo' />
      <IconWrapper>
        <Icon>
          <Facebook fontSize='small' />
        </Icon>
        <Icon>
          <Twitter fontSize='small' />
        </Icon>
        <Icon>
          <YouTube fontSize='small' />
        </Icon>
        <Icon>
          <Cast fontSize='small' />
        </Icon>
        <Icon>
          <Mail fontSize='small' />
        </Icon>
      </IconWrapper>
      <Copyrights>{subFooter.block1}</Copyrights>
    </div>
  );
};
const Map = (data) => {
  return data.map((value) => {
    return <Div key={value}>{value}</Div>;
  });
};
const Block2 = () => {
  return (
    <Block2Wrapper>
      <Div>{Map(subFooter.block2)}</Div>
      <Div>{Map(subFooter.block3)}</Div>
    </Block2Wrapper>
  );
};
const Block3 = () => {
  return (
    <div>
      <Label>{subFooter.block4[0]}</Label>
      <Input placeholder={subFooter.block4[1]}/>
    </div>
  );
};

export default function Index() {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Block1 />
          <Block2 />
          <Block3 />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
}
