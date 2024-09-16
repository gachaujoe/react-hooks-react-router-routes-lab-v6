import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";


function App() {

    return (
        <BrowserRouter>
            <Routes>
            {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default App