import React from "react";
import styled from "styled-components";

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
  return (
    <div>
      <ButtonsContainer>
        <button>Voltar</button>
        <button>Inscrever-se</button>
      </ButtonsContainer>
      <h1>LISTA DE VIAGENS</h1>
    </div>
  );
}

export default ListTripsPage;
