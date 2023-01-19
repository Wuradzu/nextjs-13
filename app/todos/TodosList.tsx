import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos: Todo[] = await res.json()
    return todos
}

const TodosList = async () => {
    const todosList = await fetchTodos()
  return (
    <div className="flex gap-2 flex-col">
      {todosList.map(
        (todo: Todo) => {
          return (
            <Link href={`/todos/${todo.id}`} key={todo.id}>
              ToDo:{todo.id}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default TodosList;
