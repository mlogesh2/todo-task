import { useState } from "react";
import Head from "next/head";
import { generateUniqueId } from "@/utils/generateUniqueId";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import TodoList from "@/components/organisms/TodoList";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '@/store/todoSlice';

export default function Home() {
  const todos = useSelector((state: RootState) => state.todos);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo({ id: generateUniqueId(), text, completed: false }));
    setText('');
  };

  const handleEdit = (id: string) => {
    const editedTxt = prompt('Edit the todo:');
    if (editedTxt !== null && editedTxt.trim() !== '') {
      dispatch(editTodo({ id, text: editedTxt }));
    }
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
              handleAdd();
            }
          }} />
          <Button className="bg-green-500 hover:bg-green-600" onClick={handleAdd}>
            Add
          </Button>
        </div>
        <TodoList todos={todos} onToggle={(id) => dispatch(toggleTodo(id))} onDelete={(id) => dispatch(deleteTodo(id))} onEdit={handleEdit} />
      </main>
    </>
  );
}
