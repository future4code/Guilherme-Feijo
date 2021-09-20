import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';
import pp from './img/pp.jpg';
import laikadog from './img/laikadog.jpg'
import trentini from './img/trentini.png'
import styled, { createGlobalStyle } from 'styled-components';
 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
  
  h3{
    text-align: center;
    margin-bottom: 20px;
  };

`

const TituloH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <ContainerPai>
      <GlobalStyle/>
      <PageSectionContainer>
        <TituloH2>Dados pessoais</TituloH2>
        <CardGrande 
          imagem={pp} 
          nome="Guilherme Trentini Feijó" 
          descricao="Olá, eu sou o Guilherme, desenvolvedor web FullStack em formação pela Labenu e baseado na cidade de Londrina (PR). Tenho curso superior na área de Comunicação Social pela Universidade Estadual de Londrina (UEL)."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>
      <div>
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
          titulo="E-mail"
          texto="gtfeijo@gmail.com"
        />
        <CardPequeno
          imagem="https://img-premium.flaticon.com/png/512/1009/premium/1009850.png?token=exp=1631123805~hmac=3a18b05fd6415b43c33aa83bf7d28230"
          titulo="Endereço"
          texto="Rua das Palmeiras, 51"
       /> 
      
      </div>

      <PageSectionContainer>
        <TituloH2>Experiências profissionais</TituloH2>
        <CardGrande 
          imagem={trentini}
          nome="Trentini Seguros" 
          descricao="Atuei como corretor de seguros gerais." 
        />
        
        <CardGrande 
          imagem={laikadog}
          nome="Banda LaikaDog" 
          descricao="Baixista." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TituloH2>Minhas redes sociais</TituloH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </ContainerPai>
  );
}

export default App;
