import React from "react";

interface TarefaProps {
    texto: string;
}

const Tarefas: React.FC<TarefaProps> = ({texto}) =>{
    return(
        <>
        <li>{texto}</li>
        </>
    )
}
export default Tarefas;
