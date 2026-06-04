import "./index.css"
import Home from './Home'
import { BrowserRouter } from 'react-router'
import { Route } from "react-router"
import { Routes } from "react-router"
import Navbar from "./Navbar"
import Products from "./products/Products"
import { productItems } from "./products/data"

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products/:productId" element={<Products items={productItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
