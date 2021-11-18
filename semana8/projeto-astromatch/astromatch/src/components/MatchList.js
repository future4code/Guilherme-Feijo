import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const MatchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgMatches = styled.img`
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 50%;
`;

function MatchList() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getMatches();
  }, [match]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-feijo-maryam/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const matchesComponents = match.map((profile) => {
    return (
      <MatchBox>
        <ImgMatches src={profile.photo} />
        <h5>{profile.name}</h5>
      </MatchBox>
    );
  });

  return (
    <ListContainer>
      <h2>Seus Matches</h2>
      {matchesComponents}
    </ListContainer>
  );
}

export default MatchList;
