import React from "react";
import { decideCandidate } from "../services/requests";

const CandidateCard = (props) => {
  const { id, applicationText, profession, age, name, country } =
    props.candidate;
  const decide = (decision) => {
    decideCandidate(props.tripId, id, decision, props.setTrip);
  };
  return (
    <div>
      <p>
        <b>Nome:</b> {name}
      </p>
      <p>
        <b>Profissão:</b> {profession}
      </p>
      <p>
        <b>Idade:</b> {age}
      </p>
      <p>
        <b>País:</b> {country}
      </p>
      <p>
        <b>Texto de Candidatura:</b> {applicationText}
      </p>
      <button onClick={() => decide(true)}>Aprovar</button>
      <button onClick={() => decide(false)}>Reprovar</button>
    </div>
  );
};

export default CandidateCard;
