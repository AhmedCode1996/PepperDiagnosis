import Logo from "./../../assets/bell-pepper.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <NavHeader>
      <NavList>
        <li>
          <a href="/">افحص محصولك الان</a>
        </li>
        <li>
          <a href="/">تواصل معنا</a>
        </li>
        <li>
          <a href="/">فريق العمل</a>
        </li>
        <li>
          <a href="/">المميزات</a>
        </li>
        <li>
          <a href="/">عن التطبيق</a>
        </li>
        <li>
          <Link to={`landingPage`}>الرئيسية</Link>
        </li>
        <li>
          <a href="/">
            <Icon src={Logo} alt="bell pepper" />
          </a>
        </li>
      </NavList>
    </NavHeader>
  );
}

export default Header;

const NavHeader = styled.nav`
  padding: 32px;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px;

  li a {
    font-size: 1rem;
    color: black;
    font-weight: bold;
  }

  li:first-of-type {
    background-color: black;
    padding: 16px;
    border-radius: 32px;

    a {
      color: white;
    }
  }
  li:last-of-type {
    margin-left: auto;
  }
`;
const Icon = styled.img`
  width: 70px;
  min-width: 70px;
`;
