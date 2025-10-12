import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import PRODUCTS from '../../data/products.json'; 

export const Produts = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-brand-blue">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <section className="lg:w-1/9">
                    <ul>
                        <li>Reagentes</li>
                        <li>Vidrarias</li>
                        <li>Equipamentos</li>
                        <li>Softwares</li>
                    </ul>
                </section>
                <section className="lg:w-9/10">
                    <div>
                        <article>
                            <h3 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6">Produtos Químicos:</h3>
                        </article>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                            {PRODUCTS.reagents.map((product) => ( 
                                <section 
                                    key={product.id} 
                                    className="text-brand-blue-dark p-3 bg-amber-50 rounded-lg shadow-lg"
                                >
                                    <div className="relative overflow-hidden group rounded-2xl">
                                    
                                        <img
                                            src={product.image.src} 
                                            alt={product.image.alt} 
                                            className="rounded-2xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        
                                        <h4 className="text-xl font-bold mt-3 text-brand-blue-dark">{product.name}</h4>
                                        
                                        <p className="text-2xl font-extrabold text-brand-blue-dark my-2">
                                            R$ {product.price} 
                                        </p>
                                        
                                        <p className="text-sm text-brand-blue-dark mb-4">{product.description} </p>
                                        
                                        <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md">
                                            Comprar
                                        </button>

                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>

                    <div>
                        <article>
                            <h3 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6 mt-10">Vidrarias:</h3>
                        </article>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                            {PRODUCTS.glassworks.map((product) => ( 
                                <section 
                                    key={product.id} 
                                    className="text-brand-blue-dark p-3 bg-amber-50 rounded-lg shadow-lg"
                                >
                                    <div className="relative overflow-hidden group rounded-2xl">
                                    
                                        <img
                                            src={product.image.src}
                                            alt={product.image.alt}
                                            className="rounded-2xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        
                                        <h4 className="text-xl font-bold mt-3 text-brand-blue-dark">{product.name}</h4>
                                        
                                        <p className="text-2xl font-extrabold text-brand-blue-dark my-2">
                                            R$ {product.price} 
                                        </p>
                                        
                                        <p className="text-sm text-brand-blue-dark mb-4">{product.description} </p>
                                        
                                        <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md">
                                            Comprar
                                        </button>

                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>

                    <div>
                        <article>
                            <h3 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6 mt-10">Equipamentos:</h3>
                        </article>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                            {PRODUCTS.equipment.map((product) => ( 
                                <section 
                                    key={product.id} 
                                    className="text-brand-blue-dark p-3 bg-amber-50 rounded-lg shadow-lg"
                                >
                                    <div className="relative overflow-hidden group rounded-2xl">
                                    
                                        <img
                                            src={product.image.src}
                                            alt={product.image.alt}
                                            className="rounded-2xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        
                                        <h4 className="text-xl font-bold mt-3 text-brand-blue-dark">{product.name}</h4>
                                        
                                        <p className="text-2xl font-extrabold text-brand-blue-dark my-2">
                                            R$ {product.price} 
                                        </p>
                                        
                                        <p className="text-sm text-brand-blue-dark mb-4">{product.description} </p>
                                        
                                        <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md">
                                            Comprar
                                        </button>

                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>

                    <div>
                        <article>
                            <h3 className="text-xl md:text-5xl lg:text-left font-bold text-amber-50 p-6 mt-10">Softwares:</h3>
                        </article>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                            {PRODUCTS.software.map((product) => ( 
                                <section 
                                    key={product.id} 
                                    className="text-brand-blue-dark p-3 bg-amber-50 rounded-lg shadow-lg"
                                >
                                    <div className="relative overflow-hidden group rounded-2xl">
                                    
                                        <img
                                            src={product.image.src}
                                            alt={product.image.alt}
                                            className="rounded-2xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        
                                        <h4 className="text-xl font-bold mt-3 text-brand-blue-dark">{product.name}</h4>
                                        
                                        <p className="text-2xl font-extrabold text-brand-blue-dark my-2">
                                            R$ {product.price} 
                                        </p>
                                        
                                        <p className="text-sm text-brand-blue-dark mb-4">{product.description} </p>
                                        
                                        <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md">
                                            Comprar
                                        </button>

                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </section>
                </div>                
            <footer>
                <Footer />
            </footer>
        </main>
    )
}