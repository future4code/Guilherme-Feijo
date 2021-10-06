import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MatchContainer from "./components/MatchContainer";
import styled from "styled-components";
import MatchList from "./components/MatchList";

const ClearButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

function App() {
  const [Page, setPage] = useState(true);

  const changePage = () => {
    setPage(!Page);
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-feijo-maryam/clear"
      )
      .then((response) => {
        alert("Lista de matches apagada");
      })
      .catch((err) => {
        alert("Erro ao apagar");
      });
  };

  return (
    <div>
      <Header Page={Page} changePage={changePage} />
      {Page ? <MatchContainer /> : <MatchList />}
      <ClearButton>
        <button onClick={clear}>Limpar swipes e matches</button>
      </ClearButton>
    </div>
  );
}

export default App;
