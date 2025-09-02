import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// import halaman
import App from './App.jsx'
import AnggotaKelas from './components/anggotaKelas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anggota" element={<AnggotaKelas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
