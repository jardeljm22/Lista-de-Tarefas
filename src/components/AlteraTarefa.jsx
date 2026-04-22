
import "../styles/AlteraTarefa.css"
import { useAlteraTarefa } from "../hooks/useAlteraTarefa"; 

const AlteraTarefa = () =>{

    const { carregando,
            alteraTarefa,
            setAlterarTarefa,
            alterarTarefa,alteraTitle,
            alteraDescription,
            tarefaAnterior,
            title,
            description,
            show
    } = useAlteraTarefa();

    if(carregando){
        return <h1>caregando dados .....</h1>
    }
    return (
        <>
            <div className={`div-container-altera-tarefa ${show ? 'show' : ''}`} >
                <h1> Editar Tarefa </h1>
                <div className="div-input" >
                    <label htmlFor="title"> Título da Tarefa </label>
                    <input autoFocus id="title" onChange={(e)=>alteraTitle(e)} value={title} type="text" placeholder="digite um novo nome" />
                </div>
                <div className="div-input-descricao" >
                    <label htmlFor="description"> Nova descrição </label>
                    <textarea  id="description" onChange={(e)=>alteraDescription(e)} value={description} placeholder="digite a descrição" />
                </div>
                <button onClick={()=>{ setAlterarTarefa(true)}}> alterar </button> {/* ao clicar exibe a div de confirmação para o usuário confirmar se deseja alterar a tarefa ou não */ }
            </div>
            <div  className={`div-confirmacao ${alterarTarefa ? 'show' : ''}`} >
               <div className="div-confirmacao-conteudo" >
                <h2> deseja alterar a tarefa {tarefaAnterior.title}?</h2>
                <button onClick={alteraTarefa}> alterar </button>
               </div>
            </div>
        </>
    )
}

export default AlteraTarefa;