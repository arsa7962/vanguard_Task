import { Container } from '../../AppStyles';
import { subNav } from '../../mockData/Strings';
import { Wrapper, Div } from './MenubarStyles';
const Items = () => {
  return (
    <div>
      {subNav.map((data) => (
        <Div>{data.title}</Div>
      ))}
    </div>
  );
};

export default function Menubar() {
  return (
    <Wrapper>
      <Container>
        <Items />
      </Container>
    </Wrapper>
  );
}
