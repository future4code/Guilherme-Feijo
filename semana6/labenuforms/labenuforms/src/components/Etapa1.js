import React from 'react';


export default class Etapa1 extends React.Component {
    render(){
      return (
          <div>
             <h1>ETAPA 1 - DADOS GERAIS</h1>
             <form>
                <label for="nome">1. Qual o seu nome?</label><br/>
                <input type="text" id="nome" name="nome"/><br/>
                <label for="idade">Qual a sua idade?</label><br/>
                <input type="number" id="idade" name="idade"/><br/>
                <label for="email">Qual seu e-mail?</label><br/>
                <input type="email" id="email" name="email"/><br/>
                <label for="escolaridade">Qual a sua escolaridade</label><br/>
                <select name="escolaridade" id="escolaridade">
                    <option value="medio-incompleto">Ensino médio incompleto</option>
                    <option value="medio-completo">Ensino médio completo</option>
                    <option value="superior-incompleto">Ensino superior incompleto</option>
                    <option value="superior-completo">Ensino superior completo</option>
                </select>
             </form>
          </div>
        );
    }
}


