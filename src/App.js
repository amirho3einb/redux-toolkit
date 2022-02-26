import "./App.css";
import CounterComponent from "./components/Counter";
import AddTodoForm from "./components/todos/AddTodoForm";
import TodoList from "./components/todos/TodoList";
import TotalCompleteItems from "./components/todos/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <CounterComponent />
    //   </div>
    // </Provider>
    <div className="App container">
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
