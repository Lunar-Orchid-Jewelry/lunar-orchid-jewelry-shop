import "./index.css"
import Home from './Home'
import { BrowserRouter } from 'react-router'
import { Route } from "react-router"
import { Routes } from "react-router"
import Product from "./Product"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
