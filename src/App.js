import {Example_1, Example_class_1} from './Components/Example_1.js';
import {Example_2} from './Components/customs/useInput.js';
import {Example_3} from './Components/customs/useTabs.js';

function App() {
  return (
    <div className="App">
      {/* react hooks - useState */}
      <Example_1></Example_1>
      <Example_class_1></Example_class_1>
      {/* react custom hooks - useInput */}
      <Example_2></Example_2>
      {/* react custom hooks - useTabs */}
      <Example_3></Example_3>
    </div>
  );
}

export default App;
