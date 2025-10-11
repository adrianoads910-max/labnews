import { Navbar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

const SHOWCASE = [
    {
        img: {
            src: "./vidrarias.png",
            alt: "vidrarias"
        },
        trainer: "Vidrarias"
        

    },
    {
        img: {
            src: "./reagentes.png",
            alt: "reagentes"
        },
        trainer: "Reagentes"
    },
    {
        img: {
            src: "./equipamentos.png",
            alt: "equipamentos"
        },
        trainer: "Equipamentos"
    },
    {
        img: {
            src: "./softwares.png",
            alt: "softwares"
        },
        trainer: "Softwares"
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
                    <h1 className="text-xl md:text-5xl text-center lg:text-left text-amber-50  p-2">⚗️ Tudo o que seu Laboratório Precisa em um Só Lugar 🔬</h1>
                    <p className="text-xl md:text-xl text-center lg:text-left text-amber-50 p-2">“Oferecemos reagentes, vidrarias, equipamentos e acessórios laboratoriais das melhores marcas, com entrega em todo o Brasil.”</p>
                    <section className="right-6 sm:right-10 flex justify-center-safe w-[40%]">
                    <Button variant="primary">Descubra mais</Button>
                    </section>
                </div>
            </div>
            <section>
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
                                {item.trainer}
                                </p>
                            </div>
                        </div>
                        </section>
                    ))}
                </picture>
            </section>
            <footer>
                <Footer />
             </footer>
        </main>

    )
}
