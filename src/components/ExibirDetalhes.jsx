
import { useSearchParams } from "react-router-dom";
import "../stiles/Detalhes.css"
import {PencilLine ,X} from 'lucide-react';
import { Link } from "react-router-dom";
   
const ExibirDetalhes = () =>{

   
    const [searchParams] = useSearchParams()
    const title = searchParams.get("Title")
    const description = searchParams.get("Description");
    const id = searchParams.get("id");



    return (
        <div >
            <div className='DivHeader'>
                <Link className='link' to="/" ><X color="rgb(185, 28, 4)" size='26'/></Link>
                <h1>detalhes da Tarefa</h1>
                <Link className='link' to="/Altera" > <PencilLine color='rgb(4, 28, 185)' size='22' /> </Link>
                
            </div>
            <div className="divDetalhes">
                <h2>{title} </h2>
                <p>{description}</p>
            </div>
            
           
        </div>
    )
}

export default ExibirDetalhes;