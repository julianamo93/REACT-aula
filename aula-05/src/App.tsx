import React, { useState } from "react";
import ListaDeTarefas from "./Componentes/ListaDeTarefas/ListaDeTarefas";
import AdicionarTarefa from "./Componentes/AdicionarTarefa/AdicionarTarefa";
import Exemplo01 from "./Componentes/Exemplos/Exemplo01";
import ExemplouseEffect from "./Componentes/Exemplos/ExemplouseEffect";

const App: React.FC = () =>{
  const[tarefas,setTarefas] = useState<string[]>([]);
  const adicionarTarefa = (novaTarefa:string) =>{
    setTarefas([...tarefas, novaTarefa]);
  };
  return(
    <>
    <h1> LISTA DE TAREFAS </h1>
    <ListaDeTarefas tarefas={tarefas} />
    <AdicionarTarefa onAdicionar={adicionarTarefa} />
    <Exemplo01></Exemplo01>
    <ExemplouseEffect></ExemplouseEffect>
    </>
  )
}

export default App;
