import React, { useState } from 'react';
import { Navbar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { MapaLaboratorio } from "../../components/Maps"



const SHOWCASE = [
    {
        img: {
            src: "./vidrarias.png",
            alt: "vidrarias"
        },
        category: "Vidrarias"
        

    },
    {
        img: {
            src: "./reagentes.png",
            alt: "reagentes"
        },
        category: "Reagentes"
    },
    {
        img: {
            src: "./equipamentos.png",
            alt: "equipamentos"
        },
        category: "Equipamentos"
    },
    {
        img: {
            src: "./softwares.png",
            alt: "softwares"
        },
        category: "Softwares"
    }
]

const MOSTSALES = [
    {
        img: {
            src: "./soxlhet.png",
            alt: "Soxlhet"
        },
        category: "Vidrarias",
        bgColor: "bg-amber-50",
        text: "Extrator Soxhlet",
        itemPrice: "R$ 750,00"
        

    },
    {
        img: {
            src: "./naoh.png",
            alt: "Hidroxido de Sodio"
        },
        category: "Reagentes",
        bgColor: "bg-amber-50",
        text: "Hidróxido de Sódio PA",
        itemPrice: "R$ 120,00"
    },
    {
        img: {
            src: "./gc.png",
            alt: "CG-MS"
        },
        category: "Equipamentos",
        bgColor: "bg-amber-50",
        text: "GC-MS",
        itemPrice: "R$ 750.000,00"
    },
    {
        img: {
            src: "./soft.png",
            alt: "softwares cg"
        },
        category: "Softwares",
        bgColor: "bg-amber-50",
        text: "Chromatography Solution",
        itemPrice: "R$ 1050,00"
    }
]

export const HomePage = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-brand-blue">
            <header>
                <Navbar />
            </header>
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                    <div className="columns-2 gap-3 p-4">
                        <img className="aspect-square  w-full  rounded-[80%]  object-cover" src="./banner.png" alt="Banner principal"/>
                        <img className="aspect-square w-[50%] rounded-[80%]  object-cover" src="./banner1.png" alt="Banner 1"/>
                        <img className="aspect-square w-[50%] rounded-[80%]  object-cover" src="./banner2.png" alt="Banner 2"/>
                        <img className="aspect-square w-full rounded-[80%]  object-cover" src="./banner3.png" alt="Banner 3"/>
                    </div>
                </section>
                <div className="lg:w-1/2 p-4">
                    <h1 className="text-xl md:text-5xl text-center lg:text-left text-amber-50 font-bold p-2">⚗️ Tudo o que seu Laboratório Precisa em um Só Lugar 🔬</h1>
                    <p className="text-xl md:text-xl text-center lg:text-left text-amber-50 p-2">“Oferecemos reagentes, vidrarias, equipamentos e acessórios laboratoriais das melhores marcas, com entrega em todo o Brasil.”</p>
                    <section className="right-6 sm:right-10 flex justify-center-safe w-[60%] p-6">
                    <Button variant="primary">Descubra mais</Button>
                    </section>
                </div>
            </div>
            <section className="bg-brand-blue-dark">
                <article>
                    <h2 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6">Nossos Serviços</h2>
                </article>   
                 <picture className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SHOWCASE.map((item) => (
                        <section key={item.img.src} className="text-neutral-50 p-3">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                                src={item.img.src}
                                alt={item.img.alt}
                                className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-amber-50 py-2 text-center transition-colors duration-300 group-hover:bg-brand-purple">
                                <p className="text-brand-blue-dark text-lg font-extrabold tracking-wide uppercase">
                                {item.category}
                                </p>
                            </div>
                        </div>
                        </section>
                    ))}
                </picture>
                  <section className="right-6 sm:right-10 flex justify-items-start p-4">
                    <Button variant="primary">Entre em contato</Button>
                  </section>
            </section>
             <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                    <h3 className="text-xl md:text-5xl lg:text-center font-bold text-amber-50 p-6">Pronto para criar sua visão?</h3>
                     <p className="text-xl md:text-xl text-center lg:text-center text-amber-50 p-2">Tudo começa com uma descoberta. Talvez você esteja montando um novo laboratório. Talvez queira aprimorar suas pesquisas com equipamentos de última geração. Ou talvez tenha um projeto científico pronto para transformar o mundo.

                     Seja qual for sua ideia, estamos aqui para fornecer os instrumentos e soluções que tornam a inovação possíve</p>
                </section>
                 <section className="lg:w-1/2">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                            className="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-2xl"
                            src="./lab2.png"
                            alt="laboratório"
                            />
                        </div>
                    </section>
             </div>    
          <section className="flex flex-col lg:flex-row w-full p-8 gap-12 bg-brand-blue-dark">
            <article className="lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
                <h4 className="text-3xl md:text-5xl font-bold text-amber-50 p-6">Mais Vendidos</h4>
                <p className="text-lg md:text-2xl text-amber-50 p-6">Transforme seu laboratório ou centro de pesquisa com nossos equipamentos modernos e soluções de alta precisão.</p>
                <div className="p-6">
                <Button variant="primary">Confira os mais vendidos</Button>
                </div>
            </article>

            <section className="lg:w-1/2 flex justify-center">
                <picture className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {MOSTSALES.map((item) => (
                    <div key={item.text} className={`flex flex-col justify-between items-center text-center font-bold text-brand-blue-dark bg-amber-50 border border-amber-50 rounded-2xl shadow-lg overflow-hidden hover:bg-brand-blue-dark hover:text-amber-50 transition-all duration-300`}>
                
                    <div className="relative overflow-hidden w-full">
                        <img
                        src={item.img.src}
                        alt={item.img.alt}
                        className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"/>
                    </div>

                    <article className="flex flex-col flex-1 justify-between p-4 w-full">
                        <p className="text-lg md:text-xl font-extrabold">{item.text}</p>
                        <p className="text-lg md:text-xl font-semibold mb-4">{item.itemPrice}</p>

                        <button className="w-full py-2 bg-brand-blue-dark hover:bg-amber-50 transition-colors text-amber-50 font-bold hover:text-brand-blue-dark rounded-md"> Comprar</button>
                    </article>
                    </div>
                ))}
                </picture>
            </section>
            </section>

            <section className="bg-brand-blue p-10">
                <section className="flex flex-col lg:flex-row w-full p-8 gap-12">
                    <div className="lg:w-1/2"> 
                        <h2 className="text-3xl md:text-5xl font-bold text-amber-50 lg:text-center p-6">Nossas Localizações</h2>
                        <p className="text-lg md:text-2xl text-amber-50 lg:text-center p-6">Nosso escritório encontra-se em Londres. Não consegue comparecer pessoalmente? Não se preocupe, oferecemos serviços on-line.</p>
                    </div>    
                    <div className="lg:w-1/2"><MapaLaboratorio /></div>

                </section>
            </section>
            <footer>
                <Footer />
             </footer>
        </main>

    )
}
