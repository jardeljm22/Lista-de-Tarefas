
import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import '../styles/Tarefas.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Tarefas = ({lista,concluida,apagaTarefa}) =>{
    
    const navigate = useNavigate()
    const [apagar,setApagar] = useState(false);
    const [nomeTarefa,setNomeTarefa] =useState("");
    const [idTarefa,setIdTarefa] = useState();
    const [idHoverMensagem,setidHoverMensagem] = useState(null);

    const detalhes = (id,title,description) =>{
        navigate(`/Detalhes?Title=${title}&Description=${description}&id=${id}`)
    }
    const pegaNomeDaTarefa = (tarefa ) => {
        setNomeTarefa(tarefa.title);
        setIdTarefa(tarefa.id);
        setApagar(true);
    }
    const naoApagarTarefa = ()=>{ 
        setApagar(false)
    }
    const marcarTarefaConcluida = (tarefa)=>{
        concluida(tarefa) 
    }
    
    return (
        <>
            <div className={`div-tarefa ${lista.length === 0 ? 'div-tarefa-off' : ''}`}>
                <ul>
                    {lista.map((tarefa)=>(
                        <li key={tarefa.id} >
                            <div className='div-mensagem' onMouseEnter={()=>setidHoverMensagem(tarefa.id)} onMouseLeave={()=>setidHoverMensagem(null)} >
                                <span className={` nao-mostrar-mensagem  ${tarefa.isCompleted === false && idHoverMensagem === tarefa.id ? "mostrar-mensagem": ""} `} 
                                    >marcar tarefa como concluída 
                                </span>
                                <button onClick={()=>{ marcarTarefaConcluida(tarefa) }} className={` title ${tarefa.isCompleted?'completa':""}`} > {tarefa.title} </button>
                            </div>
                            <button className='transicao' onClick={()=>detalhes(tarefa.id,tarefa.title,tarefa.description)} > <ChevronRightIcon/> </button>
                            <button className='transicao' onClick={()=>pegaNomeDaTarefa(tarefa)} > <TrashIcon/> </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`div-mensagem-tarefa ${apagar?'show' : ''}`}>
                <div className='div-cofirma-exclusao'>
                    <h2> deseja apagar a tarefa  {nomeTarefa}? </h2>
                    <div className='div-botao-confirma-exclusao' >
                        <button onClick={ ()=>{ apagaTarefa(idTarefa) ; setApagar(false)}} >sim</button>
                        <button onClick={ naoApagarTarefa } >não</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarefas;