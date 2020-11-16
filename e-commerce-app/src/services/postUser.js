export default function postUser(name, email) {
  const user = { name: name, email: email };

  return fetch("http://e-commerce-app.local/api/create-user", {
    method: "post",
    mode: "no-cors",
    body: JSON.stringify(user),
  })
    .then((result) => result.text())
    .catch((error) => console.log("error", error));
}
