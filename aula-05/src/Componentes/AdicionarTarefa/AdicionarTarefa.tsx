import React, { useState } from "react";
// importa useState do React. é um hook do react utilizado para adicionar o estado e componentes funcionais.
interface AdicionarTarefaProps {
    // Define uma interface chamada AdicionarTarefaProps, que especifica que o componente AdicionarTarefa deve receber
    onAdicionar: (novaTarefa: string) => void;
    // Essa propriedade é uma função que espera receber uma string como argumento e não retorna nada (void)
}
const AdicionarTarefa: React.FC<AdicionarTarefaProps> = ({ onAdicionar }) => {
    // Utiliza o hook useState para criar uma variável de estado chamada novaTarefa
    // e uma função setNovaTarefa para atualizar o valor do estado. Inicializa novaTarefa com uma string vazia.
    const[novaTarefa,setNovaTarefa] = useState<string>('');
    const handleAdicionar =() =>{
        if (novaTarefa.trim() !== '') {
            onAdicionar(novaTarefa);
            setNovaTarefa('');
    }  
};
return (
    <>
        <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
        <button onClick={handleAdicionar}>ADICIONAR TAREFA </button>
    </>
    )
}

export default AdicionarTarefa;
