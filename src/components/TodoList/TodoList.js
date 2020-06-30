import React from 'react';
import Todo from "../Todo/Todo";

export default function TodoList({ todos, completeTodo, removeTodo }) {
    return(
        <div>
            {todos.map((todo, index) => (
                    <Todo
                        key = {index}
                        index = {index}
                        todo = {todo}
                        completeTodo = {completeTodo}
                        remove = {removeTodo}
                    >
                    </Todo>
            ))}
        </div>
    );
};