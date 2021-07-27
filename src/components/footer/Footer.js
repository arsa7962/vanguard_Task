import { Container } from '../../AppStyles';
import { Wrapper, Image } from './footerStyles';

import FooterLogo from '../../images/footer_logo.png';
import { footer } from '../../mockData/Strings';

export default function index() {
  console.log('Footer.js');
  return (
    <Wrapper>
      <Container>
        <Image src={FooterLogo} alt='Logo' />
        <div>{footer}</div>
      </Container>
    </Wrapper>
  );
}
