import "./App.css";
import { Home } from "./components/home";
import { Main } from "./components/main";
import { Student } from "./components/student";
import { Navbar } from "./components/navbar";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<Home />} />
        <Route
          path="/student/:id"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
