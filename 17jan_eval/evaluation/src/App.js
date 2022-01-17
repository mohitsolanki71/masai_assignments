import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { AddJobs } from "./components/addJobs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddJobs />
    </div>
  );
}

export default App;
