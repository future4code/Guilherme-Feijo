import axios from "axios";
import React from "react";
import useForm from "../hooks/UseForms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { countries } from "../constants/countries";

const ApplicationFormPage = () => {
  const [form, onChange, cleanFields] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const history = useHistory();
  const [tripId, setTripId] = useState("");
  const [arraytrips, setArrayTrips] = useState([]);

  const Apply = async () => {
    console.log("form:", form);
    try {
      const response = await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips/${tripId}/apply`,
        form
      );
      alert(response.data.message);
    } catch (err) {
      console.log("Error: ", err.response);
    }
  };

  const getTrips = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips"
      );
      console.log(response.data);
      setArrayTrips(response.data.trips);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const submitForm = (event) => {
    event.preventDefault();
    Apply();
    cleanFields();
  };

  const onChangeTrip = (e) => {
    setTripId(e.target.value);
  };

  const tripsComponents =
    arraytrips &&
    arraytrips.map((trip) => {
      return (
        <option key={trip.id} value={trip.id}>
          {trip.name}
        </option>
      );
    });

  const countryComponents = countries.map((countries) => {
    return (
      <option key={countries} value={countries}>
        {countries}
      </option>
    );
  });
  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <h1>Formulário de inscrição</h1>
      <form onSubmit={submitForm}>
        <select defaultValue="" onChange={onChangeTrip}>
          <option value="" disabled>
            Escolha uma viagem
          </option>
          {tripsComponents}
        </select>
        <input
          placeholder={"Nome"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}$"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          required
        />
        <input
          placeholder={"Idade"}
          type={"number"}
          name={"age"}
          value={form.age}
          onChange={onChange}
          required
          min={18}
        />
        <input
          placeholder={"Texto de Candidatura"}
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          required
          pattern={"^.{30,}$"}
          title={"O texto deve ter no mínimo 30 caracteres"}
        />
        <input
          placeholder={"Profissão"}
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          required
          pattern={"^.{10,}$"}
          title={"A profissão deve ter no mínimo 10 caracteres"}
        />
        <select
          placeholder={"País"}
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value={""} disabled>
            Escolha um Pais
          </option>
          {countryComponents}
        </select>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
