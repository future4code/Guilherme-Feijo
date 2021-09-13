import React from 'react';


export default class Etapa3 extends React.Component {
    render(){
      return (
          <div>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <form>
                <label for="motivo-desistencia">Por que você não terminou um curso de graduação?</label><br/>
                <input type="text" id="motivo-desistencia" name="motivo-desistencia"/><br/>
                <label for="curso-complementar">Você fez algum curso complementar?</label><br/>
                <select name="curso-complementar" id="curso-complementar">
                    <option value="nenhum">Nenhum</option>
                    <option value="curso-tecnico">Curso técnico</option>
                    <option value="curso-ingles">Curso de inglês</option>
                </select>
            
            </form>
          </div>
      );
    }
}