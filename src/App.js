
import './App.css';
import Addtask from './components/Addtask';
import { Filtre } from './components/Filtre';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
    <div className="App_container">
      <h1 style={{color:"darkorange",  justifyContent:"center"}}> TO-DO LIST </h1>
      <Addtask/>
      <Tasklist/>
      <Filtre /> 
      </div>
    </div>
  );
}

export default App;
