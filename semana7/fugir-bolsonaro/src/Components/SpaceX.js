import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ContainerSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export default class SpaceX extends React.Component {
    
    state ={
        missions: []
    }

    componentDidMount(){
        this.getMissions()
    }

    getMissions = ()=>{
        axios.get("https://api.spacexdata.com/v3/missions")
        .then((res)=>{
            console.log(res.data)
            this.setState({missions: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    render(){
        const missionsList = this.state.missions.map((mission)=>{
            return (
                <div key={mission.mission_id}>
                    <p>Nome: {mission.mission_name}</p>
                    <p>Fabricantes: {mission.manufacturers.map((manufacturer)=><p key={manufacturer.manufacturers}>{manufacturer}</p>)}</p>
                    <a href={mission.wikipedia}>Link para Wikipédia</a>
                    <hr/>
                </div>
            )
        })
        return(
            <ContainerSpace>
                <h1>Missões SpaceX</h1>
                {missionsList}
                <h2>Acha que sair do planeta é muito extremo?</h2>
                <p>Troque de página novamente e tente outra atividade para espairecer</p>
            </ContainerSpace>
        )
    }
}