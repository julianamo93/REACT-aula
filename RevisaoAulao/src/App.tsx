import React from 'react';
import './App.css';
import Cofrinho from './Componentes/Cofrinho/Cofrinho';
import Interruptor from './Componentes/Interruptor/Interruptor';
import { ThemeProvider, ThemeContext } from './ThemeContext'; 

function App() {
 const themeContext = React.useContext(ThemeContext);

 if (!themeContext) {
    return <div>ERRO AO CARREGAR O TEMA</div>;
 }

 const paragrafo = {
    color: 'lightblue',
    fontSize: '15px',
    margin: '50px',
 };
 const nome = <p className="padrao"> Juliana </p>;

 return (
    <div className="App" style={{ backgroundColor: themeContext.theme }}>
      <header className="App-header">
        <button onClick={themeContext.toggleTheme}> MUDAR COR DE FUNDO </button>
      </header>
      <h1>REVISÃO 06/03/2024</h1>
      <p style={{ fontSize: '24px', color: 'pink' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>{nome}</p>
      <p style={paragrafo}>Lorem ipsum dolor sit amet.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <hr />
      <p className="exemplo">Lorem ipsum dolor sit amet.</p>
      <Cofrinho />
      <hr />
      <Interruptor />
      <p className="padrao">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
 );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

