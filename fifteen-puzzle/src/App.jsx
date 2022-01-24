import { createSignal } from 'solid-js';
import Board from './components/Board';
import Input from './components/Input';
import './Board.css'

function App() {
  const [toggle, setToggle] = createSignal(false)
  const [boardSize, setBoardSize] = createSignal(4)

  console.log(boardSize());

  return (
  <>
    <div class={`wrapper`}>
      { toggle() ? <Board boardSize={ boardSize }/>
        : <Input setToggle={ setToggle } setBoardSize={ setBoardSize }/>
      }
    </div>
  </>
  );
}

export default App;
