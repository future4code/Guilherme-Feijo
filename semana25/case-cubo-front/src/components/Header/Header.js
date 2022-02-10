import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/global/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { Button, ContainerHeader, Form, Input } from "./styled";

const Header = () => {
  const { request } = useContext(GlobalContext);
  const initialForm = {
    firstName: "",
    lastName: "",
    participation: "",
  };

  const [form, onChange, clear] = useForm(initialForm);

  const sendUser = (e) => {
    e.preventDefault();
    const { firstName, lastName, participation } = form;
    const body = {
      firstName,
      lastName,
      participation: Number(participation),
    };
    axios
      .post("https://case-cubo-back.herokuapp.com/user/create", body)
      .then((res) => {
        clear();
        request.requestUsers();
        alert(res.data.message);
      })
      .catch((err) => {
        alert("Problema inesperado");
      });
  };

  const onlyNumbers = (text) => {
    return text.replace(/[^0-9]/g, "");
  };

  return (
    <ContainerHeader>
      <Form onSubmit={sendUser}>
        <Input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={onChange}
          required
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={onChange}
          required
        />
        <Input
          name="participation"
          placeholder="Participation"
          value={form.participation}
          onChange={(e) => onChange(e, onlyNumbers)}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
    </ContainerHeader>
  );
};

export default Header;
