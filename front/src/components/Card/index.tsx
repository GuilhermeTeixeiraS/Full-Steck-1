import { ChangeEvent, Dispatch } from "react"
import { Task } from "../../pages/Dashboard"
import { Container } from "./style"
import { api } from "../../services/api"

interface CardProps {
    task: Task
    setTask: Dispatch<React.SetStateAction<Task[]>>
}

export const Card = ({ task, setTask }: CardProps) => {

    const updateStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
        const response = await api.patch(`/tasks/${task.id}`, { status: event.target.value })

        setTask((previusTasks) =>
            previusTasks.map(previusTask =>
                task.id === previusTask.id ? response.data : previusTask))
    }
    return (
        <Container>
            {task.title}
            <select onChange={updateStatus} defaultValue={task.status}>
                <option value="Test">Test</option>
                <option value="Novo">Novo</option>
                <option value="Pratica">Pratica</option>
                <option value="React">React</option>
            </select>
        </Container>
    )
}