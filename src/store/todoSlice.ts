// store/todoSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoBoard {
    id: string;
    todos: Todo[];
}

const initialState: TodoBoard[] = [];

const todoSlice = createSlice({
    name: 'todoBoards',
    initialState,
    reducers: {
        addBoard: (state, action: PayloadAction<{ id: string }>) => {
            state.push({ id: action.payload.id, todos: [] });
        },
        addTodo: (state, action: PayloadAction<{ boardId: string; todo: Todo }>) => {
            const board = state.find(b => b.id === action.payload.boardId);
            if (board) board.todos.unshift(action.payload.todo);
        },
        toggleTodo: (state, action: PayloadAction<{ boardId: string; id: string }>) => {
            const board = state.find(b => b.id === action.payload.boardId);
            if (board) {
                const todo = board.todos.find(t => t.id === action.payload.id);
                if (todo) todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action: PayloadAction<{ boardId: string; id: string; text: string }>) => {
            const board = state.find(b => b.id === action.payload.boardId);
            if (board) {
                const todo = board.todos.find(t => t.id === action.payload.id);
                if (todo) todo.text = action.payload.text;
            }
        },
        deleteTodo: (state, action: PayloadAction<{ boardId: string; id: string }>) => {
            const board = state.find(b => b.id === action.payload.boardId);
            if (board) {
                board.todos = board.todos.filter(t => t.id !== action.payload.id);
            }
        },
        deleteBoard: (state, action: PayloadAction<{ boardId: string }>) => {
            return state.filter(board => board.id !== action.payload.boardId);
        },
    },
});

export const { addBoard, addTodo, toggleTodo, editTodo, deleteTodo, deleteBoard } = todoSlice.actions;
export default todoSlice.reducer;
