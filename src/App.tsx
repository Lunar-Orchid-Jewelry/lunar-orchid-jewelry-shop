import "./index.css"
import Home from './Home'
import { BrowserRouter } from 'react-router'
import { Route } from "react-router"
import { Routes } from "react-router"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  )
}

export default App
