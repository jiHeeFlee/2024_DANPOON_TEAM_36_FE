import styled from 'styled-components';
import themeGet from '../utils/themeGet';


const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>

        <Favicon src="/logo.ico" alt="Favicon" />
        <FooterCopyright>© 2024 YE;Summit | YE;ser. 모든 권리 보유.</FooterCopyright>
        
        <FooterLinks>
          <Link href="https://cake-tumble-2da.notion.site/13fc6efb7541805cbd18f9b49790c52d?pvs=4" target="_blank">
          서비스 이용약관</Link>
          <Link href="https://cake-tumble-2da.notion.site/13fc6efb754180b2937dce677af779c0?pvs=4" target="_blank">
          개인정보 처리방침</Link>
          <Link href="/">서비스 소개</Link>
          <Link to="#">연락 및 문의</Link>
        </FooterLinks>

        <From>대한민국</From>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;


const FooterWrapper = styled.footer`
  width: 100%;
  padding: 40px 0;
  bottom: 0;
  font-size: 13px;
  color: #6e7781;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d0d7de;
  background-color: ${themeGet('color.100')};
  margin-top: 40px;
`;

const FooterContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Favicon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FooterCopyright = styled.span`
  margin-right: 5vw;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
  margin: 0 5vw 0 0.4vw;
`;

const Link = styled.a`
  color: ${themeGet('color.main')};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const From = styled(FooterCopyright)`
    margin-left: 5vw;
    margin-right: 0;
`