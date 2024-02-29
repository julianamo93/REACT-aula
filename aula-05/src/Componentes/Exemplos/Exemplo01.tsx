import {useState}from "react";

function Exemplo01() {
    const[aluno,setAluno]= useState<string>("");
    
    return(
        <>
        <h1> EXEMPLO 01 </h1>

        <p>
            <b>Aluno:</b> {aluno}
        </p>
        <button onClick={()=> setAluno("JOÃOZINHO")}> CLIQUE AQUI </button>
        </>
    )
}
export default Exemplo01;