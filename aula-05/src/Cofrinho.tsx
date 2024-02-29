import { useState }from "react";

function Cofrinho() {
  const [moedas, setMoedas] = useState<number>(0);

  const encontrarMoeda = () => {
    setMoedas(moedas + 1);
  };

  return (
    <div>
      <p>Eu tenho {moedas} moedas no meu cofrinho!</p>
      <button onClick={encontrarMoeda}>Encontrei uma moeda!</button>
    </div>
  );
}

export default Cofrinho;