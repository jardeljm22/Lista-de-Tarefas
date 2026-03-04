

import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";


const Rotes = () => {;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Detalhes" element={<h1>nenhuma pagina no momento</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotes