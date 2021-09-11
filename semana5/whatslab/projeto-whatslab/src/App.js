import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const ContainerMensagem = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const ContainerInput = styled.div`
  display: flex;

`

const InputNome = styled.input`
  width: 100px
`

const InputMensagem = styled.input`
  flex-grow: 1
`


class App extends React.Component {
  state = {
    mensagens: [],
    usuarioValue: "",
    mensagemValue: ""
  }

  onChangeUsuarioValue = (event) => {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeMensagemValue = (event) => {
    this.setState({mensagemValue: event.target.value})
  }
  
  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuarioValue,
      texto: this.state.mensagemValue
    }

    const novoArrayMensagens = [novaMensagem, ...this.state.mensagens]
    this.setState({mensagens: novoArrayMensagens, mensagemValue: ""})
  }

  render() {
    
    return (
      <ContainerGeral>
        <ContainerMensagem>
          {this.state.mensagens.map((mensagem, index)=> {
            return <p key={index}>
            <strong>{mensagem.usuario}</strong>: {mensagem.texto}
          </p>
          })}
          
        </ContainerMensagem>
        <ContainerInput>
          <InputNome onChange={this.onChangeUsuarioValue} value={this.state.usuarioValue} type="text" placeholder={'Nome'} />
          <InputMensagem onChange={this.onChangeMensagemValue} value={this.state.mensagemValue} type="text" placeholder={'Digite sua mensagem'}/>
          <button onClick={this.enviarMensagem}>Enviar</button>
        </ContainerInput>
      </ContainerGeral>
    );
  }
}

export default App;
