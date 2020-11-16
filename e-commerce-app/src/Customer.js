import { useEffect, useState } from "react";
import styled from "styled-components";
import getUsers from "./services/getUsers";
import postUser from "./services/postUser";

export default function Customer() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {}, [name]);
  useEffect(() => {}, [email]);

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    postUser(name.name, email.email);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        Name:
        <label>
          <input
            type="text"
            placeholder="Write your name"
            onKeyDown={handleNameInput}
            value={name}
            onChange={handleNameInput}
          />
        </label>
        E-mail:
        <label>
          <input
            type="email"
            placeholder="Write your email"
            onKeyDown={handleEmailInput}
            value={email}
            onChange={handleEmailInput}
          />
        </label>
        <button>Sign</button>
      </form>
      <h3>User data</h3>
      {users
        ? users.map(({ id, name, email }) => (
            <div key={id}>
              Name:
              <p>{name}</p>
              Email:
              <p>{email}</p>
            </div>
          ))
        : console.log("No data in users")}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    gap: 10px 0;
  }

  button {
    border: none;
    color: white;
    padding: 0.5rem 2rem;
    border-radius: 100px;
    background: #3792cb;
    box-shadow: 2px 2px 5px #45b6fe;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 355px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    background: blanchedalmond;
    padding: 1rem;
  }
`;
