import { createSignal } from 'solid-js';
import Board from './components/Board';
import Presentation from './components/Presentation';
import './Board.css'

function App() {
  const [isTimerStarted, setIsTimerStarted] = createSignal(false)

  return (
  <>
    <div class={`wrapper`}>
      <Board isTimerStarted={ isTimerStarted }/>
      <Presentation setIsTimerStarted={ setIsTimerStarted } />
    </div>
  </>
  );
}

export default App;
