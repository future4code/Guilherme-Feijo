import React from 'react';
import styled from 'styled-components';
import Bored from './Components/Bored';
import SpaceX from './Components/SpaceX';

const BotaoMudaTela = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export default class App extends React.Component {
  
  state ={
    paginaAtual: "bored"
  }

  trocaPagina = () => {
    if (this.state.paginaAtual === "bored") {
      this.setState({ paginaAtual: "spaceX" });
    } else{
      this.setState({paginaAtual: "bored"})
    }
  };

  

 
  render(){
    return (
      <div>
        {this.state.paginaAtual === "bored" ? <Bored /> : <SpaceX />}
        <BotaoMudaTela>
        <button onClick={this.trocaPagina}>Trocar de tela</button>
        </BotaoMudaTela>
      </div>
      
    );
  }
  
}