
import {createContext,useEffect,useState } from "react";
import { getTarefa,
    getTarefaId,
    createTarefa,
    deleteTarefa,
    updateTarefa } from "../services/Service";

// eslint-disable-next-line react-refresh/only-export-components
export const TarefaContext = createContext();
    // criando o provider do contexto
export const TarefaProvider  = ({children}) =>{

    const [listaTarefas,setListaTarefa] = useState([]);

    // adiciona a tarefa a api fake e atualiza o state da lista de tarefas
   const addTarefa = async (tarefa) =>{
        const listaAtualizada = await createTarefa(tarefa);
        setListaTarefa(listaAtualizada);
    }
    // deletando uma tarefa da lista de tarefas
    const deletTarefa = async (idTarefa) =>{
        const listaAtualizada = await deleteTarefa(idTarefa);
        setListaTarefa(listaAtualizada);
    }

    // alterando as informações de uma tarefa 
    const upTarefa = async (tarefa)=>{
        const tarefaAlterada = await updateTarefa(tarefa);
        setListaTarefa(tarefaAlterada);
    }

    // pegando uma tarefa especifica que retorna essa tarefa
    const tarefaId = async (id) =>{
        const tarefa = await getTarefaId(id);
        console.log(tarefa);
        return tarefa;
    }
    //marca a tarefa concluida
    const tarefaConcluida = async (tarefa1) =>{
        let Concluida = {};// objeto que vai receber a tarefa com a propriedade isCompleted alterada para true ou false  
            if(tarefa1.isCompleted === false){
                 Concluida = {...tarefa1, isCompleted : true};
            }else{
                 Concluida = {...tarefa1, isCompleted : false}
            }
        const newLista = await updateTarefa(Concluida);
        setListaTarefa(newLista);
    }

    useEffect(()=>{

        const carregaListaTarefa = async () =>{ // função para carregar a lista de tarefas do localStorage e atualizar o state da lista de tarefas
            const data = await getTarefa();
            setListaTarefa(data);
        }
        carregaListaTarefa();
    },[]);

    
    return (
        
        <TarefaContext.Provider value={ 
            {listaTarefas,
            addTarefa,
            deletTarefa,
            upTarefa,
            tarefaId,
            tarefaConcluida
            }} > 
            {children} 
        </TarefaContext.Provider>
    )

}