import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Board, Container } from "./style"

export interface Task {
    id:string,
    status:string,
    description:string,
    title:string
}
export const Dashboard = ()=>{
    const [tasks, setTasks]=useState<Task[]>()

    useEffect(()=>{
        (async()=>{
            const response = await api.get<Task[]>("/tasks")
            setTasks(response.data)
        })
    },[])
    return (
        <>
        <Container>
            <header>
                <button type="button">Novo Teste</button>
            </header>
            <main>
                <Board>
                {tasks?.map((task)=><li key={task.id}>{task.title}</li>)}
                </Board>
            </main>
        </Container>
      
        </>
    )
}
