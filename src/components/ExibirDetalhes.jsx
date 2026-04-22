
import { useSearchParams } from "react-router-dom";
import "../styles/Detalhes.css"
import {PencilLine ,X} from 'lucide-react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
   
const ExibirDetalhes = () =>{

    const [searchParams] = useSearchParams()
    const title = searchParams.get("Title")
    const description = searchParams.get("Description");
    const id = searchParams.get("id");
    const [show,setShow] = useState(false);

    useEffect(()=>{
        
        setTimeout(()=>{
            setShow(true);
        } ,0);
      
    },[])

    return (
        <div className={`div-container ${show ? 'show' : 'hide'}`} >
            <div className='div-header'>
                <Link className='link' to="/"  ><X color="rgb(185, 28, 4)" size='26'/></Link>
                <h1>detalhes da Tarefa</h1>
                <Link className='link' to={`/altera/${id}`}  ><PencilLine color='rgb(4, 28, 185)' size='22' /> </Link>
            </div>
            <div className="div-detalhes">
                <div>
                    <label>título da tarefa</label>
                    <h3>{title} </h3>
                </div>
                <div>
                    <label>descrição da tarefa</label>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ExibirDetalhes;


