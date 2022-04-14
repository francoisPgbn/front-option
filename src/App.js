import "./App.css";
import Home from "./Components/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import TodoList from "./Components/todo-list/Todo-list";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
