import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
function App() {
  const[UsersList, setUsersList] = useState([]);
  const addUserHandler  = (uName , uAge)=>{
    setUsersList((prevUsersList) =>{
      return [...prevUsersList, {name: uName, age:uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser ={addUserHandler}/>
      <UserList users={UsersList}/>
    </div>
  );
}

export default App;
