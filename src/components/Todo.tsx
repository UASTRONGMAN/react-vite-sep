import {FC} from "react";
import {ITodo} from "../models/ITodo.ts";

interface IProps{
    todo:ITodo
}
const Todo:FC<IProps> = ({todo}) => {
    return (
        <div>
            {todo.id}. {todo.todo} <br/>
            User id - {todo.userId}. Status {todo.completed+''} <hr/>
        </div>
    );
};

export default Todo;