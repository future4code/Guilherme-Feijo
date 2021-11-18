import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/UseForms";
import useProtectedPage from "../hooks/UseProtectedPage";

function CreateTripPage() {
  const history = useHistory();
  const params = useParams();
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
    const token = localStorage.getItem("token");
    console.log(form);
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips",
        form,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        alert("Não foi possivel criar a viagem");
        console.log(err.response);
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

        <select name="planet" onChange={onChange}>
          {listPlanet.map((planet) => {
            return (
              <option key={planet} value={planet}>
                {planet}
              </option>
            );
          })}
        </select>

        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder={"Data do inicio da missão"}
          required
          type={"date"}
          min={"2022-01-01"}
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
          type="number"
          pattern={"^.{50,}"}
          title={"A duração da missão deve ter no mínimo 50 dias"}
        />
        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
}

export default CreateTripPage;
