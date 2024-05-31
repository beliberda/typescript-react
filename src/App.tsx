import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUsers } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

// users явялется массивом, в котором каждый элемент типа IUsers
// const users: IUsers[] = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//     },
//   },
//   {
//     id: 2,
//     name: "Leanne wqWW",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//     },
//   },
// ];

function App() {
  // Точно также указываем дженерик для useState
  const [users, setUsers] = useState<IUsers[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getUsers();
    getTodos();
  }, []);

  async function getUsers() {
    try {
      // Ожидаем, что в ответе сервера придет массив объектов IUsers
      // Так легче определять, как работать с данными
      const response = await axios.get<IUsers[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTodos() {
    try {
      // Ожидаем, что в ответе сервера придет массив объектов IUsers
      // Так легче определять, как работать с данными
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Card
        onclick={() => {
          console.log("Card clicked", 1);
        }}
        variant={CardVariant.primary}
        width="150px"
        height="300px"
      >
        <h1>Заголовок</h1>
        <button>Кнопка</button>
      </Card>
      {/* <UserList users={users} /> */}
      {/* Компонент List нужен для переиспользуемости, чтобы выводить дочерние компоненты в виде списка */}
      <List
        items={users}
        renderItem={(user: IUsers) => {
          return <UserItem user={user} key={user.id} />;
        }}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        }}
      />
    </div>
  );
}

export default App;
