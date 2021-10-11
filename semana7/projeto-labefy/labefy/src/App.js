import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const headers = {
  headers: {
    Authorization: "guilherme-feijo-maryam"
  }
};

const ContainerCriaMusica = styled.div`
  

`

export default class App extends React.Component {
  
  state = {
    playlists: [],
    playlistName: "",
    playlistDetails: [],
    musicName: "",
    musicArtist: "",
    musicURL: "",
    playlistID: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

 

  handlePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
  }

  handleMusicName = (e) => {
    this.setState({ musicName: e.target.value });
  }
  
  handleMusicArtist = (e) => {
    this.setState({ musicArtist: e.target.value });
  }
  
  handleMusicURL = (e) => {
    this.setState({ musicURL: e.target.value });
  }

  createPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.playlistName
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ playlistName: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  deletePlaylist = ((id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, headers)
    .then((res) => {
      this.getAllPlaylists()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  })

  getPlaylistTracks = ((id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, headers)
    .then((res) => {
      this.setState({playlistID: id})
      this.setState({playlistDetails: res.data.result.tracks})
      console.log(res)
    })
    .catch((err)=>{
      alert(err.response);
    })
  })

  addTrackToPlaylist = ((id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistID}/tracks`
    const body = {
      name: this.state.musicName, 
      artist: this.state.musicArtist,
      url: this.state.musicURL
    }
    axios.post(url, body, headers)
    .then((res)=>{
      this.setState({ musicName: "", musicArtist: "", musicURL: ""});
      this.getPlaylistTracks(this.state.playlistID)
    })
    .catch((err) => {
      console.log(err.response)
      alert(err.response);
    });
  })

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  
  render(){
    const playlistDetailsComponents = this.state.playlistDetails.map((musica) => {
      return(
        <div>
          <p key={musica.id}>{musica.name} - {musica.artist}</p>
          <audio controls="controls">
            <source src={musica.url} type="audio/ogg" />
          </audio>
        </div>
      )
    })
    
    const playlistComponents = this.state.playlists.map((play) => {
      return (
        <div>
          <li key={play.id}>{play.name}</li>
          <button onClick={()=>this.deletePlaylist(play.id)}>X</button>
          <button onClick={()=>this.getPlaylistTracks(play.id)}>Músicas</button>
          
          
        </div>
      )
    });

    

    return (
      <div>
        <h1>Labefy</h1>
        <input
          placeholder="Nome da playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylists}>Salvar</button>
        {playlistComponents}
        {this.state.playlistID === ""? "" : <ContainerCriaMusica>
          <h5>Adicionar música na playlist</h5>
            <input
              placeholder="Nome da música"
              value={this.state.musicName}
              onChange={this.handleMusicName}
            />
            <input
              placeholder="Nome do artista"
              value={this.state.musicArtist}
              onChange={this.handleMusicArtist}
            />
            <input
              placeholder="URL"
              value={this.state.musicURL}
              onChange={this.handleMusicURL}
            />
            <button onClick={()=>this.addTrackToPlaylist(this.state.playlistID)}>Adicionar</button>
          {playlistDetailsComponents}
        </ContainerCriaMusica>}
      </div>
    );
  }
  
}


