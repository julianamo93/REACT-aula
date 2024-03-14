import React,{useContext} from "react";
import './App.css';
import { ThemeProvider, ThemeContext } from "./ThemeContext";


function App(){

  const themeContext = useContext(ThemeContext);

  if (!themeContext){
    return <div>ERRO AO CARREGAR O TEMA</div>
  }

  // estrutura do App(componente)

  return(
    <div className="App" style={{backgroundColor: themeContext.theme}}>
        <header className="App-header">
        <button onClick={themeContext.toggleTheme}> MUDAR COR DE FUNDO </button>
        </header>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
  )

}

// Exportando o componente do App envolvido pelo ThemeProvider
export default function Main() {
  return (
  <ThemeProvider>
        <App />
  </ThemeProvider>
  );
}