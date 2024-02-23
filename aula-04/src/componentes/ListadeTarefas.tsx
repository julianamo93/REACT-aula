import React from "react";
import Tarefas from "./Tarefas/Tarefas";

interface ListatarefasProps{
    tarefas: string[]
}

const ListaTarefas: React.FC<ListatarefasProps> = ({tarefas}) =>{
    return(
        <ul>
            {tarefas.map((tarefa,index)=>( //tarefas da interface
                <Tarefas key={index} texto={tarefa} />  //import do componente Tarefas              
            ))}
        </ul>   
        
    )
}
export default ListaTarefas;

