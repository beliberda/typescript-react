import React, { FunctionComponent } from "react";
import { IUsers } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUsers[];
}

const UserList: FunctionComponent<UserListProps> = ({ users }) => {
  // TS дает подсказки к типам данных
  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <UserItem key={user.id} user={user}></UserItem>;
          </>
        );
      })}
    </div>
  );
};

export default UserList;
