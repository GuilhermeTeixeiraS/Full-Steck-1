import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entitie"


export enum TaskStatus {
    TODO = "ToDo",
    PROGRESS = "InProgress",
    REVISION = "InRevision",
    FINISHED = "Finished"
}


@Entity("tasks")
class Task {

    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    title: string

    @Column()
    description: string

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.TODO
    })
    status: TaskStatus


    @ManyToOne(() => User)
    user: User
}

export {Task}

