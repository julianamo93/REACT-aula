// src/components/Services.tsx
import React from 'react';

const Servicos = () => {
  return (
    <section id="servicos" className="bg-gray-700 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Terapia Individual</h3>
            <p>A terapia individual é realizada em um ambiente acolhedor, propiciando um espaço seguro para explorar sentimentos e desafios pessoais.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Terapia de Casal</h3>
            <p>Oferecemos terapia de casal para ajudar a melhorar a comunicação, resolver conflitos e fortalecer a relação.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Terapia Familiar</h3>
            <p>A terapia familiar pode ajudar a resolver conflitos familiares, melhorar o relacionamento entre os membros da família e promover a harmonia no lar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
