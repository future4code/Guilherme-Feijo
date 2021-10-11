import React from "react";
import styled from "styled-components";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <AdminHomePage />
      <CreateTripPage />
      <ApplicationFormPage />
      <ListTripsPage />
      <LoginPage />
      <TripDetailsPage />
    </div>
  );
}

export default App;
