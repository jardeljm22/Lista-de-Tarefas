

import { BrowserRouter,Routes,Route } from "react-router-dom";
import ExibirDetalhes from "../components/ExibirDetalhes";
import AlteraTarefa from "../components/AlteraTarefa";
import Home from "../Home";
import AddTarefas from "../components/AddTarefas";

const Rotes = () => {;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Detalhes" element={<ExibirDetalhes/>} />
                <Route  path="/Altera/:id" element={<AlteraTarefa/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotes