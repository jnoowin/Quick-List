import React, { useReducer, createContext, useEffect, useRef } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import TodoList from "./components/TodoList/TodoList";
import { DateBinarySearch } from "./DateBinarySearch";
const shortid = require("shortid");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export const TodoContext = createContext({ todos: [], calendarDate: "" });

export default function App() {
  const INITIAL_STATE = {
    todos: [],
    calendarDate: dayjs().format("M-D-YYYY"),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        if (state.todos.length > 0) {
          const newTodos = [...state.todos];
          // console.log(dayjs("12-25-1995", "MM-DD-YYYY"));
          newTodos.splice(DateBinarySearch(newTodos, dayjs(state.calendarDate, "M-D-YYYY")), 0, {
            title: action.newTitle,
            text: "",
            location: "",
            date: state.calendarDate,
            isCompleted: false,
            id: shortid.generate(),
          });
          return {
            todos: [...newTodos],
            calendarDate: state.calendarDate,
          };
        }
        return {
          todos: [
            {
              title: action.newTitle,
              text: "",
              location: "",
              date: state.calendarDate,
              isCompleted: false,
              id: shortid.generate(),
            },
            ...state.todos,
          ],
          calendarDate: state.calendarDate,
        };
      case "DELETE_TODO":
        return {
          todos: [...state.todos.filter((todo) => todo.id !== action.deleteId)],
          calendarDate: state.calendarDate,
        };
      case "EDIT_TODO":
        return {
          todos: [
            ...state.todos.map((todo) => {
              if (todo.id === action.editedTodo.id) {
                return action.editedTodo;
              }
              return todo;
            }),
          ],
          calendarDate: state.calendarDate,
        };
      case "SET_TODOS":
        return {
          todos: [...action.todos],
          calendarDate: state.calendarDate,
        };
      case "EDIT_CALENDAR_DATE":
        return {
          todos: [...state.todos],
          calendarDate: action.calendarDate,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
      <div className="todoListDiv">
        <TodoContext.Provider value={{ state, dispatch }}>
          <div className="todoListSection">
            <TodoForm todoInputRef={todoInputRef} />
            <TodoList todos={state.todos} />
          </div>
          <TodoCalendar todoInputRef={todoInputRef} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}
