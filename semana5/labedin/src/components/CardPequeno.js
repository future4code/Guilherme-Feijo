import React from 'react';
import styled from "styled-components";

const ContainerCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 30px;
    width: 530px;

   h4{
       margin-right: 2px
   }

`

const IconesPequenos = styled.img`
    width: 30px;
    margin-right: 4px;
`

function CardPequeno(props) {
    return (
        <ContainerCardPequeno>
            
            <IconesPequenos src={ props.imagem } />
            <h4>{ props.titulo }: </h4>
            <p>{ props.texto }</p>
            
            
        </ContainerCardPequeno>
    )
}

export default CardPequeno;