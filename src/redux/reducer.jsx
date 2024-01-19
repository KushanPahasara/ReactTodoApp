import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Retrieve state from local storage if available
const storedState = localStorage.getItem('state');
const initialState = storedState ? JSON.parse(storedState) : [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;
    },

    removeTodos: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('state', JSON.stringify(updatedState));
      return updatedState;
    },

    updateTodos: (state, action) => {
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
      localStorage.setItem('state', JSON.stringify(updatedState));
      return updatedState;
    },

    completeTodos: (state, action) => {
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
      localStorage.setItem('state', JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, addTodoReducer.reducer);

export const reducer = persistedReducer;
