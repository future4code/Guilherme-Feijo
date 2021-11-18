import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import axios from "axios";
import { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";

function TripDetailsPage() {
  const history = useHistory();
  const params = useParams();
  const [trip, setTrip] = useState({});
  useProtectedPage();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setTrip(response.data);
        console.log("esse", response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const candidatesComponents =
    trip.trip &&
    trip.trip.candidates.map((candidate) => {
      return (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          tripId={params.id}
          setTrip={setTrip}
        />
      );
    });

  const approvedCandidates =
    trip &&
    trip.trip &&
    trip.trip.approved.map((candidate) => {
      return <li key={candidate.id}>{candidate.name}</li>;
    });

  return (
    <div>
      {trip.trip && trip.trip && (
        <div>
          <button onClick={goBack}>Voltar</button>
          <h1>{trip.trip.name}</h1>
          <h3>Descrição: {trip.trip.description}</h3>
          <h4>Planeta: {trip.trip.planet}</h4>
          <h4>Duração: {trip.trip.durationInDays} dias</h4>
          <h4>Data: {trip.trip.date}</h4>
        </div>
      )}
      <h3>Candidatos pendentes</h3>
      {candidatesComponents && candidatesComponents.length > 0 ? (
        candidatesComponents
      ) : (
        <p>Não há candidatos pendentes</p>
      )}

      <h3>Candidatos aprovados</h3>
      {approvedCandidates && approvedCandidates.length > 0 ? (
        approvedCandidates
      ) : (
        <p>Não há candidatos aprovados</p>
      )}
    </div>
  );
}

export default TripDetailsPage;
