import React from "react";
import styled from "styled-components";
import tinder from "../img/tinder.png";

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 50px;
    cursor: pointer;
  }
`;

function Header(props) {
  return (
    <div>
      <Cabecalho>
        <h1>AstroMatch</h1>
        <img src={tinder} onClick={props.changePage} />
      </Cabecalho>
      <hr />
    </div>
  );
}

export default Header;
