import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import { addToDo, setTodos, fetchTodos } from "../redux/todo";

const mapStateToProps = (state) => ({
  todos: state.todo.items
});

const mapActionsToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addToDo(text)),
  setTodos: (items) => dispatch(setTodos(items)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);
