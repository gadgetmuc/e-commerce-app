import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import getProducts from "./services/getProducts";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Wrapper>
      {products
        ? products.map(({ id, name, price, description }) => (
            <ProductCard key={id}>
              <ul>
                <li>
                  <h4>{name}</h4>
                </li>
                <li>{price} $</li>
                <li>{description}</li>
              </ul>
            </ProductCard>
          ))
        : console.log("No data in products")}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 100px;
`;

const ProductCard = styled.div`
  width: 355px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  background: blanchedalmond;
  padding: 1.5rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  h4 {
    margin: 0;
    font-size: 1.4rem;
  }

  li {
    list-style: none;
  }
`;
