import { createSignal } from "solid-js";
import Congrats from "./Congrats";
import Timer from "./Timer";
import '../css/congrats.css'
import '../css/board.css'

function Board({ isTimerStarted }) {
  const [toggle, setToggle] = createSignal(false);
  const [timer, setTimer] = createSignal('00:00');
  const [conclusionTime, setConclusionTime] = createSignal(0);
  const [moveCount, setMoveCount] = createSignal(0);

  function getBoardRowNumbers(index, array, boardSize) {
    return array.slice(boardSize * index, (index + 1) * boardSize);
  }

  function getBoardRow(array, boardSize) {
    return getArrayOfNumbers(boardSize).map((index) => getBoardRowNumbers(index, array, boardSize));
  }

  function getRandomArray(boardSize) {
    return getArrayOfNumbers(boardSize * boardSize).sort(() => 0.5 - Math.random());
  }

  function getArrayOfNumbers(arrayLength) {
    return [...Array(arrayLength).keys()];
  }

  function getBoardNumbers(boardSize) {
    return getBoardRow(getRandomArray(boardSize), boardSize);
  }

  function getButtonsArray() {
    let allButtons = document.querySelectorAll("button");
    return [...allButtons].map((e) => Number(e.textContent));
  }

  function getOrdinateArray() {
    return getArrayOfNumbers(4 ** 2);
  }

  function winTheGame() {
    if (getOrdinateArray().every((e, index) => e === getButtonsArray()[index])) {
      setToggle(!toggle());
      setConclusionTime(timer());
    }
  }

  function getLastCharacter(string) {
    return string[string.length - 1];
  }

  function changeTiles(target, emptyButton) {
    target.classList.add("empty");
    emptyButton.classList.remove("empty");
    emptyButton.textContent = target.textContent;
    target.textContent = 0;
    setMoveCount((prev) => prev + 1);
    winTheGame();
  }

  function shouldTileMove({ target }) {
    const emptyButton = document.querySelector(".empty");

    if (getLastCharacter(emptyButton.id) === getLastCharacter(target.id) && Math.abs(emptyButton.id[0] - target.id[0]) === 1) {
      changeTiles(target, emptyButton);
    }
    if (emptyButton.id[0] === target.id[0] && Math.abs(getLastCharacter(emptyButton.id) - getLastCharacter(target.id)) === 1
    ) {
      changeTiles(target, emptyButton);
    }
  }

  return (
    <>
      {toggle() && <Congrats conclusionTime={ conclusionTime }/>}

      <main class="board">
        <header class="board-header">
          <h1>Fifteen puzzle</h1>
          <div>
            <Timer isTimerStarted={isTimerStarted} timer={ timer } setTimer={ setTimer }/>
            <h2>Moves: {moveCount()} </h2>
          </div>
        </header>

        {getBoardNumbers(4).map((array, index) => (
          <div class="row-buttons">
            {array.map((number, i) => (
              <button
                type="button"
                id={`${index}-${i}`}
                class={number === 0 && "empty"}
                onClick={(e) => shouldTileMove(e)}
              >
                { number }
              </button>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}

export default Board;
