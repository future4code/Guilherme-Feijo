import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

const BotaoBonito = styled.button`
  margin-top: 4px;
  background-color: white;
  font-family: verdana
`

class App extends React.Component {
  
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'jonas',
        fotoUsuario:'https://picsum.photos/50/50?random=1',
        fotoPost:'https://picsum.photos/200/150?random=4'
      },
      {
        nomeUsuario:'vitinho',
        fotoUsuario:'https://picsum.photos/50/50?random=2',
        fotoPost:'https://picsum.photos/200/150?random=7'
      }
    ],
    nomeUsuarioInput:"",
    fotoUsuarioInput:"",
    fotoPostInput: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuarioInput,
      fotoUsuario: this.state.fotoUsuarioInput,
      fotoPost: this.state.fotoPostInput

    }
    const novoPosts = [novoPost, ...this.state.post]
    this.setState({post:novoPosts, nomeUsuarioInput:"", fotoUsuarioInput:"", fotoPostInput: ""})
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({nomeUsuarioInput: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({fotoUsuarioInput: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({fotoPostInput: event.target.value})
  }

  render() {
      const linhaDoTempo = this.state.post.map((posts) => {
      return (
        <Post
          key={posts.nomeUsuario}
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
        />
      )
    });
    return (
      <MainContainer>
      
        {linhaDoTempo}
        <hr/>
        <input
          value={this.state.nomeUsuarioInput}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome do Usuário"}
        />
        <input
          value={this.state.fotoUsuarioInput}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto do Usuário"}
        />
        <input
          value={this.state.fotoPostInput}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto do post"}
        />
        <BotaoBonito onClick={this.adicionaPost}>Adicionar post</BotaoBonito>

      </MainContainer>
    )  
  }
}


export default App;
