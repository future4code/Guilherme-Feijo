import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/UseUnprotectedPage";
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { ScreenContainer, SignUpButtonContainer } from "./styled";

const LoginPage = () => {
  const history = useHistory();
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <h1>LabEddit</h1>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Não é cadastrado? Cadastre-se aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
