
import '../styles/AddTarefas.css'
import { useState } from 'react';

const AddTarefas = (props)  => {


    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [alterar,setAlterar] = useState(false);
    const [alerta ,setAlerta] = useState(false);

    const adicionaTarefa = () =>{
        // removendo os espaços com o metodo trim() do titulo e da 
        // descrição para verificar se há alguma coisa escrita
        if(title.trim().length  > 0 && description.trim().length > 0){ 
         setAlterar(true)
            // adicionando valores ao objeto
            let novaTarefa = {
            id : Date.now(),
            title : title ,
            description : description,
            isCompleted : false
            }
            props.novaTarefa(novaTarefa) ; // passando o objeto criado acima para ser inserido na lista de tarefas
            setTitle("");
            setDescription("");// zerando os inputs depois de adicionar uma tarefa

            setTimeout(()=>{
                setAlterar(false); // setando a variavel alterar para fazer a mensagem de adicionada sumir depois de 1 segundo e meio
            },1500);

        } else{                  
            setAlerta(true);
        }
    }

    return (
        <>
        <div className='div-container-addtarefas' >
            <input value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="spaco " type="text" placeholder="título da tarefa" />
            <input value={description} 
            onChange={e => setDescription(e.target.value)}

            className="spaco" type="text" placeholder="descrição da tarefa" />
            <button className="spaco "onClick={ ()=>{adicionaTarefa()}}
                 >{props.funcaoTarefa}</button>
        </div>
        <div className={`div-alerta ${alerta?'alerta':""} `} >
            <div className='div-conteudo-alerta'>
                <h1>verifique se os campos estão preenchidos corretamente para adicionar !</h1>
                <button onClick={()=>{setAlerta(false)}} >ok</button>
            </div>
        </div>

        <div className={`div-alerta ${alterar? 'alerta ':""} `} >
            <div className='div-conteudo-alerta fundo-branco'>
                <h1> Tarefa adicionada com sucesso ! </h1>
            </div>

        </div>
        </>
        
    )
}

export default AddTarefas;