import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default Footer;

function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLinkStyled to="/">Products</NavLinkStyled>
        <NavLinkStyled to="/customer">Customer</NavLinkStyled>
        <NavLinkStyled to="/orders">Orders</NavLinkStyled>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: blanchedalmond;
  width: 100vw;
  padding: 20px;
  position: fixed;
  bottom: 0;
  font-weight: bold;
  nav {
    display: flex;
    justify-content: space-evenly;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #1f2151;
  :hover {
    color: deepskyblue;
  }
`;
