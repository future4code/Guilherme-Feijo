import React from "react"
import Styled from "styled-components"
import axios from "axios"
import Formulario from "./Components/Formulario"
import ListaUsuarios from "./Components/ListaUsuarios"



const headers = {
  headers: {
    Authorization: "guilherme-feijo-maryam"
  }
};

export default class App extends React.Component {
  state = {
    userName: "",
    userEmail: "",
    users: [],
    etapa: true
  }

  componentDidMount() {
    this.getAllUsers();
  }

  handleUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleUserEmail = (e) => {
    this.setState({ userEmail: e.target.value });
  };
  
  createUser = (()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    }
    axios.post(url, body, headers)
    .then((res)=>{
      alert(this.state.userName, "foi criado!")
      this.setState({userName: ""})
      this.setState({userEmail: ""})
      this.getAllUsers()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  })

  getAllUsers = (()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
    .then((res) => {
      this.setState({ users: res.data });
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  })

  deleteUser = ((id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, headers)
    .then((res) => {
      this.getAllUsers()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  })
  
  
  renderizaEtapa = () => {
    if(this.state.etapa){
      return <Formulario
        handleUserEmail={this.handleUserEmail}
        handleUserName={this.handleUserName}
        userName={this.state.userName}
        userEmail={this.state.userEmail}
        createUser={this.createUser}
        
      />
    }else{
      return <ListaUsuarios
      users={this.state.users}
      deleteUser={this.deleteUser}
      />
    }
    
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: !this.state.etapa})
    
  }
  
  render(){
    return (
      <div>
        <button onClick={()=>this.irParaProximaEtapa()}>Mudar de página</button>
        {this.renderizaEtapa()}
        
      </div>
    );

  }
}


