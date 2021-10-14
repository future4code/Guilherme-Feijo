import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <LoginContainer>
        <label>Login</label>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Entrar</button>
      </LoginContainer>
    </div>
  );
}

export default LoginPage;
