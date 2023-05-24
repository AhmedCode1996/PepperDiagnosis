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
 
`;
