import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EstudianteCard from './components/EstudianteCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EstudianteCard nombre='Juan' carrera='Sistemas'/>
    <EstudianteCard nombre='Rodrigo' carrera='Secretariado'/>
    <EstudianteCard nombre='Pedro' carrera='Sistemas'/>
  </StrictMode>,
)
