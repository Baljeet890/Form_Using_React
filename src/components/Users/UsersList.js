import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UserList = (props) => {
  return (
    <Card className = {classes.users}>
      <ul>
        {props.users.map((users) => (
          <li key = {users.id}>
            {users.name}({users.age}years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
