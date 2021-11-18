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

  const logOut = () => {
    window.localStorage.removeItem("token");
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
        console.log(tripsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips/${id}`,
        {
          headers: { auth: localStorage.getItem("token") },
        }
      )
      .then(() => {
        alert("Viagem deletada com sucesso!");
        getTrips();
        console.log(tripsList);
      })
      .catch((err) => alert(err.response.data.message));
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
          <button onClick={() => deleteTrip(t.id)}>x</button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={logOut}>LogOut</button>
      <h1>Painel do Administrador</h1>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      {tripsListComponents}
    </div>
  );
}

export default AdminHomePage;
