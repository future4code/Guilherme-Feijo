import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/UseForms";

const ApplicationFormPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const [form, onChange, clearFields] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const [trips, setTrips] = useState();
  const [idTrip, setIdTrip] = useState();
  const [country, setCountry] = useState();

  const onChangeTrips = (e) => {
    setIdTrip(e.target.value);
  };

  useEffect(() => {
    getCountry();
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCountry = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickButton = (event, tripId) => {
    event.preventDefault();

    clearFields();
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips/${idTrip}/apply`,
        form
      )
      .then((res) => {
        alert("Sucesso");
      })
      .catch((err) => {
        alert("Erro! Cadastro não realizado");
      });
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <h1>Inscreva-se para uma viagem</h1>
      <div>
        <form onSubmit={onClickButton}>
          <div>
            <select name="trips" onChange={onChangeTrips} value={idTrip}>
              {trips && (
                <>
                  {trips.map((trip) => {
                    return (
                      <option key={trip.id} value={trip.id}>
                        {" "}
                        {trip.name}{" "}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
          </div>
          <div>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 caracteres"}
            />
          </div>
          <div>
            <input
              name="age"
              value={form.age}
              onChange={onChange}
              placeholder={"Idade"}
              required
              type="number"
              min={18}
            />
          </div>
          <div>
            <input
              name="applicationText"
              value={form.applicationText}
              onChange={onChange}
              placeholder={"Motivos para ir?"}
              required
              type="text"
              pattern={"^.{30,}"}
            />
          </div>
          <div>
            <input
              name="profession"
              value={form.profession}
              onChange={onChange}
              placeholder={"Profissão"}
              required
              type="text"
              pattern={"^.{3,}"}
            />
          </div>
          <div>
            <select
              name="country"
              onChange={onChangeTrips}
              value={form.country}
            >
              {country && (
                <>
                  {country.map((country) => {
                    return (
                      <option key={country.name} value={country.name}>
                        {" "}
                        {country.name}{" "}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
          </div>

          <button type="submit">Aplicar a viagem</button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
