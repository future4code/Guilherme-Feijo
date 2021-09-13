import React from 'react';


export default class Etapa2 extends React.Component {
    render(){
      return (
          <div>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <form>
                <label for="curso">Qual curso?</label><br/>
                <input type="text" id="curso" name="curso"/><br/>
                <label for="unidade-ensino">Qual a unidade de ensino?</label><br/>
                <input type="text" id="unidade-ensino" name="unidade-ensino"/><br/>
            </form>
          </div>
      );
    }
}

