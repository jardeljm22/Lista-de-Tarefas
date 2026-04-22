
    // buscar todas as tarefas da lista
    export const getTarefa = async() =>{
        const tarefas = JSON.parse(localStorage.getItem("listaTarefas"  ) || "[]"); // busca a lista de tarefas do localStorage, se não houver nenhuma tarefa, retorna um array vazio
        return Promise.resolve(tarefas);
    }

    // buscar uma tarefa especifica da listsa de tarefas
    export const getTarefaId = async (id) =>{
        const tarefas = JSON.parse(localStorage.getItem("listaTarefas"  ) || "[]"); 
        if(tarefas.length > 0){   // verifica se a lista de tarefas não está vazia, se estiver vazia, retorna undefined
            const tarefa = tarefas.find(tarefa => tarefa.id === id)
            return Promise.resolve(tarefa);
        }
        return Promise.resolve(undefined);
    }

    // alterar dados de uma tarefa específica
    export const updateTarefa = async (tarefa1) =>{
        const tarefas = JSON.parse( localStorage.getItem('listaTarefas') || "[]" );
        if(tarefas.length > 0 ){
            const newlista = tarefas.map(tarefa => {  // percorre a lista de tarefas e verifica se o id da tarefa é igual ao id da tarefa que foi alterada, se for igual, retorna a tarefa alterada, se não for igual, retorna a tarefa original
                if(tarefa.id === tarefa1.id){
                    return tarefa1;
                }
                return tarefa;
            })
            localStorage.setItem("listaTarefas",JSON.stringify(newlista));
            return Promise.resolve(newlista);
        }
    }

    // adicionar uma nova tarefa
    export const createTarefa = async (tarefa) =>{
        const lista = JSON.parse(localStorage.getItem("listaTarefas") || "[]")
        const novaLista = [...lista,tarefa]; // cria uma nova lista de tarefas com a tarefa adicionada, utilizando o operador spread para copiar as tarefas existentes e adicionar a nova tarefa no final da lista
        localStorage.setItem("listaTarefas",JSON.stringify(novaLista));
        return Promise.resolve(novaLista);
    }

    //deletar uma tarefa da lista de tarefas
    export const deleteTarefa = async (idTarefa) =>{
      const tarefas = JSON.parse(localStorage.getItem("listaTarefas") || "[]");
      const novaLista = tarefas.filter(tarefa => tarefa.id !== idTarefa); // percorre a lista de tarefas e retorna uma nova lista de tarefas sem a tarefa que foi deletada, utilizando o método filter para criar uma nova lista de tarefas com todas as tarefas que não possuem o id da tarefa que foi deletada
      localStorage.setItem("listaTarefas", JSON.stringify(novaLista));
      return Promise.resolve(novaLista);
    }

