import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ContainerBored = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

export default class Bored extends React.Component {
    
    state ={
        activity: {},
    }

   
    
    getActivity = () => {
        axios.get("http://www.boredapi.com/api/activity/")
        .then((res)=>{
          console.log(res.data)
          this.setState({activity: res.data})
        }).catch((err)=>{
          console.log(err)
        })
    }
    
    render(){
        return(
            <ContainerBored>
                <h1>Não aguenta mais morar no país em que Jair Bolsonaro é presidente?</h1>
                <h3>Clique no botão abaixo e receba uma sugestão de atividade para esquecer da realidade!</h3>
                <button onClick={this.getActivity}>Clique em mim!</button>
                <hr/>
                <h3>Atividade</h3>
                <p>Nome: {this.state.activity.activity}</p>
                <p>Tipo: {this.state.activity.type}</p>
                <p>Participantes: {this.state.activity.participants}</p>
                <p>Preço: {this.state.activity.price}</p>
                <hr/>
                <h2>Não adiantou?</h2>
                <p>Troque de página para ver alguns foguetes da SpaceX e comece a organizar sua partida o mais rápido possível!</p>
            </ContainerBored>
        )
    }
}