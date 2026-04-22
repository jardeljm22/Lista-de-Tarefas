
import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TarefaContext } from "../context/contextTarefas";
import { useParams } from "react-router-dom";

export const useAlteraTarefa = () =>{

    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [tarefaAnterior,setTarefaAnterior] = useState({});
    const [carregando,setCarregando] = useState(false);
    const {id} = useParams(); // pegando o id da tarefa à ser modificada ( detalhe ... o id do useparams é do tipo string ,e precisa ser convertido para número )     
    const [ show,setShow ] = useState(false); // estado para controlar a animação de entrada da página
    const [ alterarTarefa,setAlterarTarefa ] = useState(false); // estado para controlar se a tarefa foi alterada ou não  
    const { tarefaId,upTarefa } = useContext(TarefaContext);

    useEffect(()=>{
        const buscaTarefa = async (id) =>{
            setCarregando(true);
            const tarefa = await tarefaId(Number(id)); // buscando a tarefa no service atravez do id
            if(tarefa){// se tiver tarefa executa
            setTarefaAnterior(tarefa); // adicionando a tarefa a ser modificada a variavel tarefaAnterior
            setTitle(tarefa.title);
            setDescription(tarefa.description);
            setCarregando(false);
            setTimeout(()=>{
              setShow(true); // alterando a variavel para ativar a trasicao do component div-container-altera-tarefa
            },50);
            }else{
                alert("tarefa não encontrada");
            }
        }
        buscaTarefa(id);// executando a funcao criada acima
        },[id,tarefaId]);

    const alteraTitle = (e)=>{
        setTitle(e.target.value)
    }
    const alteraDescription = (e)=>{
        setDescription(e.target.value)
    }
    const alteraTarefa = ()=>{
         upTarefa( {...tarefaAnterior, title: title , description : description}); 
         alert(`tarefa ${tarefaAnterior.title} alterada com sucesso`); 
         navigate('/'); 
    }

    return {carregando,
            alteraTarefa,
            setAlterarTarefa,
            alterarTarefa,
            alteraTitle,
            alteraDescription,
            tarefaAnterior,
            title,
            description,
            show
        }
}