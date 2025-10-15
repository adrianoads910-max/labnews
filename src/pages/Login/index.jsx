import React, { useState } from 'react';
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { TextField } from "../../components/TextField"
import { Facebook, Chrome, Linkedin } from 'lucide-react';

export const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        const dados = { email, password }
        console.log(dados)
        setEmail("")
        setPassword("")
    }


  return (
    <main className="min-h-screen flex flex-col bg-brand-blue-light">
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-center flex-1 px-6 py-10">
      
        <form onSubmit={handleSubmit}  className="flex flex-col items-center justify-center text-center p-10 lg:p-16 gap-8 bg-brand-blue-dark rounded-2xl w-full max-w-md lg:max-w-lg shadow-2xl">
          <h1 className="text-2xl lg:text-3xl text-amber-50 font-semibold">
            Digite seu e-mail ou telefone para iniciar sessão
          </h1>
         
          <div className="flex flex-col text-left gap-1 w-full">
            <label className="text-xs text-amber-50">E-mail ou telefone:</label>
            <TextField type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} className=" bg-brand-white hover:bg-gray-100 text-brand-blue-dark"/>
            
          </div>

        
          <div className="flex flex-col text-left gap-1 w-full">
            <label className="text-xs text-amber-50">Senha:</label>
            <TextField  type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} className=" bg-brand-white hover:bg-gray-100 text-brand-blue-dark"/>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-xs text-amber-50">Lembrar senha</label>
            </div>
          </div>

          <button className="w-full py-2 text-xl rounded-md bg-amber-50 text-brand-blue-dark hover:bg-brand-blue-light hover:text-amber-50 transition">
            Login</button>

            <div className="flex justify-between w-full">
                <p className="text-xs text-amber-50 font-semibold">
                    Não tem conta?{" "}<a href="/signup" className="hover:text-amber-100 hover:underline">Registre-se</a></p>
                <a href="#" className="text-xs font-semibold text-amber-50 hover:underline dark:text-amber-50">Forgot password?</a> 
            </div>

          
            <span className="text-xs text-amber-50">ou use sua conta</span>
            <div className="flex gap-6 ">
                <a href="#" className="social"><Facebook size={40} className="text-amber-50"/></a>
                <a href="#" className="social"><Chrome size={40} className="text-amber-50"/></a>
                <a href="#" className="social"><Linkedin size={40} className="text-amber-50"/></a>
            </div>
       
        </form>
        <img
          src="./banner1.png"
          alt="Banner de Login"
          className="hidden lg:block  w-[600px] h-auto  object-cover shadow-xl"
        />
      </section>

      <Footer />
    </main>
  );
};
