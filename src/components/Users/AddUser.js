import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enterdUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid name",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enterdAge < 1 || +enterdAge > 110) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    props.onAddUser(enterdUsername, enterdAge);
    // console.log(enterdUsername, enterdAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm ={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterdUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
