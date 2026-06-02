import "./index.css"
import Home from './Home'
import { BrowserRouter } from 'react-router'
import { Route } from "react-router"
import { Routes } from "react-router"
import Product from "./Product"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  )
}

export default App
