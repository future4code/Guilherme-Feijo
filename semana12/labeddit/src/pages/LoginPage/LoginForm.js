import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/UseForm";
import { login } from "../../services/user";
import {
  InputsContainer,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history);
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
        >
          Fazer Login
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
