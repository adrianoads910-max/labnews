import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react"; 

export const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-amber-50 w-full shadow-md">
            
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 py-3 gap-4">
                
                <Link to="/" className="flex items-center gap-2">
                    <img 
                        src="./logo-labnews.png" 
                        alt="Logo Labnews" 
                        className="h-12 w-auto rounded-xl"/>
                    <span className="text-brand-blue font-extrabold text-2xl hidden sm:block">
                        LabNews
                    </span>
                </Link>

               
                <div className="flex-1 w-full md:max-w-lg relative order-3 md:order-none">
                    <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        className="w-full px-4 py-2 border border-brand-blue-dark rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue"/> 
                    <Search className="absolute right-3 top-2.5 text-brand-blue" size={22} />
                </div>

                <div className="flex items-center gap-4 order-2 md:order-none">
                    <button className="relative hover:scale-105 transition-transform">
                        <ShoppingCart size={26} className="text-brand-blue"/>
                    </button>
                    <Link
                        to="/login"
                        className="flex items-center gap-1 text-brand-blue font-semibold hover:text-brand-blue-dark"><User size={22} />
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="px-4 py-2 bg-brand-blue text-amber-50 rounded-full hover:bg-brand-blue-dark font-bold transition">
                        Cadastro
                    </Link>
            
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        type="button" 
                        className="p-2 md:hidden text-brand-blue hover:bg-gray-200 rounded-lg"
                    >
                        <Menu size={26} />
                        <span className="sr-only">Abrir menu principal</span>
                    </button>
                </div>
            </div>


            <nav className="bg-brand-blue-dark shadow-inner shadow-brand-blue-dark/50">
                <div className="max-w-screen-xl mx-auto">
                    <ul className="hidden md:flex justify-between text-amber-50 font-bold text-lg"><li>
                            <Link to="/" className="px-6 py-3 block hover:bg-brand-blue transition">
                                Home
                            </Link></li>
                        <li>
                            <Link to="/About" className="px-6 py-3 block hover:bg-brand-blue transition">
                                Institucional
                            </Link></li>
                        <li>
                            <Link to="/Products" className="px-6 py-3 block hover:bg-brand-blue transition">
                                Produtos
                            </Link></li>
                        <li>
                            <Link to="/Contact" className="px-6 py-3 block hover:bg-brand-blue transition">
                                Contato
                            </Link></li>
                    </ul>
                </div>
            </nav>
            
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-brand-blue md:hidden z-40 shadow-xl">
                    <ul className="flex flex-col items-center space-y-2 p-4">
                        <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 hover:bg-brand-blue-dark w-full text-center" to='/'>Home</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 hover:bg-brand-blue-dark w-full text-center" to='/About'>Institucional</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 hover:bg-brand-blue-dark w-full text-center" to='/Products'>Produtos</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 hover:bg-brand-blue-dark w-full text-center" to='/Contact'>Contato</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};