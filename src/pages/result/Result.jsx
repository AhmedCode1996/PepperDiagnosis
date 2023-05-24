import styled from "styled-components";
import { useGlobalContext } from "../../globalData";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Result = () => {
  const resultRef = useRef();
  const [resultHeight, setResultHeight] = useState(0);
  const [resultWidth, setResultWidth] = useState(0);
  const navigate = useNavigate();
  const { formState } = useGlobalContext();
  const result =
    formState.output === 0 ? "ثمرة الفلفل مصابة" : "ثمرة الفلفل غير مصابة";
  const information =
    formState.output === 0
      ? formState.scanContent.infected
      : formState.scanContent.nonInfected;
  const label = formState.output === 0 ? "ماهى أسباب الأمراض" : "تتصرف إزاى";
  useEffect(() => {
    console.log(resultRef.current.getBoundingClientRect());

    setResultHeight(resultRef.current.getBoundingClientRect().height);
    setResultWidth(resultRef.current.getBoundingClientRect().width);
  }, []);
  return (
    <Wrapper>
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: "900",
          marginRight: "3rem",
        }}
      >
        الصورة الخاصة بمحصولك
      </h2>
      <div className="content">
        <div className="issue-info">
          <div className="issue-details">
            <LabelElement>{label}</LabelElement>
            <DetailsWrapper output={formState.output}>
              {information.map((el, index) => {
                return <p key={index}>{el}</p>;
              })}
            </DetailsWrapper>
          </div>
          <button onClick={() => navigate("/")}>افحص من جديد</button>
        </div>
        <div className="issue-image">
          <ImageWrapper>
            <img src={formState.url} alt="Pepper" />
            <ResultElement
              ref={resultRef}
              width={resultWidth}
              height={resultHeight}
            >
              <h3> {result}</h3>
            </ResultElement>
          </ImageWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 12px;
  font-weight: bold;
  font-family: "El Messiri", sans-serif;
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .content .issue-info {
    flex: 2 1 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    font-weight: bold;
    font-family: "Almarai", sans-serif;
  }
  .issue-info .issue-details {
    padding: 50px 16px 32px 16px;
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
    flex: 1 1;
    position: relative;
  }
`;
const DetailsWrapper = styled.div`
  & > * + * {
    margin-top: ${(props) => (props.output === 0 ? 0.725 + "em" : 0.35 + "em")};
  }
  p {
    font: inherit;
    font-size: clamp(0.7rem, 0.9rem, 1rem);
    text-align: right;
  }
`;
const ImageWrapper = styled.div`
  padding: 16px;
  background-color: #ebd8b7;
  border-radius: 24px;
  width: fit-content;
  margin-inline: auto;
  position: relative;

  & img {
    width: 16rem;
    height: 16rem;
    border-radius: 24px;
    margin-inline: auto;
  }
`;
const ResultElement = styled.div`
  position: absolute;
  left: 0;
  bottom: ${(props) => props.height * -1 + "px"};
  width: 100%;

  h3 {
    background-color: #243e86;
    color: white;
    width: fit-content;
    margin-inline: auto;
    padding: 8px 32px;
    border-radius: 0px 0px 25px 25px;
    font-weight: bold;
    font-family: "Almarai", sans-serif;
    font-size: 1rem;
  }
`;

const LabelElement = styled.div`
  background-color: #243e86;
  color: white;
  padding: 8px 32px;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25px;
  font: inherit;
`;

export default Result;
