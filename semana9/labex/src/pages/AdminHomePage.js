import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminHomePage() {
  const history = useHistory();
  useProtectedPage();

  const [tripsList, setTripsList] = useState([]);

  const goBack = () => {
    history.goBack();
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goToTripDetailsPage = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips"
      )
      .then((res) => {
        setTripsList(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const tripsListComponents =
    tripsList &&
    tripsList.map((t) => {
      return (
        <div key={t.id}>
          <h3 onClick={() => goToTripDetailsPage(t.id)} key={t.id}>
            {t.name}
          </h3>
          <button>x</button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToLoginPage}>LogOut</button>
      <h1>Painel do Administrador</h1>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      {tripsListComponents}
    </div>
  );
}

export default AdminHomePage;
