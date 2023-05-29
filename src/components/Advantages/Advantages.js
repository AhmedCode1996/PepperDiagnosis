import Photo from "./../../assets/المميزات.png";
import styled from "styled-components";
function Advantages() {
  return (
    <Wrapper>
      <h2>الممزيات </h2>

      <ImageWrapper>
        <img src={Photo} alt="advantages screen" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Advantages;

const Wrapper = styled.section`
  padding: 100px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3.5rem;
    font-family: "Tajawal", sans-serif;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 24px;
  }
`;

const ImageWrapper = styled.div``;
