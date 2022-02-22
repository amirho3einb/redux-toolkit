import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/features/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">hello</div>
    </Provider>
  );
}

export default App;
