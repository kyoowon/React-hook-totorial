import {Example_1, Example_class_1} from './Components/Example_1.js';
import {Example_2} from './Components/customs/useInput.js';

function App() {
  return (
    <div className="App">
      {/* react hooks - useState */}
      <Example_1></Example_1>
      <Example_class_1></Example_class_1>
      <Example_2></Example_2>
    </div>
  );
}

export default App;
