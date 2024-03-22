
import './App.css'

import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Servicos from './componentes/Servicos'
import { useEffect, useState } from 'react'

function App() {

  //CRIAR UM ESTADO PARA ARMAZENAR O TAMANHO DA TELA
  const[screensize,setScreensize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //definir um efeito para escutar a mudança da tela
  useEffect(()=>{
    const handleResize = () =>{
      // atualização do estado com novo tamanho da tela
      setScreensize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // adicionando um ouvinte para o redimensionamento da tela
    window.addEventListener('resize',handleResize);
    //limpa o ouvinte
    return () => window.removeEventListener('resize',handleResize);
  });
 
  return (
    <div className='flex flex-col'>
      <div className='bg-black text-white'>
      <p>TAMANHO DA TELA: {screen.width} x {screensize.height} px</p>
    </div>
    <Header/>
<main className='flex-1'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos!</p>
    
  <Servicos/>
  </main>
  <Footer />
    </div>
  )
}

export default App
