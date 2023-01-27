import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    allDeteled: (state) => {
      state.todos = [];
    },
    setText: (state, action) => {
      state.str = action.payload;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((e) => e.id !== action.payload);
    },

    editTodo(state, action) {
      state.todos.splice(action.payload.index, 1, action.payload.obj);
    },

    toggleComlete(state, action) {
      state.todos.map((e) => {
        if (e.id === action.payload.id) {
          e.completed = action.payload.completed;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, allDeteled, toggleComlete, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
