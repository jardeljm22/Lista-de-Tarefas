
import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import '../stiles/Tarefas.css'
import "../stiles/App.css"
import { useNavigate } from 'react-router-dom';


function Tarefas ({lista,Concluida,apagaTarefa}) {
    
    const navigate = useNavigate()

    const detalhes = (id,title,description) =>{
        navigate(`/Detalhes?Title=${title}&Description=${description}&id=${id}`)
    }

    return (
        <div className=' divTarefaP'>
            <ul>
                {lista.map((tarefa)=>(
                    <li key={tarefa.id} >
                        <button onClick={()=>{Concluida(tarefa)}} className={`title ${tarefa.isCompleted?'completa':""}`}  > {tarefa.title} </button>
                        <button onClick={()=>detalhes(tarefa.id,tarefa.title,tarefa.description)} > <ChevronRightIcon/> </button>
                        <button onClick={()=>apagaTarefa(tarefa.id)} > <TrashIcon/> </button>
                    </li>
               ))}
            </ul>
        </div>
    )
}

export default Tarefas;