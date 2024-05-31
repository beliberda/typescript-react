import { FunctionComponent } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <input type="checkbox" checked={todo.completed} name="" id="" />
      {todo.id}
      {todo.title}
    </div>
  );
};

export default TodoItem;
