import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/Inicio'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

export function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<h1>sobre</h1>} />
        <Route path="/portfolio" element={<h1>portfolio</h1>} />
        <Route path="/contato" element={<h1>contato</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}