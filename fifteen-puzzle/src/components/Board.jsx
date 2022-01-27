import { onMount, createSignal } from "solid-js";

function Board({ boardSize }) {
  const [toggle, setToggle] = createSignal(false)
  const [timer, setTimer] = createSignal('0:00');
  const [showTime, setShowTime] = createSignal('0:00');

  onMount(() => {
    let a = 0
    setInterval(() => {
      a += 1
      setTimer(`${Math.floor(a / 60)}:${String(a % 60).padStart(2,'0')}`)
    }, 1000)
  })

  function getPartOfArray(index, array, boardSize) {
    return array.slice(boardSize * index, (index + 1) * boardSize);
  }

  function divideArray(array, boardSize) {
    return getArrayOfNumbers(boardSize).map(index => getPartOfArray(index, array, boardSize))
  }

  function getRandomArray(boardSize) {
    return getArrayOfNumbers(boardSize * boardSize).sort(() => .5 - Math.random());
  }

  function shuffleNumbers(boardSize) {
    return divideArray(getRandomArray(boardSize), boardSize);
  }

  function getArrayOfNumbers(arrayLength) {
    return [...Array(arrayLength).keys()]
  }

  function getButtonsArray() {
    let allButtons = document.querySelectorAll('button');
    allButtons = [...allButtons].map(e => Number(e.textContent));
    allButtons.pop();
    return allButtons;
  }

  function getOriginalArray() {
    const originalArray = getArrayOfNumbers(Number(boardSize()) ** 2 );
    originalArray.shift();
    return originalArray;
  }

  function alreadyWinTheGame() {
    if(getOriginalArray().every((e, index) =>  e === getButtonsArray()[index] )) {
      setToggle(!toggle())
      setShowTime(timer())
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
    <>
      { toggle() && (
        <>
          <div class="congrats-card">
            <h2>Congratulations</h2>
            <p>You complete the puzzle in {`${showTime()} minutes`}</p>
            <p>Share with your friends and challenge them</p>
          </div>
          <div class="darker-background" />
        </>
      )}
    <main class="board">

      <h3>{timer()}</h3>

      { shuffleNumbers(Number(boardSize())).map((array, index) => (
        <div class="row-buttons"> 
          {
            array.map((number, i) => (
              <button 
                type="button"
                id={`${index}-${i}`}
                class={ number === 0 && 'empty' }
                onClick={ (e) => move(e) }
              >
                {number === 0 ? '' : number }
              </button>
          ))
          }
        </div>
    )) }
  </main>
  </>
  )
}

export default Board;