import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {getTodos} from "../services/api.service.ts";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos().then(res => setTodos(res))
    }, []);
    return (
        <div>

        </div>
    );
};

export default Todos;