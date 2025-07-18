import { useState } from "react";
import Head from "next/head";
import { Todo } from "@/types/todo";
import { generateUniqueId } from "@/utils/generateUniqueId";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import TodoList from "@/components/organisms/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: generateUniqueId(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onEdit = (id: string) => {
    const editedTxt = prompt('Edit the todo:');

    if (editedTxt !== null && editedTxt.trim() !== '') {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, text: editedTxt } : todo
        )
      );
    };
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <main className="max-w-xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <div className="flex gap-2">
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task..." onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }} />
          <Button className="bg-green-500 hover:bg-green-600" onClick={addTodo}>
            Add
          </Button>
        </div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={onEdit} />
      </main>
    </>
  );
}
