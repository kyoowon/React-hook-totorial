import {Example_1, Example_class_1} from './Components/useState.js';
import {Example_2} from './Components/customs/useInput.js';
import {Example_3} from './Components/customs/useTabs.js';
import {Example_4} from './Components/useEffect.js';
import {Example_5} from './Components/customs/useTitle.js';
import {Example_6} from './Components/useRef.js';
import {Example_7} from './Components/customs/useClick.js';
import {Example_8} from './Components/customs/useConfirm.js';
import {Exmaple_9} from './Components/customs/usePreventLeave.js';

function App() {
  return (
    <div className="App">
      {/* react hooks - useState */}
      <Example_1></Example_1>
      <Example_class_1></Example_class_1>
      {/* react hooks - useEffect */}
      <Example_4></Example_4>
      {/* react hooks - useRef */}
      <Example_6></Example_6>
      {/* react custom hooks - useInput */}
      <Example_2></Example_2>
      {/* react custom hooks - useTabs */}
      <Example_3></Example_3>
      {/* react custom hooks - useTitle */}
      <Example_5></Example_5>
      {/* react custom hooks - useClick */}
      <Example_7></Example_7>
      {/* react custom hooks - useConfirm */}
      <Example_8></Example_8>
      {/* react custom hooks - usePreventLeave */}
      <Exmaple_9></Exmaple_9>
    </div>
  );
}

export default App;
