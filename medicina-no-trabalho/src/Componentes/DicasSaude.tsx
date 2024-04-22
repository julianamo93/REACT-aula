import React from "react";
//INTERFACE CHAMA DicaSaude, que usaremos para tipar os objetos de dicas de saúde
interface DicaSaude{
    id: number;
    title:string;
    description:string;
}
// array de objeto DicaSaude
// Aqui, cada objeto representa uma dica de saúde com um id, título e descrição.
const dica: DicaSaude[] = [
    { id:1, title:'faça pausa regulares', description:'dica 01: lorem lorem lorem'},
    { id:2,title:'Postura Correta', description:'dica 02:  lorem lorem lorem lorem lrem fim dica 02'},
]
const DicasSaude: React.FC = () => {
return(
    <div>
        <h2 className="text-lg font-bold">dicas de saúde no trabalho</h2>
        {/* lista para exibir as dicas */}
        <ul>
            {/* mapear os itens da lista para cada elemento li */}
            {dica.map((dica) => 
            <li key={dica.id} className="mt-2">
                {/* TITULO das dicas */}
                <h3 className="text-md font-bold">{dica.title}</h3>
                {/* DESCRIÇÃO DA DICA*/}
                <p>{dica.description}</p>
            </li>
            )}
        </ul>
    </div>
)
}
export default DicasSaude;