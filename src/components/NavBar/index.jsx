import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-amber-50 w-full">
            <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-4 relative">
                <div className="flex-1">
                    <Link to="/">
                        <img src="./logo-labnews.png" alt="logo labnews" className="h-15 rounded-4xl"/> 
                    </Link>
                </div>

         
                <div className="flex md:hidden">
                   
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        type="button" 
                        className="bg-amber-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brand-yellow rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex flex-row space-x-7">
                        <li><Link className="text-brand-blue text-2xl font-bold px-4 py-8  transition-colors duration-300 hover:bg-brand-blue hover:text-brand-white" to="/">Home</Link></li>
                        <li><Link className="text-brand-blue text-2xl font-bold px-4 py-8  transition-colors duration-300 hover:bg-brand-blue hover:text-brand-white" to="/About">Institucional</Link></li>
                        <li><Link className="text-brand-blue text-2xl font-bold px-4 py-8  transition-colors duration-300 hover:bg-brand-blue hover:text-brand-white" to="/Products">Produtos</Link></li>
                        <li><Link className="text-brand-blue text-2xl font-bold px-4 py-8  transition-colors duration-300 hover:bg-brand-blue hover:text-brand-white" to="/Contact">Contato</Link></li>
                    </ul>
                </div>
               
                <div className="bg-amber-50 hidden md:flex flex-1"></div>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-amber-50 md:hidden z-50">
                        <ul className="flex flex-col items-center space-y-4 p-4">
                            <li><Link onClick={() => setIsMenuOpen(false)} className="text-brand-yellow text-xl font-bold hover:underline" to='/'>Home</Link></li>
                            <li><Link onClick={() => setIsMenuOpen(false)} className="text-brand-yellow text-xl font-bold hover:underline" to='/About'>Institucional</Link></li>
                            <li><Link onClick={() => setIsMenuOpen(false)} className="text-brand-yellow text-xl font-bold hover:underline" to='/Products'>Produtos</Link></li>
                            <li><Link onClick={() => setIsMenuOpen(false)} className="text-brand-yellow text-xl font-bold hover:underline" to='/Contact'>Contato</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};