import styled from "styled-components";

export default function Orders() {
  return (
    <Wrapper>
      <h3>Your Orders</h3>
      <ul>
        <li>Name</li>
        <li>ID</li>
        <li>Price in $</li>
        <li>Quantity</li>
        &times;
      </ul>
      <ul>
        <li>Name</li>
        <li>ID</li>
        <li>Price in $</li>
        <p>Quantity</p>
        &times;
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  font-size: 1.2rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    align-items: center;
    background: blanchedalmond;
    padding: 15px;
    width: 355px;
    margin: 1rem auto;
  }
`;
