import React, { useState } from 'react';
import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import PRODUCTS from '../../data/products.json';
import { Search } from "lucide-react"; 
import { useCart } from '../../context/CartContext';

export const Produts = () => {

    const { addToCart } = useCart(); 
    const initialQuantities = {};
    const maxQuantities = {};

    Object.keys(PRODUCTS).forEach(category => {
        PRODUCTS[category].forEach(product => {
            initialQuantities[product.id] = 1;
            
            maxQuantities[product.id] = typeof product.quantity !== 'undefined'
                ? product.quantity
                : Infinity; 
        });
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleQuantityChange = (productId, delta) => {
        setQuantities(prevQuantities => {
            const currentQuantity = prevQuantities[productId] || 1;
            const maxQuantity = maxQuantities[productId] ?? Infinity;

            
            const newQuantity = Math.max(1, Math.min(currentQuantity + delta, maxQuantity));

            return {
                ...prevQuantities,
                [productId]: newQuantity,
            };
        });
    };

    const handleBuyClick = (product) => {
        const quantity = quantities[product.id] || 1; 
        
        addToCart(product, quantity);
        
        alert(`${quantity}x ${product.name} adicionado(s) ao carrinho!`);
    }

   
    const allProducts = Object.values(PRODUCTS).flat();

    const filteredProducts = allProducts.filter(
        (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    const QuantityControl = ({ productId }) => {
        const current = quantities[productId] || 1;
        const max = maxQuantities[productId] ?? Infinity;
        const isAtMin = current <= 1;
        const isAtMax = current >= max;

        return (
            <div className="flex items-center justify-between mb-4">
                <span className="text-xl  md:text-xs font-bold">Quantidade:</span>
                <div className="flex border border-brand-blue-dark rounded-md">
                    <button
                        className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 text-brand-blue-dark font-bold rounded-l-md text-xl ${isAtMin ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => !isAtMin && handleQuantityChange(productId, -1)}
                        disabled={isAtMin}> -</button>

                    <span className="px-3 py-1 bg-white text-brand-blue-dark font-bold border-l border-r border-brand-blue-dark">
                        {current}
                    </span>

                    <button
                        className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 text-brand-blue-dark font-bold rounded-r-md text-xl ${isAtMax ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => !isAtMax && handleQuantityChange(productId, 1)}
                        disabled={isAtMax}>+ </button>
                </div>
            </div>
        );
    };

    
    const ProductCard = ({ product }) => (
        <section 
            key={product.id} 
            className="text-brand-blue-dark p-3 bg-amber-50 rounded-lg shadow-lg h-full" >
            <div className="flex flex-col h-full"> 
                
                <div className="relative overflow-hidden group rounded-2xl">
                    <img
                        src={product.image.src} 
                        alt={product.image.alt} 
                        className="rounded-2xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
                
                <h4 className="text-xl font-bold mt-3 text-brand-blue-dark">{product.name}</h4>
                
                <p className="text-2xl font-extrabold text-brand-blue-dark my-2">R$ {product.price} </p>
                
                <p className="text-sm text-brand-blue-dark mb-4 flex-1">{product.description} </p>
                
                <QuantityControl productId={product.id} />
                
                <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md mt-auto"  
                    onClick={() => handleBuyClick(product)}>Comprar</button>

            </div>
        </section>
    );

    return (
        <main className=" w-full m-auto min-h-screen bg-brand-blue">
            <Navbar />
             <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto p-4 gap-8">
                
                <section className="w-full lg:w-1/4 xl:w-1.5/10 lg:sticky lg:top-24 self-start bg-brand-blue z-20 p-0"> 
                    
                    <div className="relative p-4 bg-brand-blue lg:p-0 lg:mb-4">
                        <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="w-full px-4 py-2 border border-brand-blue-dark bg-amber-50 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue"/>
                        <Search className="absolute right-7 top-3 text-brand-blue" size={24} />
                    </div>
                    
                
                    <ul className="space-y-4 text-amber-50 font-bold text-lg p-4 lg:p-0">
                        <li><a href="#reagents" className="hover:text-brand-blue-light transition-colors block">Reagentes</a></li>
                        <li><a href="#glassworks" className="hover:text-brand-blue-light transition-colors block">Vidrarias</a></li>
                        <li><a href="#equipment" className="hover:text-brand-blue-light transition-colors block">Equipamentos</a></li>
                        <li><a href="#software" className="hover:text-brand-blue-light transition-colors block">Softwares</a></li>
                    </ul>    
                </section>
                
                <section className="lg:w-3/4">
                    {searchTerm ? (
                        <>
                            <h3 className="text-3xl font-bold text-amber-50 p-6">
                                Resultados da busca por: “{searchTerm}”
                            </h3>
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-amber-50 text-xl font-semibold p-6">
                                    Nenhum produto encontrado.
                                </p>
                            )}
                        </>
                    ) : (
                        <>
                            {Object.keys(PRODUCTS).map((key) => (
                                <div key={key}>
                                    <h3
                                        id={key}
                                        className="text-xl md:text-5xl font-bold text-amber-50 p-6 mt-10">
                                    
                                        {key === "reagents"
                                            ? "Produtos Químicos:"
                                            : key === "glassworks"
                                            ? "Vidrarias:"
                                            : key === "equipment"
                                            ? "Equipamentos:"
                                            : "Softwares:"}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                                        {PRODUCTS[key].map((product) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </section>
                </div>                
            <footer>
                <Footer />
            </footer>
        </main>
    )
}