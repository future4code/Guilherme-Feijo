import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TripCard from "../components/TripCard";
import { useState, useEffect } from "react";

const ListTripsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ListTripsPage() {
  const history = useHistory();
  const [tripsList, setTripsList] = useState([]);

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
      return <TripCard key={t.id} trip={t} />;
    });

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  return (
    <div>
      <ButtonsContainer>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </ButtonsContainer>
      <h1>LISTA DE VIAGENS</h1>
      {tripsListComponents && tripsListComponents.length > 0 ? (
        tripsListComponents
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ListTripsPage;
