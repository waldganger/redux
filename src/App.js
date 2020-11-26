import "./App.css";
import Post from "./component/Post";
import Postform from "./component/Postform";

function App() {
  return (
    <div className="App">
      <Postform />
      <hr />
      <Post />
    </div>
  );
}

export default App;
