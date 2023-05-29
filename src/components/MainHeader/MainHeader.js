import Hero from "./../Hero/Hero";
import Header from "./../Header/Header";
import styled from "styled-components";
import HeroBg from "./../../assets/Bg.png";
function MainHeader() {
  return (
    <FullHeader>
      <Header />
      <Hero />
    </FullHeader>
  );
}

export default MainHeader;

const FullHeader = styled.div`
  background-image: url(${HeroBg});
  background-size: 70%;
  background-repeat: no-repeat;
`;
