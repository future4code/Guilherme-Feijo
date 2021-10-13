import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function AdminHomePage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToLoginPage}>LogOut</button>
      <h1>Painel do Administrador</h1>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
    </div>
  );
}

export default AdminHomePage;
