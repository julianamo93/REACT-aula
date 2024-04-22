import React, { useEffect, useState } from "react";

// definir a interface para os tipos de dados do usuário

interface User{
    id:number;
    name:string;
    email:string;
}
const UsersF: React.FC = () =>{
    // state para armazenar os usuários
    const [users,setUsers] = useState<User[]>([]);
    // carregar os dados da api
    useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();

    },[]);
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
export default UsersF;