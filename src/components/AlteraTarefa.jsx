
import "../styles/AlteraTarefa.css"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TarefaContext } from "../context/contextTarefas";
import { useParams } from "react-router-dom";

 

const AlteraTarefa = () =>{

    const navigate = useNavigate();
    const [newTarefa,setNewTarefa] = useState('');
    const [description,setDescription] = useState('');
    const [tarefaAnterior,setTarefaAnterior] = useState({});
    const [carregando,setCarregando] = useState(true);
    // pegando o id da tarefa à ser modificada ( detalhe ... o id do useparams é do tipo string ,e precisa ser convertido para número )
    const {id}  = useParams();

    const [show,setShow] = useState(false); // estado para controlar a animação de entrada da página
    const [alterarTarefa,setAlterarTarefa] = useState(false); // estado para controlar se a tarefa foi alterada ou não  

    const {
        tarefaId,
        upTarefa}
         = useContext(TarefaContext);

    
    useEffect(()=>{
      
        const buscaTarefa = async (id) =>{

            const tarefa = await tarefaId(Number(id)); // buscando a tarefa no service atravez do id
            if(tarefa){// se tiver tarefa executa
            setTarefaAnterior(tarefa); // adicionando a tarefa a ser modificada a variavel tarefaAnterior
            setNewTarefa(tarefa.title);
            setDescription(tarefa.description);
            setCarregando(false);
            setTimeout(()=>{
              setShow(true); // alterando a variavel para ativar a trasicao do component div-container-altera-tarefa
            },50);
            }
        }
        buscaTarefa(id);// executando a funcao criada acima
        },[]);

    const alteraTitle = (e)=>{
        setNewTarefa(e.target.value)
    }
    const alteraDescription = (e)=>{
        setDescription(e.target.value)
    }

    if(carregando){
        return <h1>caregando dados .....</h1>
    }
    return (
        <>
        <div className={`div-container-altera-tarefa ${show ? 'show' : ''}`} >
            <h1>Editar Tarefa</h1>
            <div className="div-input" >
                <label htmlFor="title">Título da Tarefa</label>
                <input autoFocus id="title"
                    onChange={(e)=>alteraTitle(e)} 
                    value={newTarefa} 
                    type="text" 
                    placeholder="digite um novo nome" />

            </div>
            <div className="div-input-descricao" >
                <label htmlFor="description">Nova descrição </label>
                <textarea  id="description"
                    onChange={(e)=>alteraDescription(e)} 
                    value={description} 
                    placeholder="digite a descrição" />
            </div>
            

            <button onClick={()=>{

                setAlterarTarefa(true);
                
                }} 
                >alterar</button>
                
    
            </div>
            <div  className={`div-confirmacao ${alterarTarefa ? 'show' : ''}`} >
               <div className="div-confirmacao-conteudo" >
                <h2>deseja  alterar a tarefa {tarefaAnterior.title}?</h2>
                <button onClick={()=>{
                    upTarefa(
                        {...tarefaAnterior,
                        title: newTarefa ,
                        description : description}
                        )
                    alert(`tarefa ${tarefaAnterior.title} alterada com sucesso`);
                    navigate('/');
                    }} 
                > alterar</button>
               </div>
            </div>

        </>
    )
}

export default AlteraTarefa;