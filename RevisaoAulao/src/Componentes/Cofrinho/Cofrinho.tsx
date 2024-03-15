import React, { useState } from "react";


function somar(a: number, b: number) :number{
    return a + b; 
}

function Cofrinho(){
    // a variável moedas = armazena o estado atual de moedas
    // setMoedas tem a função de atualizar o valor de moedas
    const[moedas,setMoedas] = useState<number>(0); // a const chama moedas e é modificada pelo setMoedas, utilizando useState, passando pelo parametro number, iniciando com zero
// acima temos variavel moedas e função setMoedas; temos que ter obrigatoriamente uma variavel para gravar o estado atual e uma função para atualizar essa variável

    const encontreiMoeda = () =>{ 
        setMoedas(moedas + 1) // pegar ovalor da moeda atual e somar com +1
    }

    return(
        <>
        <h1>COMPONENTE COFRINHO</h1>
        <p style={{ fontSize: '24px', color:'lightseagreen'}}>EU TENHO {moedas} MOEDAS NO MEU COFRINHO</p> 
        <button onClick={encontreiMoeda}>ENCONTREI UMA MOEDA, JUNTE ELA</button> 
        </>

        // entre chaves simples, escrevo a variável que eu quero que ele exiba
        //button onClick executará a função encontreiMoeda
    )
}

export default Cofrinho;