import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/Inicio'
import { Contato} from './pages/Contato'

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
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}