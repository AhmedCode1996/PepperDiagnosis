import { useState } from "react";
import { useGlobalContext } from "../../globalData";
import upload from "../../assets/upload.png";
import uploadBtn from "./../../assets/upload button.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const URL = "https://pepper-true.herokuapp.com/";

const Home = () => {
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();
  const { setFormState } = useGlobalContext();

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setPicture(selectedFile);
  };

  const uploadHandler = async (event) => {
    event.preventDefault();
    if (picture) {
      try {
        const formData = new FormData();
        formData.append("picture", picture);
        const response = await fetch(URL, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (response.ok) {
          console.log("Image uploaded!");
          setFormState((prev) => {
            return {
              ...prev,
              url: data.url,
              status: data.status,
              output: data.output,
            };
          });
          navigate("/result");
        } else {
          console.log(response);
          console.log(picture);
          console.error("Error uploading image.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Wrapper className="form-container">
      <h3>من فضلك ارفع صورة ورقة المحصول</h3>
      <form className="form">
        <h2 className="form-heading">ارفع الصورة من هنا</h2>
        <div className="main-form">
          <input
            onChange={imageHandler}
            type="file"
            name="fileUpload"
            accept="image/*"
          />
          <label htmlFor="file-upload" id="file-drag">
            <img className="upload-input-icon" src={upload} alt="Preview" />
            <p>PNG, JPG الصور المسموح بها للرفع من الصيغ التالية</p>
          </label>
        </div>
        <div onClick={uploadHandler} className="submitBtn">
          <img src={uploadBtn} alt="upload button" />
          <button type="button">ارفع</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  position: relative;
  max-width: fit-content;
  margin-inline: auto;
  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ebdab9;
    border-radius: 50px;
    padding: 24px 32px 32px 32px;
  }
  .form-heading {
    color: #888b94;
    margin-bottom: 8px;
  }
  .submitBtn {
    background-color: hsl(60deg 1.49% 13.14%);
    cursor: pointer;
    padding: 4px 40px;
    display: flex;
    gap: 10px;
    border-radius: 200px;
    position: absolute;
    bottom: -56px;
    left: 0;

    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-weight: bold;
    }
  }
  .main-form {
    background-color: white;
    padding: 16px;
    border-radius: 24px;
    border: 2px dashed #888b94;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input {
    position: absolute;
    inset: 0;
    opacity: 0;
  }
  label {
    display: block;

    img {
      margin-inline: auto;
    }
    p {
      color: #888b94;
    }
  }
  .upload-input-icon {
    max-width: 50px;
  }
`;
