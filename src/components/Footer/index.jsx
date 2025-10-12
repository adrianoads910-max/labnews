import { Link } from "react-router-dom"
import { useState } from "react"
import { TextField } from "../../components/TextField"
import { Button } from "../../components/Button"

export const Footer = () => {

    const [email, setEmail] = useState("")
    
    const handleSubmit = event => {
        event.preventDefault()
        const dados = { email }
        console.log(dados)
    }

    return (
        <footer className="bg-amber-50 brightness-95 text-brand-blue-dark font-bold flex justify-center items-center">
            <div className="max-w-screen-xl mx-auto p-8 w-full"> 
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    <div className="flex flex-col items-center">
                        <form onSubmit={handleSubmit} className="w-full max-w-md text-brand-blue text-2xl">
                            <h2 className="text-3xl text-center font-semibold mb-6">Cadastre-se para receber notícias e atualizações.</h2>
                            
            
                            <TextField 
                                placeholder="Digite seu e-mail" 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email} 
                                onChange={event => setEmail(event.target.value)} 
                                className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-gray-900"
                            />
                            <button 
                                type="submit" 
                                className="w-full bg-brand-blue text-amber-50 font-bold py-3 px-4 rounded-lg hover:bg-brand-gray hover:text-brand-blue transition duration-300 shadow-md"
                            >
                                Cadastrar
                            </button>
                            
                        </form>
                    </div>

                    <div className="flex flex-col lg:items-start text-center lg:text-left gap-8 justify-center items-center">
                        <picture className="max-w-[180px]">
                            <img src="./logo-labnews.png" alt="logo goldfit" className="justify-center items-center"/>
                            <p className="p-2">📍 Seja um franqueado</p>
                        </picture>
                        
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-semibold">📩 Email: xxxx@gmail.com</p>
                            <p className="text-2xl font-semibold">🟢 Whatsapp: (98) 98832-5686</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-6 ">
                            <a className="text-3xl hover:underline" href="#">Instagram</a>
                            <a className="text-3xl hover:underline" href="#">Facebook</a>
                            <a className="text-3xl hover:underline" href="#">Twitter</a>
                        </div>
                    </div>

                </div>
                <div className="text-center border-t border-gray-700 mt-12 pt-6"> 
                    <p>&copy; 2025 Labnews. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>   
    )
}