import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {getTodos} from "../services/api.service.ts";
import Todo from "./Todo.tsx";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos().then(({todos}:ITodo[]) => setTodos(todos))
    }, []);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;