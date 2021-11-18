import React from "react";

const TripCard = (props) => {
  const { name, description, planet, durationInDays, date } = props.trip;

  return (
    <div>
      <p>
        <b>Nome:</b> {name}
      </p>
      <p>
        <b>Descrição:</b> {description}
      </p>
      <p>
        <b>Planeta:</b> {planet}
      </p>
      <p>
        <b>Duração:</b> {durationInDays}
      </p>
      <p>
        <b>Data:</b> {date}
      </p>
    </div>
  );
};

export default TripCard;
