import React, { useReducer, createContext, useEffect, useRef } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import TodoList from "./components/TodoList/TodoList";
import app from "./Firebase.js";
import "firebase/database";
const shortid = require("shortid");
const moment = require("moment");

export const TodoContext = createContext({ todos: [], calendarDate: "" });

export default function App() {
  const INITIAL_STATE = {
    todos: [],
    calendarDate: moment().format("M-D-YYYY"),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
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
    document.title = state.todos.length > 0 ? `(${state.todos.length}) Quick-List` : "Quick-List";
  }, [state.todos.length]);

  useEffect(() => {
    todoInputRef.current.focus();
    app
      .database()
      .ref("user/blarghnog/todos")
      .once("value", (snapshot) => {
        let firebaseTodos = [];
        for (let todo in snapshot.val()) {
          firebaseTodos.push(snapshot.val()[todo]);
        }
        dispatch({ type: "SET_TODOS", todos: firebaseTodos });
      })
      .catch((error) => console.log(error));
  }, []);

  //   firebase.database().ref("user/blarghnog/todos/").child(newTodos[0].id).set(newTodos[0]);
  //   firebase.database().ref("user/blarghnog/todos/").child(refTodo.id).remove();
  //   firebase.database().ref("user/blarghnog/todos/").child(newTodos[index].id).set(newTodos[index]);

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
