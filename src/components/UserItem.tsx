import { FunctionComponent } from "react";
import { IUsers } from "../types/types";

interface UserItemProps {
  user: IUsers;
}

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}
      {user.name}
      {user.address.street}
      {user.email}
    </div>
  );
};

export default UserItem;
