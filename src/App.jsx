import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AboutPage } from "./pages/About"
import { Produts } from "./pages/Products"
import { Contact } from "./pages/Contact"


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Products' element={<Produts />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
