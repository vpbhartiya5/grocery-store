import Home from "../components/Home"
import CartPage from "../components/CartPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}
