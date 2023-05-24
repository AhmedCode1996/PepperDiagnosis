import styled from "styled-components";
import { useGlobalContext } from "../../globalData";
import Image from "../../assets/download.jpeg";
const Result = () => {
  const { formState } = useGlobalContext();
  const result =
    formState.output === 0 ? "ثمرة الفلفل مصابة" : "ثمرة الفلفل غير مصابة";
  const information =
    formState.output === 0
      ? formState.scanContent.infected
      : formState.scanContent.nonInfected;
  const label = formState.output === 0 ? "ماهى أسباب الأمراض" : "تتصرف إزاى";
  return (
    <Wrapper>
      <h2 style={{ textAlign: "right" }}>الصورة الخاصة بمحصولك</h2>
      <div className="content">
        <div className="issue-info">
          <div className="issue-details">
            <LabelElement>{label}</LabelElement>
            <DetailsWrapper>
              {information.map((el, index) => {
                return <p key={index}>{el}</p>;
              })}
            </DetailsWrapper>
          </div>
          <button>افحص من جديد</button>
        </div>
        <div className="issue-image">
          <ImageWrapper result={result}>
            <img src={Image} alt="Pepper" />
            <ResultElement>{result}</ResultElement>
          </ImageWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .content {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .content .issue-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    font-weight: bold;
    font-family: "Almarai", sans-serif;
  }
  .issue-info .issue-details {
    padding: 64px 16px 32px 16px;
    background-color: white;
    border-radius: 40px 0 40px 40px;
    position: relative;
  }
  .issue-info button {
    font: inherit;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    padding: 10px 32px;
    border-radius: 50px;
    cursor: pointer;
  }
  .content .issue-image {
    flex: 1;
  }
`;
const DetailsWrapper = styled.div`
  text-align: right;
  p {
    font: inherit;
    font-size: 0.8rem;
  }

  & > * + * {
    margin-top: 12px;
  }
`;
const ImageWrapper = styled.div`
  padding: 16px;
  background-color: #ebd8b7;
  border-radius: 24px;
  position: relative;

  & img {
    max-width: 100%;
    border-radius: 24px;
  }
`;
const ResultElement = styled.div`
  position: absolute;
  bottom: -14.5%;
  left: 25%;
  background-color: #243e86;
  color: white;
  padding: 16px 32px;
  border-radius: 0px 0px 25px 25px;
  font-weight: bold;
  font-family: "Almarai", sans-serif;
`;

const LabelElement = styled.div`
  background-color: #243e86;
  color: white;
  padding: 16px 32px;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25px;
  font: inherit;
`;

export default Result;
