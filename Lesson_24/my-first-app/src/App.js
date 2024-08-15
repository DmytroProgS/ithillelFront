
import './App.css';
import Title from './components/Title/Title'
import Input from './components/Input/Input'
import Texteria from './components/Input/Texteria'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <Title text="SWAPI"/>
          <Input type="text"/>
          <Texteria/>
    
      </header>
    </div>
  );
}

export default App;
