export default function getUsers() {
  return fetch("http://e-commerce-app.local/api/users")
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}
