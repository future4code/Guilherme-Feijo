import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        { 
          id: "2020-09-05",
          texto: "Texto da tarefa",
          completa: false
        },
        {
          id: "2020-04-05",
          texto: "Texto da segunda tarefa",
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      this.setState({ tarefas: JSON.parse(tarefas) });
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaTarefas})
    
  }

  selectTarefa = (id) => {
    const novaTarefas = this.state.tarefas.map((tarefa)=>{
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      }else{
        return tarefa
      }
    })
    this.setState({ tarefas: novaTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
