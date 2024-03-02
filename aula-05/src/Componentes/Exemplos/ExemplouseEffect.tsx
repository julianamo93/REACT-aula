import {useState, useEffect} from "react";
 
const ExemplouseEffect = () => {
    // ESTADO INICIAL VAZIO DOS USUARIOS
    const [usuarios, setUsuarios] = useState([]);

    //INICIANDO O LOADING COM O TIPO FALSE (BOOL)
    const [loading, setLoading] = useState(false);
 
    //vai usar uma função assincrona para buscar os dados de usuarios
    useEffect(()=>{
        const fecthData = async () =>{
            //se for verdadeiro executa o código abaixo (loading == true) = (loading == true)
            if(loading){
                try{
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                    const data = await response.json();
                    // ATUALIZANDO O ESTADO DOS USUARIOS
                    setUsuarios(data);
                 }
                 catch (error){
                    console.error('erro ao buscar dados de api',error);
                 }
                 finally{
                    setLoading(false);
                 }
            }
        };
        fecthData();
    }, [loading]);
 
    const recarregarDados = () =>{
        setLoading(true);
    }
    return(
        <>
        <h1>EXEMPLO DE CARREGAR API</h1>
        //FORMAS DE UTILIZAR IF ELSE, LOADING É TIPO UM BOOLEANO ?
        {loading ? (
            <p>Carregando....</p>
        ):(
            <div>
                <ul>{usuarios.map((usuario) => (
                    <li key = {usuario.id} > {usuario.name} - {usuario.email} </li>
                ))}
                </ul>
                <button onClick ={recarregarDados}>CARREGAR DADOS:</button>
            </div>
        )}
        </>
    )
 
}
 
export default ExemplouseEffect;