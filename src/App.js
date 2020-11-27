import "./App.css";
import Post from "./component/Posts";
import Postform from "./component/Postform";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
