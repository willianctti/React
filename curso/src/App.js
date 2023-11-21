import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Hooks from './components/Hooks';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <FirstComponent />
      <AnotherComponent />
      <Hooks />
      <List />
    </div>
    
  );
}

export default App;
