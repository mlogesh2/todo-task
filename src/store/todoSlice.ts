import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.unshift(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
            const todo = state.find((t) => t.id === action.payload.id);
            if (todo) todo.text = action.payload.text;
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;