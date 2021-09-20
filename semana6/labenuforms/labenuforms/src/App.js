import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';



const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

`

export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  
  
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4: 
        return <Final/>;
      default:
        return <h3>Seção inexistente</h3>
    }
  }

  irParaProximaEtapa = () => {
        
    switch (this.state.etapa){
      case 1:
        return this.setState({etapa:2});
      case 2:
        return this.setState({etapa:3});
      default:
        return this.setState({etapa:4})
    }
  }

  render(){
    return (
        <ContainerGeral>
          {this.renderizaEtapa()}
          {this.state.etapa < 4 ? <button onClick={this.irParaProximaEtapa}>Próxima etapa</button> : <hr/>}
        </ContainerGeral>
    );
  }
}


