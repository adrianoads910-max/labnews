import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AboutPage } from "./pages/About"
import { Produts } from "./pages/Products"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Cart } from "./pages/Cart"
import { CartProvider } from './context/CartContext';
import { SoftwaresPlans } from "./pages/SoftwaresPlans"
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";


const App = () => {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Products' element={<Produts />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/SoftwaresPlans' element={<SoftwaresPlans />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
