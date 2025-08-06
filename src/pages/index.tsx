import { useState } from "react";
import Head from "next/head";
import { generateUniqueId } from "@/utils/generateUniqueId";
import Button from "@/components/atoms/Button";
import TodoList from "@/components/organisms/TodoList";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addTodo, toggleTodo, deleteTodo, editTodo, addBoard, deleteBoard } from '@/store/todoSlice';

export default function Home() {
  const boards = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    const newBoardId = generateUniqueId();
    dispatch(addBoard({ id: newBoardId }));
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <main className="max-w-7xl mx-auto mt-10 px-4">
        <h1 data-wow-duration={"1s"} className="wow animate__fadeInDown text-3xl font-bold text-center mb-6">Todo App</h1>
        <div className="flex max-w-2xl w-full gap-2 justify-self-center justify-center">
          <Button data-wow-duration={"1s"} className="wow animate__fadeIn bg-green-500 hover:bg-green-600" onClick={handleCreateNote}>
            Create new note
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(boards).map(([boardId, todos]) => (
            <TodoList
              key={boardId}
              boardId={todos.id}
              todos={todos.todos}
              onToggle={(id) => dispatch(toggleTodo({ boardId, id }))}
              onEdit={(id) => dispatch(editTodo({ boardId, id, text: "" }))}
            />
          ))}
        </div>
      </main>
    </>
  );
}
