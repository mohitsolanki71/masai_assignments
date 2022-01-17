import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { AddJobs } from "./components/addJobs";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";
import { Login } from "./components/login";
import { GetJob } from "./components/getJob";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/addjob"
          element={
            <PrivateRoute>
              <AddJobs />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/getjob" element={<GetJob />}></Route>
      </Routes>
    </div>
  );
}

export default App;
