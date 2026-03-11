
import { useContext } from 'react';
import Tarefas from './components/Tarefas';
import AddTarefas from "./components/AddTarefas";
import './stiles/App.css'
import { TarefaContext } from './context/contextTarefas';


function App() {

const {listaTarefas,
  addTarefa,
  deletTarefa,
  upTarefa,
  tarefaConcluida,
  } = useContext(TarefaContext);

  return (

    <div className='divPrinc'>
      <h1>Gerenciador de Tarefas</h1>
      <AddTarefas novaTarefa ={addTarefa}
      lista={listaTarefas}
      funcaoTarefa={'Adicionar Tarefa'}
      
      />
      <Tarefas lista={listaTarefas} 
      apagaTarefa={deletTarefa} 
      addNewTarefa={addTarefa}
      alteraTarefa={upTarefa}
      Concluida={tarefaConcluida}
      />
      </div>  
  )
}

export default App
