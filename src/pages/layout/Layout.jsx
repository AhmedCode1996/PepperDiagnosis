import { Link, Outlet } from "react-router-dom";
import heroImage from "../../assets/bell-pepper.png";
import HeroBackground from "./../../assets/patternFill.png";
import styled from "styled-components";
const Layout = () => {
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
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  height: 100dvh;
  background-image: url(${HeroBackground});
  font-weight: bold;
  font-family: "El Messiri", sans-serif;
  padding: 40px;
  .hero {
    padding: 16px;
    border-radius: 50px;
    background: linear-gradient(
      var(--hero-color-secondary),
      var(--hero-color-secondary)
    );
    height: 100%;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
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
`;
