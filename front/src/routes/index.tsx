import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { ProtectedRoutes } from "./ProctedRoutes"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dash" element={<Dashboard/>}/>
            </Route>
        </Routes>

    )
}