import React from "react";
import axios from "axios";

export const decideCandidate = (tripId, candidateId, decision, setTrip) => {
  const body = {
    approve: decision,
  };

  axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-feijo-maryam/trips/${tripId}/candidates/${candidateId}/decide`,
      body,
      {
        headers: { auth: localStorage.getItem("token") },
      }
    )
    .then(() => {
      alert("Decisão registrada com sucesso!");
      setTrip();
    })
    .catch((err) => alert(err.response));
};
