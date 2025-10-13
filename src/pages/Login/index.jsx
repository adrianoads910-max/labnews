import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { TextField } from "../../components/TextField"

export const Login = () => {


  return (
    <main className="min-h-screen flex flex-col bg-brand-blue-light">
      <Navbar />


      <section className="flex flex-col lg:flex-row items-center justify-center flex-1 px-6 py-10">
      
        <div className="flex flex-col items-center justify-center text-center p-10 lg:p-20 gap-8 bg-amber-50 rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg">
          <h1 className="text-2xl lg:text-3xl text-brand-blue-dark font-semibold">
            Digite seu e-mail ou telefone para iniciar sessão
          </h1>

       
          <div className="flex flex-col text-left gap-1 w-full">
            <label className="text-xs text-brand-blue-dark">E-mail ou telefone:</label>
            <input
              type="text"
              className="rounded-md p-2 border-2 border-brand-blue-dark outline-none bg-brand-white focus:bg-slate-200 transition w-full"
            />
          </div>

        
          <div className="flex flex-col text-left gap-1 w-full">
            <label className="text-xs text-brand-blue-dark">Senha:</label>
            <input
              type="password"
              className="rounded-md p-2 border-2 border-brand-blue-dark outline-none bg-brand-white focus:bg-slate-200 transition w-full"/>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-xs text-brand-blue-dark">Lembrar senha</label>
            </div>
          </div>

          <button className="w-full py-2 text-xl rounded-md bg-brand-blue-dark text-amber-50 hover:bg-brand-blue transition">
            Login</button>

          <p className="text-xs text-brand-blue-dark font-semibold">
            Não tem conta?{" "}<a href="/signup" className="hover:text-brand-blue-dark hover:underline">Registre-se</a></p>
        </div>
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
