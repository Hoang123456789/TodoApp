import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import Filter from "./component/Filter";
import ListWork from "./component/TodoList";
import { setupServer } from "./fakeApis";
import "./App.css";
import { fetchTodos } from "./component/TodoList/TodoSlice";
if (process.env.NODE_ENV === "development") {
  setupServer();
}
function App() {
  const dispatch=useDispatch();
 useEffect(()=>{
   dispatch(fetchTodos())
 },[])
  return (
    <div className="Todoapp">
      <Filter />
      <ListWork />
    </div>
  );
}
export default App;
