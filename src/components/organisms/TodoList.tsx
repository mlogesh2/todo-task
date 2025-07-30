import React from "react";
import { Todo } from "@/types/todo";
import TodoItem from "../molecules/TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onEdit, onDelete }) => (
    <div data-wow-duration={"1s"} className="mt-4 border border-gray-950/20 rounded wow animate__bounceInDown shadow-md min-w-[350px]">
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => onToggle(todo.id)}
                onDelete={() => onDelete(todo.id)}
                onEdit={() => onEdit(todo.id)}
            />
        ))}
    </div>
);

export default TodoList;
