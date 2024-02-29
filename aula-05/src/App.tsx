import React, { useState } from "react";
import ListaDeTarefas from "./Componentes/ListaDeTarefas/ListaDeTarefas";
import AdicionarTarefa from "./Componentes/AdicionarTarefa/AdicionarTarefa";

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
    </>
  )
}

export default App;
