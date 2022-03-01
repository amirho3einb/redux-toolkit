import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getAsyncTodos } from "../../features/todos/todosSlice";
const TodoList = () => {
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];
  const { todos, loading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
if(loading) return <p>loading</p>
if(error) return <p>{error}</p>
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
