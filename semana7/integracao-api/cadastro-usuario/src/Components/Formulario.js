import React from "react"
import Styled from "styled-components"
import axios from "axios"

const ContainerForm = Styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  margin: 15px auto;
  padding: 30px;

  div {
    margin-bottom: 15px;
  }
`




export default class Formulario extends React.Component {
      
    render(){
    
  
      return (
        <div>
            <ContainerForm>
                <div>
                    <label>Nome:</label>
                    <input
                        name="name"
                        id="name"
                        value={this.props.userName}
                        onChange={this.props.handleUserName}
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        name="email"
                        id="email"
                        value={this.props.userEmail}
                        onChange={this.props.handleUserEmail}
                    />
                </div>
                <button onClick={()=>this.props.createUser()}>Salvar</button>
            </ContainerForm>
          
        </div>
     );
  
    }
}