import React, { useState } from 'react';
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button"


const PLANS = [
  {
    title: 'LAB BASIC',
    bgColor: 'bg-brand-blue-alt',
    items: [
      "✔ Cadastro ilimitado de pacientes e exames",
      "✔ Emissão de laudos com modelo padrão",
      "✔ Acesso para até 2 usuários simultâneos",
      "✔ Backup automático diário",
      "❌ Integração com equipamentos laboratoriais",
      "❌ Painel médico personalizado",
      "❌ Suporte técnico 24h"
    ],
    price: "De R$499,90",
    realPrice: "Por R$299,90",
    timeAss: " /mês."
  },
  {
    title: 'LAB PRO',
    bgColor: 'bg-brand-green-alt',
    items: [
      "✔ Cadastro ilimitado de pacientes e exames",
      "✔ Emissão de laudos personalizados",
      "✔ Acesso para até 10 usuários simultâneos",
      "✔ Backup automático diário e em nuvem",
      "✔ Integração com equipamentos laboratoriais",
      "✔ Painel médico e relatórios gerenciais",
      "❌ Suporte técnico 24h"
    ],
    price: "De R$699,90",
    realPrice: "Por R$449,90",
    timeAss: " /mês."
  },
  {
    title: 'LAB ENTERPRISE',
    bgColor: 'bg-brand-purple-alt',
    items: [
      "✔ Cadastro e laudos ilimitados",
      "✔ Acesso para usuários ilimitados",
      "✔ Backup em nuvem com redundância",
      "✔ Integração com todos os equipamentos laboratoriais",
      "✔ Painel médico, financeiro e administrativo",
      "✔ API de integração com sistemas hospitalares",
      "✔ Suporte técnico 24h e SLA garantido"
    ],
    price: "De R$999,90",
    realPrice: "Por R$699,90",
    timeAss: " /mês."
  }
];


export const SoftwaresPlans = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-brand-blue-dark">
            <header>
                <Navbar />
                <h1 className="text-4xl md:text-5xl text-center font-semibold text-amber-50 p-8">Conheça nossos Planos de Softwares</h1>
                
            </header>
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-amber-50 text-center lg:text-left text-3xl md:text-4xl">Simplifique processos, ganhe tempo e confie em quem <strong>cuida da qualidade do seu laboratório.</strong>
</h2>

                </div>
                <div className=" lg:w-1/2">
                    <img src="./banner4.png" alt="" className="w-full h-auto object-cover rounded-3xl brightness-75"/>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {PLANS.map((item) => (
                    <section className={`flex flex-col text-amber-50 border p-6 rounded-2xl space-y-4 border-amber-50 ${item.bgColor} hover:bg-brand-blue-light`}>
                        <h3 className="text-3xl font-semibold text-center">{item.title}</h3>

                        <ul className="flex-grow space-y-2">
                            {item.items.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <article className="text-center">

                            <p className="line-through">{item.price}</p>
                            <strong className="text-3xl md:text-3xl font-semiboldd">{item.realPrice}</strong><span className="text-xs md:text-xl">{item.timeAss}</span>
                        </article>

                        <Button>Assinar {item.title}</Button>
                    </section>
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </main>

    )
}
