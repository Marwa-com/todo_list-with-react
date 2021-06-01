
import './App.css';
import Addtask from './components/Addtask';
import { Filtre } from './components/Filtre';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
    <div className="App_container">
      <Addtask/>
      <Tasklist/>
      <Filtre /> 
      </div>
    </div>
  );
}

export default App;
