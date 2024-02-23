

import React,{useState} from "react";


interface AdicionarTarefaProps{
    onAdicionar:(novaTarefa:string) => void;
}

const AdicionarTarefa: React.FC<AdicionarTarefaProps> = ({onAdicionar}) =>{
    const [novaTarefa, setNovaTarefa] = useState<string>('');

    const handleAdicionar = () => {
        if(novaTarefa.trim() !== ''){
            onAdicionar(novaTarefa);
            setNovaTarefa('');
        } };
        return(
            <>
            <div>
                <input type="text" value={novaTarefa} onChange={(e)=> 
                    setNovaTarefa(e.target.value)} />
                <button onClick={handleAdicionar}>Adicionar Tarefa</button>
            </div>
            </>
        );
};
export default AdicionarTarefa;



