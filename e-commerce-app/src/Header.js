import styled from "styled-components";

export default Header;

function Header() {
  return <Wrapper>E-Commerce</Wrapper>;
}

const Wrapper = styled.header`
  background: blanchedalmond;
  width: 100vw;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 1.4em;
`;
