import React, { useEffect, useState } from "react";

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const apiKey = '96786a3b0f8e42ebb09dbc105d697096';
    const baseUrl = 'https://newsapi.org/v2/everything';
    const query = 'q=tesla&from=2024-03-03&sortBy=publishedAt';

    useEffect(() => {
        const fetchNoticias = async () => {
            const url = `${baseUrl}?${query}&apiKey=${apiKey}`; // Corrigindo a interpolação da string e a chave apiKey
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro ao carregar a API');
                }
                const data = await response.json();
                setNoticias(data.articles);
            } catch (error) {
                console.error("Não foi possível buscar notícias: ", error);
            }
        };
        fetchNoticias();
    }, []);

    return (
        <div className="max-w 4x1 mx-auto">
            <h1 className="text-3x1 font-bold text-center my-8">NOTICIAS SOBRE TESLA</h1>
            <ul>
                {noticias.map((noticia,index) => (
                    <li key={index} className="bg-white shadow overflow-hidden rounded-md mb-5">
                        <h2>{noticia.title}</h2>
                        <p>{noticia.description}</p>
                        <p>{noticia.author}</p>
                        <img src={noticia.urlToImage} alt={noticia.title} className="w-full h-128" />

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Noticias;
