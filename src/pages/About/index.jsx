import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { Target, Lightbulb, Sparkles } from "lucide-react";


const VALUES = [
    {
       
        icon: <Target size={48} className="text-brand-blue-light " />, 
        title: 'MISSÃO',
        bgColor: "bg-amber-50",
        items: [
            "Fornecer equipamentos e soluções laboratoriais de alta qualidade que impulsionem a pesquisa, a inovação e o avanço científico, oferecendo tecnologia confiável e suporte especializado para laboratórios em todo o Brasil."
        ],
    
    },
    {
     
        icon: <Lightbulb size={48} className="text-brand-blue-light" />, 
        title: 'VISÃO',
        bgColor: "bg-amber-50",
        items: [
            "Ser referência nacional no fornecimento de equipamentos e produtos laboratoriais, reconhecida pela excelência em qualidade, inovação e compromisso com o sucesso dos nossos clientes e parceiros científicos."
        ],
    
    },
    {
       
        icon: <Sparkles size={48} className="text-brand-blue-light " />, 
        title: 'VALORES',
        bgColor: "bg-amber-50",
        items: [
            "Inovação: buscamos constantemente novas tecnologias e soluções para aprimorar o trabalho em laboratórios.",
            "Qualidade: garantimos produtos precisos, duráveis e certificados.",
            "Ética: atuamos com transparência, respeito e responsabilidade em todas as relações.",
            "Comprometimento: apoiamos cada cliente com atendimento especializado e soluções sob medida.",
            "Sustentabilidade: promovemos práticas responsáveis e o uso consciente de recursos.",
            "Conhecimento: valorizamos a ciência e o desenvolvimento contínuo de nossa equipe e parceiros."
        ],
    }
]

const GROUP = [
    {
        img: {
            src: "./group5.png",
            alt: "Equipe"
        },
        text: " CEO Dra. Temperance Brenan, PSY.D"
        

    },
    {
        img: {
            src: "./group.png",
            alt: "Equipe"
        },
        text: "Dra. Tai Schell, PSY.D"
        

    },
    {
        img: {
            src: "./group1.png",
            alt: "reagentes"
        },
        text: "Dr. Emmett Marsh, PHD"
    },
    {
        img: {
            src: "./group2.png",
            alt: "equipamentos"
        },
        text: "CEO P&D Dr. Josh Gray, PHD"
    }
]

export const AboutPage = () => {

    return (
        <main className=" w-full m-auto min-h-screen bg-brand-blue">
        <Navbar />    
          <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                    <h3 className="text-xl md:text-5xl lg:text-center font-bold text-amber-50 p-6">Construindo laboratórios desde 1985</h3>
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
            
            <section className="w-full p-8 bg-brand-blue-light">
        
           <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 ">
                {VALUES.map((item) => (
                    <section key={item.title} className={`flex flex-col items-center text-center text-brand-blue-dark border p-6 rounded-2xl space-y-4 border-amber-50 ${item.bgColor}  hover:bg-brand-blue-dark hover:text-amber-50`}>
                     <div className="mb-4">
                        {item.icon}
                    </div>

                    <h3 className="text-3xl font-semibold">{item.title}</h3>

                    <ul className="flex flex-col items-center space-y-2">
                        {item.items.map((feature) => (
                        <li key={feature}>{feature}</li>
                        ))}
                    </ul>

                    <article className="text-center"></article>
                    </section>
                ))}
                </div>

        </section>
            <div>
                <article>
                    <h3 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6">Conheça nossa equipe:</h3>
                </article>
                <picture className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GROUP.map((item) => (
                        <section key={item.img.src} className="text-neutral-50 p-3">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                                src={item.img.src}
                                alt={item.img.alt}
                                className="rounded-2xl w-full h-64 object-cover"/>
                                <p className="text-amber-50 text-lg font-extrabold tracking-wide uppercase p-4">
                                {item.text}
                                </p>
                        </div>
                        </section>
                    ))}
                </picture>


            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}