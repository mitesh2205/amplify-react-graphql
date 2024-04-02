import "./App.css";
import Form from "./Form";
import Header from "./Header";
// import Posts from "./Posts";
import TodoLists from "./TodoLists";

function App() {
  const name = "React";
  return (
    <div className="App">
      <Header name={name} />
      <TodoLists />
      {/* <Posts /> */}
      <Form />
    </div>
  );
}

export default App;
