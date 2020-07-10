import React from 'react';
import Todo from "../Todo/Todo";

export default function TodoList({ todos, completeTodo, removeTodo, editTodo }) {
    return(
        <div>
            {todos.map((todo, index) => (
                    <Todo
                        key = {index}
                        index = {index}
                        todo = {todo}
                        completeTodo = {completeTodo}
                        removeTodo = {removeTodo}
                        editTodo = {editTodo}
                    >
                    </Todo>
            ))}
        </div>
    );
};