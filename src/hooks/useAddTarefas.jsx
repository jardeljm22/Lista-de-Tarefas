
import { useState } from 'react';


export const useAddTarefas = (novaTarefa) => {
    
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
            let novaTarefaCriada = {
            id : Date.now(),
            title : title ,
            description : description,
            isCompleted : false
            }
            novaTarefa(novaTarefaCriada) ; // passando o objeto criado acima para ser inserido na lista de tarefas
            setTitle("");
            setDescription("");// zerando os inputs depois de adicionar uma tarefa

            setTimeout(()=>{
                setAlterar(false); // setando a variavel alterar para fazer a mensagem de adicionada sumir depois de 1 segundo e meio
            },1500);

        } else{                  
            setAlerta(true);
        }
    }

    return { title,setTitle,description,setDescription,adicionaTarefa,alterar,alerta,setAlerta }

}