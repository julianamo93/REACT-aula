import React from "react";
import './App.css'
import DicasSaude from "./componentes/DicasSaude";
import Servico01 from "./componentes/servicos/Servico01";
import Servico02 from "./componentes/servicos/Servico02";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App(){
  return(
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4" >
          <h1 className="text-3xl">Medicina no trabalho</h1>
          </header>
      
      <nav>
        <ul className="flex justify-center space-x-4 p-3">
          <li><Link to='/' className="hover:text-blue-500">HOME</Link></li>
          <li><Link to='/servico01'className="hover:text-blue-500">SERVIÇOS 01</Link></li>
          <li><Link to='/servico02'className="hover:text-blue-500">SERVIÇOS 02</Link></li>
          
        </ul>
      </nav>
      <main className="flex-grow bg-gray-500">
        {/*Routes: Routes é um componente que encapsula múltiplas rotas. 
        Ele serve como um "switch" que renderiza apenas o primeiro componente Route que 
        corresponde ao caminho (path) atual.  */}
         <Routes>
          {/* Route: O componente Route é usado para definir uma rota individual. Ele associa um caminho (path) da URL a um componente React.
          */}
              <Route path="/" element={<DicasSaude/>}/>
              <Route path="/servico01" element={<Servico01/>}/>
              <Route path="/servico02" element={<Servico02/>}/>
         </Routes>
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
        <p>© 2024 Medicina no trabalho. Todos os direitos reservados</p>
      </footer>

      </div>

    </Router>
  )
}
export default App;