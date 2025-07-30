import React from "react";
import { Todo } from "@/types/todo";
import Button from "../atoms/Button";

interface Props {
    todo: Todo;
    onToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onEdit, onDelete }) => (
    <div data-wow-duration={"1s"} className="wow animate__bounceInDown flex items-center justify-between p-2 border-b border-gray-950/20">
        <div
            onClick={onToggle}
            className={`cursor-pointer flex-1 ${todo.completed ? "line-through text-gray-400 px-2" : ""}`}
        >
            {todo.text}
        </div>
        <Button onClick={onEdit} className="ml-2 bg-blue-500 hover:bg-blue-600">
            Edit
        </Button>
        <Button onClick={onDelete} className="ml-2 bg-red-500 hover:bg-red-600">
            Delete
        </Button>
    </div>
);

export default TodoItem;
