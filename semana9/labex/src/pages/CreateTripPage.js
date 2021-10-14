import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/UseForms";
import useProtectedPage from "../hooks/UseProtectedPage";

function CreateTripPage() {
  const history = useHistory();

  useProtectedPage();

  const goBack = () => {
    history.goBack();
  };

  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const listPlanet = [
    "Mércurio",
    "Vênus",
    "Saturno",
    "Marte",
    "Júpter",
    "Urano",
    "Netuno",
    "Terra",
  ];

  const onClickButton = (event) => {
    event.preventDefault();
    clearFields();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips",
        form,
        {
          headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5XdklneE8ycVVmQnlLSFhiVkpCIiwiZW1haWwiOiJndGZlaWpvQGdtYWlsLmNvbSIsImlhdCI6MTYzNDE1MjM3M30.KHgRkDNarvnZfql8EWVv9__VuOT0OOWvbnyxeVLdw0A",
          },
        }
      )
      .then((res) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        alert("Não foi possivel criar a viagem");
      });
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <h1>Criar Viagem</h1>
      <form onSubmit={onClickButton}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Nome da missão"}
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 caracteres"}
        />

        <select value={form.planet} name="planet" onChange={onChange}>
          {listPlanet.map((planet) => {
            return <option value={planet}>{planet}</option>;
          })}
        </select>

        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder={"Data do inicio da missão"}
          required
          type={"date"}
          min={"2021-01-01"}
        />

        <input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={"Descrição da missão"}
          required
          type="text"
          pattern={"^.{5,}"}
          title={"Descrição deve ter no mínimo 30 caracteres"}
        />

        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder={"Duração da missão em dias"}
          required
          type="text"
          pattern={"^.{50,}"}
          title={"A duração da missão deve ter no mínimo 50 dias"}
        />
        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
}

export default CreateTripPage;
