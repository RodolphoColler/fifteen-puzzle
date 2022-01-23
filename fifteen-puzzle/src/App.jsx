import './Board.css'

function App() {

  function getPartOfArray(array, e, boardSize) {
    return array.slice(boardSize * e, (e + 1) * boardSize);
  }

  function divideArray(array, boardSize) {
    const arrayOfArrays = [];
    [...Array(boardSize).keys()].forEach(e => {
      arrayOfArrays.push(getPartOfArray(array, e, boardSize))
    })
    return arrayOfArrays;
  }

  function getRandomArray(boardSize) {
    return [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());
  }

  function shuffleNumbers(boardSize) {
    return divideArray(getRandomArray(boardSize), boardSize);
  }

  function getLastCharacter(string) {
    return string[string.length - 1];
  }

  function changePieces(target, emptyButton) {
    target.classList.add('empty')
    emptyButton.classList.remove('empty')
    emptyButton.textContent = target.textContent 
    target.textContent = null
  }

  function alreadyWinTheGame() {
    const allButtons = document.querySelectorAll('button')
    const buttonsTextContent = [...allButtons].map(e => e.textContent)
    const originalArray = [...Array(16).keys()]
    buttonsTextContent.pop();
    originalArray.shift()
    const a  = originalArray.every((e, index) =>  e === Number(buttonsTextContent[index]))
  }

  function move({ target }) {
    const emptyButton = document.querySelector('.empty')
    if(getLastCharacter(emptyButton.id) === getLastCharacter(target.id) && Math.abs(emptyButton.id[0] - target.id[0]) === 1) {
      changePieces(target, emptyButton)
      alreadyWinTheGame()
    }
    if(emptyButton.id[0] === target.id[0]  && Math.abs(getLastCharacter(emptyButton.id) - getLastCharacter(target.id)) === 1) {
      changePieces(target, emptyButton)
      alreadyWinTheGame()
    }
  }

  return (
  <>
    <div class="wrapper">
      <main class="board">
        { shuffleNumbers(4).map((array, index) => array.map((number, i) => (
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
    </div>
  </>
  );
}

export default App;
