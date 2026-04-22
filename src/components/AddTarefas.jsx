
import '../styles/AddTarefas.css'
import { useAddTarefas } from '../hooks/useAddTarefas'

const AddTarefas = ({novaTarefa,funcaoTarefa})  => { // funcaoTarefa é uma string que define o nome do botão, pode ser "Adicionar Tarefa" ou "Alterar Tarefa" dependendo do contexto em que o componente é utilizado

    const { 
        title,
        setTitle,
        description,
        setDescription,
        adicionaTarefa,
        alterar,
        alerta,
        setAlerta } = useAddTarefas(novaTarefa)

    return (
        <>
            <div className='div-container-addtarefas' >
                <input value={ title } onChange={e => setTitle( e.target.value )} className="spaco " type="text" placeholder="título da tarefa" />           
                <input value={ description }  onChange={e => setDescription( e.target.value  )} className="spaco" type="text" placeholder="descrição da tarefa" />
                <button className="spaco "onClick={ ()=>{adicionaTarefa()}} >{ funcaoTarefa }</button>
            </div>
            <div className={`div-alerta ${ alerta?'alerta':""} `} >
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