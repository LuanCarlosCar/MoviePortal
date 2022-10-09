
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";

export default function PageRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhe/:movieId" element={<Detail />} />
        </Routes>

    )
}