import React from "react";
//Importa a biblioteca React, que é necessária para definir componentes React.
 
// Declara uma interface chamada TarefaProps, ao ter variaveis vou definir os tipos
interface TarefaProps{
    texto:string;
}
 
// Define uma constante chamada Tarefas que é um Functional Component (FC) React
const Tarefas: React.FC<TarefaProps> = ({texto}) =>{
return (
         <li>
            {texto}
        </li>
  )
};
export default Tarefas;