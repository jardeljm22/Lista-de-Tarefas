
import '../stiles/App.css'
import { useState } from 'react';



const AddTarefas = (props)  => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    console.log(title);
    return (
        <div className='divAddTarefas' >
            <input value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="spaco " type="text" placeholder="título da tarefa" />
            <input value={description} 
            onChange={e => setDescription(e.target.value)}

            className="spaco" type="text" placeholder="descrição da tarefa" />
            <button className="spaco "onClick={ ()=>{
                
                // removendo os espaços com o metodo trim() do titulo e da 
                // descrição para verificar se há alguma coisa escrita
                if(title.trim().length  > 0 && description.trim().length > 0){
                   // adicionando valores ao objeto
                    let novaTarefa = {
                    id : Date.now(),
                    title : title ,
                    description : description,
                    isCompleted : false
                   }
                    props.novaTarefa(novaTarefa) ;
                    setTitle("");
                    setDescription("");
                } else{                  
                    alert("nenhuma tarefa adicionada");
                }
            }
        }
                 >{props.funcaoTarefa}</button>
        </div>
    )
}

export default AddTarefas;