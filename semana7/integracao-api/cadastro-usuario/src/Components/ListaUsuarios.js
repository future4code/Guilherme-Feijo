import React from "react"
import Styled from "styled-components"
import axios from "axios"

const ContainerLista = Styled.div`

`


export default class ListaUsuarios extends React.Component {
    
    
    render(){
      const usersComponents = this.props.users.map((user) => {
        return <div>
                <li key={user.id}>{user.name}</li>
                <button onClick={()=>this.props.deleteUser(user.id)}>X</button>
            </div>;
      });
  
      return (
        <div>
          <ContainerLista>
            <h3>Usuários Cadastrados:</h3>
            {usersComponents}
          </ContainerLista>
        </div>
     );
  
    }
}