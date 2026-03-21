

let lista = [
  {
    id: 1,
    title: "Estudar React",
    description: "Revisar useState, useEffect e componentes",
    isCompleted: false
  },
  {
    id: 2,
    title: "Treinar academia",
    description: "Treino de peito e tríceps",
    isCompleted: true
  },
  {
    id: 3,
    title: "Fazer compras",
    description: "Comprar frutas, arroz e leite no mercado",
    isCompleted: false
  }
];


    // buscar todas as tareafas da lista
    export const getTarefa = async() =>{
        return Promise.resolve(lista);
        
    } 
    // buscar uma tarefa especifica da listsa de tarefas
    export const getTarefaId = async (id) =>{
        const tarefa = lista.find(tarefa=>tarefa.id ===id);
        if(tarefa){
        console.log(tarefa.id);
        return Promise.resolve(tarefa);
        }
    }


    // alterar dados de uma tarefa expecifica
    export const updateTarefa = async (tarefa1) =>{

        const novaLista = lista.map((tarefa2)=>{
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

