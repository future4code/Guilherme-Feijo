import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-weight: bolder;
    font-size: 100pt;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 1vw;

  button {
    margin: 1vw;
  }
`;

function HomePage() {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <h3>Sua melhor experiência em viagens espaciais</h3>
      <ButtonsContainer>
        <button onClick={goToListTripsPage}>Ver viagens</button>
        <button onClick={goToLoginPage}>Área de Admin</button>
      </ButtonsContainer>
    </HomePageContainer>
  );
}

export default HomePage;
