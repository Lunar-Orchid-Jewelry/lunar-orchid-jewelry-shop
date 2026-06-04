import "./index.css"
import Home from './Home'
import { BrowserRouter } from 'react-router'
import { Route } from "react-router"
import { Routes } from "react-router"
import Navbar from "./Navbar"
import Products from "./products/Products"
import { cosmicOasis, productPages } from "./products/data"
import Product from "./products/Product"

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product key={0} item={cosmicOasis} />} />
          <Route path="products/:productId" element={<Products pages={productPages} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
