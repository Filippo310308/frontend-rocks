import { BrowserRouter, Routes, Route } from "react-router"
import {RootRoute} from "../../routes/root/index.tsx";
import { DetailRoute } from "../../routes/detail/index.tsx"

export const AppRouter=() =>{
    return(
    <BrowserRouter>
    <Routes>
        <Route path ="/frontend-rocks" element={<RootRoute />}/>
        <Route path ="/frontend-rocks/dettaglio/:id" element={<DetailRoute />}/>

    </Routes>
    </BrowserRouter>
    )
}