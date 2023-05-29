import styled from "styled-components";
import Logo from "./../../assets/bell-pepper.png";
import FooterBg from "./../../assets/Footer.png";
function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <ImageWrapper>
          <img src={Logo} alt="logo" />
        </ImageWrapper>
        <p>All Copyrights Reserved©2022-2023</p>
      </FooterWrapper>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.footer`
  background-image: url(${FooterBg});
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 64px;

  p {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;
const ImageWrapper = styled.div`
  width: 100px;
  max-width: 100px;
  margin-bottom: 12px;
`;
