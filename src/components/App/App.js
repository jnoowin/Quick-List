import React, { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../../Main";
import "./App.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoCalendar from "../TodoCalendar/TodoCalendar";
import TodoList from "../TodoList/TodoList";
import { warningPopup } from "../../firebase/auth";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useAuthContext } from "../AuthProvider/AuthProvider";

export default function App() {
  const { state, dispatch } = useContext(TodoContext);
  const { authenticated, userData, loaded } = useAuthContext();
  const todoInputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (
      loaded &&
      !authenticated &&
      !(localStorage.getItem("guest") === "true")
    ) {
      setTimeout(() => {
        warningPopup();
        history.push("/");
      }, 1000);
    }
  }, [history, authenticated, loaded]);

  useEffect(() => {
    if (loaded) {
      todoInputRef.current.focus();
    }
  }, [loaded]);

  useEffect(() => {
    document.title =
      state.todos.length > 0
        ? `(${state.todos.length}) Quick-List`
        : "Quick-List";
  }, [state.todos]);

  useEffect(() => {
    if (authenticated && userData) {
      dispatch({ type: "SET_TODOS", todos: userData });
    }
  }, [authenticated, userData, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("guest") === "true") {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      if (savedTodos) {
        dispatch({ type: "SET_TODOS", todos: savedTodos });
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("guest") === "true") {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }, [state.todos]);

  return (
    <div className="app">
      {loaded ? (
        <>
          <div className="todoList">
            <TodoForm todoInputRef={todoInputRef} />
            <TodoList todos={state.todos} />
          </div>
          <TodoCalendar todoInputRef={todoInputRef} />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "80vh",
          }}
        >
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: "4rem" }} spin />}
          ></Spin>
        </div>
      )}
    </div>
  );
}
