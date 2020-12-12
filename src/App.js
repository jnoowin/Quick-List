import React, { useReducer, createContext, useEffect, useRef } from "react";
import "./App.css";
import { INITIAL_STATE, TodoReducer } from "./reducer/TodoReducer";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import TodoList from "./components/TodoList/TodoList";

export const TodoContext = createContext({ todos: [], calendarDate: "" });

export default function App() {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const todoInputRef = useRef(null);

  useEffect(() => {
    todoInputRef.current.focus();
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({ type: "SET_TODOS", todos: savedTodos });
    }
  }, []);

  useEffect(() => {
    document.title = state.todos.length > 0 ? `(${state.todos.length}) Quick-List` : "Quick-List";
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <div className="app">
      <TodoContext.Provider value={{ state, dispatch }}>
        <div className="todoList">
          <TodoForm todoInputRef={todoInputRef} />
          <TodoList todos={state.todos} />
        </div>
        <TodoCalendar todoInputRef={todoInputRef} />
      </TodoContext.Provider>
    </div>
  );
}
