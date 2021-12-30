import logo from './logo.svg';
import './App.css';
import {  Grocery} from './components/grocery';

function App() {
  return (
    <div className="App">
      <div className="AppInside">
        <h2 className="title">Grocery Store</h2>
        <Grocery/>
      </div>
    </div>
  );
}

export default App;
