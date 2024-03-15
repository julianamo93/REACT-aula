import React, { useState } from "react";

function Interruptor(){
    // inicializar o interruptor desligado
    // inicializa o estado 'ligado' com o valor 'false' e especifíca que o tipo é 'boolean'
    
    const [ligado,setLigado] = useState<boolean>(false);
    // No contexto do exemplo !ligado, estamos lidando com a variável de estado ligado,
    // que é um booleano (true ou false). Quando utilizamos !ligado,
    // estamos invertendo o valor atual de ligado
    // COM ARROW FUNCTION
        //const alternarEstado() => {
        //setLigado(!ligado); // essa function alterna entre true e false
        //}

    // SEM ARROW FUNCTION
    function alternarEstado(){
        // O operador ! é um operador lógico em JS e TS conhecido como operador de negação
        // Ele inverte o valor booleano de uma expressão: se algo é true, ele se torna false, e se algo é false, ele se torna true 
        setLigado(!ligado); // essa function alterna entre true e false
    }
                // linha 34 funciona como um if-else, mas otimizamos ela
                let texto;
                if(ligado)(
                    texto='ligado'
                )
                else(
                    texto='desligado'
                )

    return(
        <>
        <h1>COMPONENTE INTERRUPTOR</h1>
        <p className="padrao">O INTERRUPTOR ESTÁ {ligado ? 'ligado': 'desligado'}</p>
        <button onClick={alternarEstado}>
            {ligado? 'DESLIGAR':'LIGAR'}
        </button>
        </>
    )
}
export default Interruptor;