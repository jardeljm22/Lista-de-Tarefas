import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
import Rotes from './routes/Routers'
import { TarefaProvider } from './context/contextTarefas'
import './styles/index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <TarefaProvider>
      <Rotes />
      </TarefaProvider>
  </StrictMode>
)
