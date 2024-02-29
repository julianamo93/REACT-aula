import React from "react";
// Importa a biblioteca React, necessária para criar componentes React.
 
import Tarefas from "../Tarefas/Tarefas";
// Importa o componente Tarefa do arquivo local Tarefas.tsx
 
//DEFININDO A INTERFACE, PROPRIEDADE TAREFAS DO TIPO ARRAY
interface ListaDeTarefasProps{
    tarefas: string[];
}
// Define uma constante chamada ListaDeTarefas que é um Functional Component (FC) React.
//Ele espera receber propriedades do tipo ListaDeTarefasProps
//, e a desestruturação do objeto de propriedades é feita para obter a propriedade tarefas.
 
const ListaDeTarefas: React.FC<ListaDeTarefasProps> = ({tarefas}) =>{
return(
    <ul>
       
        {tarefas.map((tarefa,index) => (
             // Utiliza o método map para iterar sobre o array tarefas
             //criar componente tarefa, passar a propriedade key indice de iteração e vai passar a
             // propriedade de texto como valor da tarefa
            <Tarefas key={index} texto={tarefa}/>
        ))}
 
    </ul>
)
}
export default ListaDeTarefas;