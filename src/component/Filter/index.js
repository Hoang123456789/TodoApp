//import {Radio} from "antd"
import {useSelector} from "react-redux"
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import {filterchangePriority}   from "../../redux/selectors"
import  FilterSlice from './FilterSilce'
function Filter() {
  const [searchText, setSearchText] = useState("")
  const [selecterText,setSelecterText] = useState("All")
   

  const filterPriority=useSelector(filterchangePriority)
   // console.log(filterPriority)
  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(FilterSlice.actions.searchText(e.target.value));
  };

  const [checkName, setCheckName] = useState("All");

  const handleChange = (e) => {
    setCheckName(e.target.value);
    //console.log(e.target.value);
    dispatch(FilterSlice.actions.statusText(e.target.value));
  };
 const handlePriorityText =(e)=>{
 // console.log(e.target.value)
 setSelecterText (e.target.value)
//console.log(e.target.value);
  dispatch(FilterSlice.actions.priorityText(e.target.value))
 }
  return (
    <div className="filter">
      <div className="title">
        <h2>Todo App Redux</h2>
      </div>
      <div className="search">
        Search
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
          Course name
          </span>
          <input
            value={searchText}
            onChange={handleSearchText}
            type="text"
            className="form-control"
          
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>

      <div className="filter-input">
        Filter By Status
        <div
          className="filter-priority-checkbox"
          onChange={handleChange}
          value={checkName}
        >
          <div className="filter-priority-one">
            <input  className="input" name="course" type="radio" value="All" defaultChecked /> All
          </div>
          <div className="filter-priority-one">
            <input   className="input" name="course" type="radio" value="Completed" />
            Completed
          </div>
          <div className="filter-priority-one">
            <input  className="input"  name="course" type="radio" value="Todo" />
            Todo
          </div>
        </div>
      </div>
      <div className="filter-priority">
        Filter By priority
        <select value={selecterText}  onChange={handlePriorityText}   className="form-select" aria-label="Default select example">
        <option  value="All">All</option>     
          <option className='selectedMedium' value="Medium">Medium</option>
          <option className='selectedHigh' value="High">High</option>
          <option  className='selectedLow' value="Low">Low</option>
        </select>
      </div>
    </div>  
  );
}

export default Filter;
