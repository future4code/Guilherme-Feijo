import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import heart from "../img/heart.png";
import heartbreak from "../img/heartbreak.png";

const MatchPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30vw;
  width: 40vw;
  height: auto;
  border: solid 1px black;

  p {
    padding: 10px;
    margin-top: 0;
  }
`;

const ImgPerfil = styled.img`
  width: 100%;
  max-height: 60vh;
`;

const SwipeButtons = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30vw;

  img {
    width: 50px;
    cursor: pointer;
  }
`;

function MatchContainer() {
  useEffect(() => {
    getProfilToChoose();
  }, []);

  const [profile, setProfile] = useState({});
  const getProfilToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-feijo-maryam/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = (value, id) => {
    const body = {
      id: id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-feijo-maryam/choose-person",
        body
      )
      .then((response) => {
        getProfilToChoose();
        if (response.data.isMatch === true) {
          alert("Que amor!");
        }
      })
      .catch((err) => {
        console.log("Erro ao escolher", err);
      });
  };

  return (
    <div>
      {profile.name ? (
        <MatchPlace>
          <ImgPerfil src={profile.photo} />
          <h3>
            {profile.name}, {profile.age}
          </h3>
          <p>{profile.bio}</p>
        </MatchPlace>
      ) : (
        <p>Carregando</p>
      )}
      <SwipeButtons>
        <img src={heartbreak} onClick={() => choosePerson(false, profile.id)} />
        <img src={heart} onClick={() => choosePerson(true, profile.id)} />
      </SwipeButtons>
    </div>
  );
}

export default MatchContainer;
