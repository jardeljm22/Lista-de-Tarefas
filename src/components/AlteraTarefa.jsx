
import { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../context/contextTarefas";
import { useParams } from "react-router-dom";

 

const AlteraTarefa = () =>{

    const [newTarefa,setNewTarefa] = useState();
    const [description,setDescription] = useState();
    const [tarefaAnterior,setTarefaAnterior] = useState({});
    const {id}  = Number(useParams());
    const {
        tarefaId,
        upTarefa}
         = useContext(TarefaContext);

    
    useEffect(()=>{

        const buscaTarefa = async (id) =>{
            let tarefa = await tarefaId(id);
            setTarefaAnterior(tarefa);
            setNewTarefa(tarefa.title);
            setDescription(tarefa.description);
        }
        buscaTarefa(id);
        },[id,tarefaId]);

    const AlteraTitle = (e)=>{
        setNewTarefa(e.target.value)
    }
    const AlteraDescription = (e)=>{
        setDescription(e.target.value)
    }

 
    return (
        <div>
            <input  onChange={(e)=>AlteraTarefa(e)} value={newTarefa} type="text" placeholder="digite um novo nome" />
            <input  onChange={(e)=>AlteraDescription(e)} value={description} type="text" placeholder="digite a descrição" />
            <button onClick={()=>upTarefa(
                {...tarefaAnterior,
                title: newTarefa ,
                description : description})} 
                >novo nome</button>
            <h3>
                {}
            </h3>
        </div>

    )
}

export default AlteraTarefa;