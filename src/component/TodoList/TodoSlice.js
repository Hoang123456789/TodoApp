// const initState = [
//   { id: 0, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 1, name: "Learn Redux", completed: false, priority: "High" },
//   { id: 2, name: "Learn ruby", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//  //console.log(action.payload);
//  //console.log(state);
//   switch (action.type) {
//     case "todoList/addTodo":
//       let a = [...state, action.payload];

//       return a;
//     case "todoList/Toogle":

//       return state.map((todo) => {
//  // console.log(todo.id);
//   //console.log(action.payload);

//         return todo.id == action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       })

//     default:
//       return state;
//   }
// };
// export default todoListReducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },

  // { id: 0, name: "Learn Yoga", completed: false, priority: "Medium" },
  // { id: 1, name: "Learn Redux", completed: false, priority: "High" },
  // { id: 2, name: "Learn ruby", completed: false, priority: "Low" },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    Toogle: (state, action) => {
      const currentTodo = state.todos.find((todo) => todo.id == action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      });
  },
});
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  
  let res = await fetch("/api/todos");
 let data = await res.json();
  return data.todos;
});

export default todosSlice;
// export function addTodos(todo) {
//   return function addTodosThunk(dispatch, getState) {
//     todo.completed = true;
//     todo.name='Name updated'
//     dispatch(todosSlice.actions.addTodo(todo))

//          console.log( todo);
//   };
// }
