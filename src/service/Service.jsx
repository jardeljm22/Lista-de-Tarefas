


let lista = [
        {
            id :1 ,
            title : 'estudar programação',
            description : "estudar programação para se tornar um desenvolvedor full stack",
            isCompleted : false
        }
        ,
        {
            id :2 ,
            title : 'estudar inglês',
            description : "estudar inlgês para se tornar fluente",
            isCompleted : false
        },
        {
            id :3 ,
            title : 'estudar matemática ',
            description : "estudar matemática para se torna fera em cálculos",
            isCompleted : false
        }    
    ];


    // buscar todas as tareafas da lista
    export const getTarefa = async() =>{
        return Promise.resolve(lista);
        
    } 
    // buscar uma tarefa especifica da listsa de tarefas
    export const getTarefaId = async (id) =>{
        const tarefa = lista.find(tarefa=>tarefa.id ===id);
        return Promise.resolve(tarefa);
    }









    // alterar dados de uma tarefa expecifica
    export const updateTarefa = async (tarefa1) =>{

        const novaLista = await lista.map((tarefa2)=>{
            if(tarefa1.id ===tarefa2.id){
                return {...tarefa1};
            }else{
                return tarefa2;
            }
        });
        lista = novaLista;
        return Promise.resolve (lista);
    }













    // adicionar uma nova tarefa
    export const createTarefa = async (tarefa) =>{
        lista = [...lista,tarefa]
        return Promise.resolve(lista);
    }

    //deletar uma tarefa da lista de tarefas
    export const deleteTarefa = async (idTarefa) =>{
        const novaLista =  lista.filter(tarefa => idTarefa !==tarefa.id);
        lista = novaLista;
        return Promise.resolve(lista);
    }

