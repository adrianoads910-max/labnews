import { Navbar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { ShoppingCart } from "lucide-react"; 
import { useCart } from '../../context/CartContext';
import PRODUCTS from '../../data/products.json';

const cleanAndParsePrice = (priceString) => {
  const cleanedString = priceString.replace('R$', '').trim();
  const finalString = cleanedString.replace(/\./g, '').replace(',', '.');
  return parseFloat(finalString);
};

export const Cart = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart(); 

  const subtotal = cartItems.reduce((acc, item) => {
    const priceValue = cleanAndParsePrice(item.price);
    return acc + (priceValue * item.quantity);
  }, 0);

 
  const findProductByName = (name) => {
    for (const category of Object.values(PRODUCTS)) {
      const found = category.find(p => p.name.includes(name));
      if (found) return found;
    }
    return null;
  };

  const handleBuyClick = (name) => {
    const product = findProductByName(name);
    if (product) {
      addToCart(product, 1);
      alert(`${product.name} adicionado ao carrinho!`);
    } else {
      alert("Produto não encontrado no catálogo.");
    }
  };

  const MOSTSALES = [
    {
      name: "Extrator Soxhlet",
      img: { src: "./soxlhet.png", alt: "Soxhlet" },
      itemPrice: "R$ 750,00"
    },
    {
      name: "Hidróxido de Sódio Micropérolas PA ACS 1000g - Dinâmica",
      img: { src: "./naoh.png", alt: "Hidróxido de Sódio" },
      itemPrice: "R$ 45,96"
    },
    {
      name: "GC-MS",
      img: { src: "./gc.png", alt: "GC-MS" },
      itemPrice: "R$ 750.000,00"
    },
    {
      name: "Chromatography Solution",
      img: { src: "./soft.png", alt: "Chromatography Solution" },
      itemPrice: "R$ 1050,00"
    }
  ];

  return (
    <main className="w-full m-auto min-h-screen bg-brand-blue">
      <Navbar />
      <section className="flex flex-col lg:flex-row items-start max-w-screen-xl mx-auto p-8 gap-12">

        <div className="lg:w-1/2 bg-amber-50 p-4 rounded-lg shadow-lg">
          <div className="bg-amber-50 flex flex-col items-start p-4">
            <div className="flex items-center gap-4 mb-4">
              <ShoppingCart size={40} className="text-brand-blue" />
              <h6 className="text-brand-blue md:text-2xl font-semibold">
                Seu Carrinho ({cartItems.length} itens)
              </h6>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-brand-blue md:text-2xl font-semibold">
                Seu carrinho está vazio. Adicione produtos!
              </p>
            ) : (
              <ul className="w-full space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-brand-blue-dark pb-4 flex items-center justify-between text-brand-blue-dark gap-4"
                  >
                    <div className="flex items-center gap-4 w-1/2">
                      <img
                        src={item.image.src || item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border border-brand-blue-dark"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                       
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-brand-blue-dark text-amber-50 rounded-md hover:bg-brand-blue transition"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-brand-blue-dark text-amber-50 rounded-md hover:bg-brand-blue transition"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-bold w-24 text-right">
                      R${(cleanAndParsePrice(item.price) * item.quantity)
                        .toFixed(2)
                        .replace('.', ',')} </span>

                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 font-bold text-sm"> Remover</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-brand-blue md:text-xl font-semibold text-xs p-4 py-12">
            Para conseguir frete grátis, adicione produtos de um mesmo vendedor.
          </p>
        </div>

        <div className="lg:w-1/2 bg-amber-50 p-4 rounded-lg shadow-lg w-full">
          <h5 className="text-brand-blue md:text-2xl font-semibold p-4 border-b border-brand-blue-dark">Resumo da compra</h5>
          <div className="text-brand-blue md:text-xl font-semibold p-6 space-y-2">
            <div className="flex justify-between">
              <h2>Subtotal:</h2>
              <h3>R$ {subtotal.toFixed(2).replace('.', ',')}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Frete:</h3>
              <h3 className="text-green-600">Grátis*</h3>
            </div>
            <div className="flex justify-between pt-4 border-t border-brand-blue-dark mt-4">
              <h4 className="font-bold">Total:</h4>
              <h4 className="font-bold">R$ {subtotal.toFixed(2).replace('.', ',')}</h4>
            </div>
          </div>

          <button className="w-full py-2 bg-brand-blue-dark hover:bg-brand-blue transition-colors text-amber-50 font-bold rounded-md mt-auto"> Finalizar Compra</button>
        </div>
      </section>


      <section className="flex flex-col lg:flex-row w-full p-8 gap-12 bg-brand-blue-dark">
        <article className="lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
          <h4 className="text-3xl md:text-5xl font-bold text-amber-50 p-6">
            Mais Vendidos
          </h4>
          <p className="text-lg md:text-2xl text-amber-50 p-6">
            Transforme seu laboratório com nossos equipamentos modernos.
          </p>
          <div className="p-6">
            <Button variant="primary">Confira os mais vendidos</Button>
          </div>
        </article>

        <section className="lg:w-1/2 flex justify-center">
          <picture className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {MOSTSALES.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between items-center text-center font-bold text-brand-blue-dark bg-amber-50 border border-amber-50 rounded-2xl shadow-lg overflow-hidden hover:bg-brand-blue-dark hover:text-amber-50 transition-all duration-300"
              >
                <div className="relative overflow-hidden w-full">
                  <img
                    src={item.img.src}
                    alt={item.img.alt}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <article className="flex flex-col flex-1 justify-between p-4 w-full">
                  <p className="text-lg md:text-xl font-extrabold">{item.name}</p>
                  <p className="text-lg md:text-xl font-semibold mb-4">{item.itemPrice}</p>

                  <button
                    onClick={() => handleBuyClick(item.name)}
                    className="w-full py-2 bg-brand-blue-dark hover:bg-amber-50 transition-colors text-amber-50 font-bold hover:text-brand-blue-dark rounded-md"
                  >
                    Comprar
                  </button>
                </article>
              </div>
            ))}
          </picture>
        </section>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};
