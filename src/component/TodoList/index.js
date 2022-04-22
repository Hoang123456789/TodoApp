import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import TodoSlice, { addTodos } from "./TodoSlice";
import {
  todoRemainingSelector,
  filterSelector,
  filterchangeSelector,
} from "../../redux/selectors";
function ListWork() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [completedId, setCompletedId] = useState(-1);
  const todolists = useSelector(todoRemainingSelector);
  const filteStatus = useSelector(filterchangeSelector);
  const filterSearch = useSelector(filterSelector);

  const dispatch = useDispatch();
  const hanleAddButtonClick = () => {
    dispatch(
      TodoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: todoName,
    //     priority: priority,
    //     completed: false,
    //   })
    // );

    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handlePriovityChange = (e) => {
    //console.log(e.target.value);
    setPriority(e.target.value);
  };

  const handleChangeText = (e) => {
    setCompletedId(e.target.value);
    console.log(e.target.value);

    dispatch(TodoSlice.actions.Toogle(e.target.value));
  };

  return (
    <div className="ListWork">
      <div className="work">
        {todolists.map((todo, index) => {
          return (
            <div key={index} className="form-check">
              <input
                value={todo.id}
                onChange={handleChangeText}
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={todo.completed}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              ></label>

              <button className="work-input"> {todo.priority}</button>
              {todo.name}
            </div>
          );
        })}
      </div>

      <div className="addWork">
        <input
          value={todoName}
          onChange={handleInputChange}
          className="addWorkInput"
          placeholder="Inter work..."
          type="text"
        />
        <select
          onChange={handlePriovityChange}
          value={priority}
          className="addWorkselect"
          name=""
          id=""
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button
          onClick={hanleAddButtonClick}
          type="pripary"
          className="addWorksubmit"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ListWork;
