import React, { useEffect, useState } from "react";
import axios from "axios";

// definir a interface para os tipos de dados do usuário

interface User{
    id:number;
    name:string;
    email:string;
}
const UsersA: React.FC = () =>{
    // state para armazenar os usuários
    const [users,setUsers] = useState<User[]>([]);
    // carregar os dados da api
    /*useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();

    },[]); */

    // FORMA DE API COM AXIOS
    useEffect(() =>{
        const fetchUsers = async () =>{
            try{
                // realizar a requisição HTTP utilizando AXIOS
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data);                
            } catch (error){
                console.error('ERRO AO BUSCAR DADOS', error);

            }
        };
        fetchUsers();
    })

    return(
        <div>
            <h1>
                USUÁRIOS:
            </h1>
            <ul>
                {users.map(usuario =>(
                    <li key={usuario.id}>
                        <p>ID: {usuario.id}</p>
                        <p>NOME: {usuario.name}</p>
                        <p>E-MAIL: {usuario.email}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UsersA;