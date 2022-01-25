import { onMount } from "solid-js";

function Board({ boardSize, timer, setTimer }) {

  onMount(() => {
    setInterval(() => setTimer((prev) => prev + 1 ), 1000)
  })

  function getPartOfArray(index, array, boardSize) {
    return array.slice(boardSize * index, (index + 1) * boardSize);
  }

  function divideArray(array, boardSize) {
    return [...Array(boardSize).keys()].map(index => getPartOfArray(index, array, boardSize))
  }

  function getRandomArray(boardSize) {
    return [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());
  }

  function shuffleNumbers(boardSize) {
    return divideArray(getRandomArray(boardSize), boardSize);
  }

  function alreadyWinTheGame() {
    const allButtons = document.querySelectorAll('button');
    const buttonsTextContent = [...allButtons].map(e => e.textContent);
    const originalArray = [...Array(4).keys()];
    buttonsTextContent.pop();
    originalArray.shift();
    if(originalArray.every((e, index) =>  e === Number(buttonsTextContent[index]))) {
      setToggle(!toggle())
    }
  }

  function getLastCharacter(string) {
    return string[string.length - 1];
  }

  function changePieces(target, emptyButton) {
    target.classList.add('empty')
    emptyButton.classList.remove('empty')
    emptyButton.textContent = target.textContent 
    target.textContent = null
    alreadyWinTheGame()
  }

  function move({ target }) {
    const emptyButton = document.querySelector('.empty')

    if(getLastCharacter(emptyButton.id) === getLastCharacter(target.id) && Math.abs(emptyButton.id[0] - target.id[0]) === 1) {
      changePieces(target, emptyButton)
    }
    if(emptyButton.id[0] === target.id[0]  && Math.abs(getLastCharacter(emptyButton.id) - getLastCharacter(target.id)) === 1) {
      changePieces(target, emptyButton)
    }

  }

  return (
    <main class="board">

      <h3>time {`${Math.floor(timer() / 60)}:${(timer() % 60) < 10 ? '0' + timer() % 60 : timer() % 60 }`}</h3>

      { shuffleNumbers(Number(boardSize())).map((array, index) => array.map((number, i) => (
      <button 
        type="button"
        id={`${index}-${i}`}
        class={ number === 0 && 'empty' }
        onClick={ (e) => move(e) }
      >
        {number === 0 ? null : number }
      </button>
    ))) }
  </main>
  )
}

export default Board;