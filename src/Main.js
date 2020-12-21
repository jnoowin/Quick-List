import React, { useReducer, createContext } from "react";
import { INITIAL_STATE, TodoReducer } from "./reducer/TodoReducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./components/AboutPage/AboutPage";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./components/AuthProvider/AuthProvider";

export const TodoContext = createContext({ todos: [], calendarDate: "" });

export default function Main() {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);
  return (
    <BrowserRouter>
      <AuthProvider>
        <TodoContext.Provider value={{ state, dispatch }}>
          <Navbar>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/app" component={App} />
              <Route path="/about" component={AboutPage} />
              <Route component={NotFound} />
            </Switch>
          </Navbar>
        </TodoContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}
