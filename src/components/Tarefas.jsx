
import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import '../Tarefas.css'
import "../App.css"
function Tarefas (props) {



    return (
        <div className=' divTarefaP'>
            <ul>
                {props.listatarefas.map((tarefa)=>(
                    <li key={tarefa.id} >
                        <button onClick={()=>{props.addCheckLista(tarefa.id)}} className={`title ${tarefa.isCompleted?'completa':""}`}  > {tarefa.title} </button>
                        <button> <ChevronRightIcon/> </button>
                        <button onClick={()=>props.apagaTarefa(tarefa.id)} > <TrashIcon/> </button>
                    </li>
               ))}
               
            </ul>
        </div>

    )
}

export default Tarefas;