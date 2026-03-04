
import '../App.css'
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
                    props.novaTarefa(title,description) 
                    setTitle("");
                    setDescription("");
                } else{                  
                    alert("nenhuma tarefa adicionada");
                }
            }
        }
                 >Adicionar Tarefa</button>
        </div>
    )
}

export default AddTarefas;