import './App.css';
import { Picker } from './components/Picker';

function App() {
  return (
    <div className='App'>
      <Picker colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', , 'brown', 'gray', 'black', 'white', 'violet', , 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'aqua', 'silver', 'gold']}/>
    </div>
  );
}

export default App;