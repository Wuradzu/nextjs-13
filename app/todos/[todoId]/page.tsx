import React from "react";
import { Todo } from "../../../typings";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 60 },
  });
  const todo: Todo = await res.json();
  return todo;
};

const Todo = async ({params: {todoId}} : PageProps) => {
  const todo = await fetchTodo(todoId);
  if(!todo.id) return <p>Page Not Found</p>
  return (
    <div className="flex items-center p-2 fixed">
      <div className="shadow-lg w-[60vw] flex flex-col bg-yellow-200 p-2 rounded-md ">
        <div>
          #{todo.id} : {todo.title}
        </div>
        <div>Completed: {todo.completed ? "Yes" : "No"}</div>
        <div className="border-t border-black text-right">
          By User: {todo.userId}
        </div>
      </div>
    </div>
  );
};

export default Todo;

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: Todo[] = await res.json();

  return todos.splice(0,10).map((todo) =>{
    return{
      todoId: todo.id.toString()
    }
  })
}
