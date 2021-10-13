import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginPage() {
  const history = useHistory();

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <LoginContainer>
        <label>Login</label>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="senha" />
        <button onClick={goToAdminHomePage}>Entrar</button>
      </LoginContainer>
    </div>
  );
}

export default LoginPage;
