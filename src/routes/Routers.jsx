

import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import ExibirDetalhes from "../components/ExibirDetalhes";
import AlteraTarefa from "../components/AlteraTarefa";


const Rotes = () => {;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Detalhes" element={<ExibirDetalhes/>} />
                <Route  path="/Altera/:id" element={<AlteraTarefa/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotes