// const initState = {
//   search: "",
//   status: "All",
//   priority: 'All',
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchText":
//       let b = {
//         ...state,
//         search: action.payload,
//       };

//       return b;
//      case 'filter/statusText':
//    let c ={
//     ...state, status: action.payload
//   }
//   return   c


//   case 'filter/priorityText':
//    // console.log(action.payload);
//    // console.log(state);
//     //    console.log(state)
//    //  console.log({...state,priorty:action.payload});
//     return {...state,priority:action.payload}


//     default:
//       return state;
//   }
// };
// export default filtersReducer;
import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  
  initialState:{
    search:'',
    status:'All',
    priority:'All'
  },
  reducers:{
   searchText:(state,action)=>{
     state.search=action.payload
   },
   statusText:(state,action)=>{
       state.status=action.payload
   },
   priorityText:(state,action)=>{
     state.priority=action.payload
   }
  }
})
