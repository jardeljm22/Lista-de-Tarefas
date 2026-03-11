import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stiles/index.css'
import Rotes from './routes/Routers'
import { TarefaProvider } from './context/contextTarefas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TarefaProvider>
      <Rotes />
      </TarefaProvider>
  </StrictMode>,
)
