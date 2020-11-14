import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import TodoItem from "./TodoItem";

const TodoApp = ({ todos, input, toggleTodo, addTodo, updateInput }) => {
  const addToDo = (e) => {
    e.preventDefault();
    const todo = { id: todos.length + 1, title: input, done: false };

    addTodo(todo);
  };

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      <form onSubmit={addToDo}>
        Add ToDo:{" "}
        <input
          value={input}
          onChange={(e) => updateInput(e.target.value)}
          type="text"
        />
        <button type="submit">Add ToDo</button>
      </form>
      <br />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  input: state.input,
});

// const mapDispatchToProps = dispatch => ({
//   addTodo: bindActionCreators(addTodo, dispatch),
//   toggleTodo: bindActionCreators(toggleTodo, dispatch),
//   updateInput: bindActionCreators(updateInput, dispatch)
// });

// same as above
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
