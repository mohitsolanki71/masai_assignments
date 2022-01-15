import './App.css';
import {Todo} from "./components/todo";
import {Details} from "./components/details";
import {Navbar} from "./components/navbar";
import {EditTodo} from "./components/editTodo";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/todo/:id" element={<Details/>}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
