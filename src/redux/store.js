//import { createStore } from "redux";
//import rootReducer from "./reducer";
//import { composeWithDevTools } from "redux-devtools-extension";

//const composedEnhancers = composeWithDevTools();

//const store = createStore(rootReducer,composedEnhancers);


//export default store;




import {configureStore} from '@reduxjs/toolkit'
import FilterSilce from '../component/Filter/FilterSilce'
import TodoSlice from '../component/TodoList/TodoSlice'
const store= configureStore({
    reducer:{
        filters: FilterSilce.reducer,
        todoList:TodoSlice.reducer
    }
});

export default store;