export default function getProducts() {
  return fetch("http://e-commerce-app.local/api/products")
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}
