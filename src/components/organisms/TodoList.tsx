import React, { useState } from "react";
import { Todo } from "@/types/todo";
import TodoItem from "../molecules/TodoItem";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { addTodo, deleteBoard, deleteTodo, editTodo } from "@/store/todoSlice";
import { generateUniqueId } from "@/utils/generateUniqueId";

interface Props {
    boardId: string;
    todos: Todo[];
    onToggle: (id: string) => void;
    onEdit: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ boardId, todos, onToggle }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch(addTodo({
            boardId,
            todo: {
                id: generateUniqueId(),
                text,
                completed: false,
            }
        }));
        setText("");
    };

    const handleEdit = (id: string) => {
        const editedTxt = prompt("Edit the todo:");
        if (editedTxt !== null && editedTxt.trim() !== "") {
            dispatch(editTodo({ boardId, id, text: editedTxt }));
        }
    };

    const onDeleteTodo = (id: string) => {
        dispatch(deleteTodo({ boardId, id }))
    };

    const onDeleteBoard = () => {
        dispatch(deleteBoard({ boardId }));
    };


    return (
        <div
            data-wow-duration={"1s"}
            className="mt-4 border border-gray-950/20 rounded wow animate__bounceInDown shadow-md min-w-[350px] bg-yellow-100 p-2"
        >
            <div className="float-end cursor-pointer" onClick={onDeleteBoard}>x</div>
            <div className="flex max-w-2xl w-full gap-2 p-2">
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter task..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAdd();
                        }
                    }}
                />
                <Button
                    data-wow-duration={"1s"}
                    className="wow animate__fadeIn bg-green-500 hover:bg-green-600"
                    onClick={handleAdd}
                >
                    Add
                </Button>
            </div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => onToggle(todo.id)}
                    onDelete={() => onDeleteTodo(todo.id)}
                    onEdit={() => handleEdit(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
