
import { useState } from 'react';
import Tarefas from './components/Tarefas';
import AddTarefas from "./components/AddTarefas";
import './App.css'

function App() {
     const [lista,setLista] = useState([
        {
            id :1 ,
            title : 'estudar programação',
            description : "estudar programação para se tornar um desenvolvedor full stack",
            isCompleted : false
        }
        ,
        {
            id :2 ,
            title : 'estudar inglês',
            description : "estudar inlgês para se tornar fluente",
            isCompleted : false
        },
        {
            id :3 ,
            title : 'estudar matemática ',
            description : "estudar matemática para se torna fera em cálculos",
            isCompleted : false
        }    
    ]);

 const ApagaTarefa = (id) => {
  const NovaListaAtualizada = lista.filter(t => t.id !== id)
  setLista(NovaListaAtualizada);
 }


  // alterando o valor para mostrar se a tarefa foi concluida ou não
    
    const alteraCheckLista = (id) =>{
        const recebeNovaListaAlterada = lista.map(obj =>{
          if(obj.id === id) {
            return {...obj,isCompleted : !obj.isCompleted }
          };
          return obj;
        }
      )
      setLista(recebeNovaListaAlterada)
    }

    const addNovaTarefa = (titulo,description) => {
      const NovaTarefa = {id : lista.length +1 ,
                          title : titulo,
                          description : description,
                          isCompleted : false}
      setLista([...lista,NovaTarefa]);
    }

  return (

    <div className='divPrinc'>
      <h1>Gerenciador de Tarefas</h1>
      <AddTarefas novaTarefa ={addNovaTarefa} />
      <Tarefas listatarefas={lista} 
      apagaTarefa={ApagaTarefa} 
      addCheckLista={alteraCheckLista} />
      </div>  
  )
}

export default App
