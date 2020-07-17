import React from 'react';
import Todo from "../Todo/Todo";


export default function TodoList({ todos, removeTodo, editTodo, calendarDate, setCalendarDate }) {
    return(
        <div>
            {todos.map((todo, index) => (
                    <Todo
                        key = {todo.id}
                        index = {index}
                        todo = {todo}
                        removeTodo = {removeTodo}
                        editTodo = {editTodo}
                        calendarDate = {calendarDate}
                        setCalendarDate = {setCalendarDate}
                    >
                    </Todo>
            ))}
        </div>
    );
};