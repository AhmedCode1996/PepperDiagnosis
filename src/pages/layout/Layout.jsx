import { Link } from "react-router-dom";
import heroImage from "../../assets/bell-pepper.png";
import upload from "../../assets/upload.png";
import uploadBtn from "./../../assets/upload button.png";
import HeroBackground from "./../../assets/patternFill.png";
import styled from "styled-components";
import { useState } from "react";
// import { useGlobalContext } from "../../globalData";
const URL = "https://pepperdiagnosis.herokuapp.com";
// const URL2 = "https://v2.convertapi.com/upload ";
const Layout = () => {
  const [picture, setPicture] = useState(null);
  // const { formState, setFormState } = useGlobalContext();

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
          // mode: "no-cors",
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Image uploaded!");
          console.log(response);
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
    <Wrapper>
      <div className="hero">
        <header>
          <div className="img-wrapper">
            <img className={heroImage} src={heroImage} alt="bell pepper logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link>الرئيسية</Link>
              </li>
              <li>
                <Link>عن التطبيق</Link>
              </li>
              <li>
                <Link>المميزات</Link>
              </li>
              <li>
                <Link>فريق العمل</Link>
              </li>
              <li>
                <Link>تواصل معنا</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="form-container">
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${HeroBackground});
  display: flex;
  align-items: center;
  justify-content: center;
  .hero {
    display: flex;
    flex-direction: column;
    gap: 64px;
    flex-basis: 92%;
    padding: 16px;
    height: 90%;
    border-radius: 50px;
    background: linear-gradient(
      var(--hero-color-secondary),
      var(--hero-color-secondary)
    );
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  nav ul {
    display: flex;
    flex-direction: row-reverse;
  }
  li a {
    padding: 8px;
    font-weight: bold;
    color: black;
  }
  .img-wrapper {
    width: 100px;
  }
  .form-container {
    position: relative;
    max-width: fit-content;
    margin-inline: auto;
  }
  .form-container h3 {
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
