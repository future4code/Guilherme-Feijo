import React from "react";
import styled from "styled-components";

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
  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <h3>Sua melhor experiência em viagens espaciais</h3>
      <ButtonsContainer>
        <button>Ver viagens</button>
        <button>Área de Admin</button>
      </ButtonsContainer>
    </HomePageContainer>
  );
}

export default HomePage;
