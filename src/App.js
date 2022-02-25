import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/features/store";
import CounterComponent from "./components/features/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
