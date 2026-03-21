
import { useContext,useEffect,useState } from 'react';
import Tarefas from './components/Tarefas';
import AddTarefas from "./components/AddTarefas";
import './styles/Home.css'
import { TarefaContext } from './context/contextTarefas';


const Home = () => {

  const {listaTarefas,
  addTarefa,
  deletTarefa,
  upTarefa,
  tarefaConcluida,
  } = useContext(TarefaContext);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setShow(true);
    },0)
    
  }, []);

  return (

    <div className={`div-principal-home ${show ? 'show' : ''}`}>
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

export default Home;
