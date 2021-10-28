import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/UseForm";
import { login } from "../../services/user";
import {
  InputsContainer,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import { CircularProgress } from "@material-ui/core";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setIsLoading);
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
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Fazer Login</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
