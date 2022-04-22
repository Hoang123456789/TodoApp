import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => {
  console.log(state.todoList.todos);
  return state.todoList.todos;
};

export const filterSelector = (state) => {
  return state.filters.search;
};

export const filterchangeSelector = (state) => {
  return state.filters.status;
};
export const filterchangePriority = (state) => {
  return state.filters.priority;
};
export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterchangeSelector,
  filterSelector,
  filterchangePriority,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (todo.priority === priorities) {
        if (status === "All") {
          return todo.name.includes(searchText);
        }
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed)
        );
      }

      if (priorities === "All") {
        if (status === "All") {
          return todo.name.includes(searchText);
        }
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed)
        );
      }
    });
  }
);
