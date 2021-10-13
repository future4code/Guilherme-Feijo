import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <h1>Viagem 1</h1>
      <h3>Candidatos pendentes</h3>
      <h3>Candidatos aprovados</h3>
    </div>
  );
}

export default TripDetailsPage;
