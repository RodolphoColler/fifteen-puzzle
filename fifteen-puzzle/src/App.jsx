import './Board.css'

function App() {
  function getPartOfArray(a, index, boardSize) {
    if (index === 0) {
    return a.slice(0, boardSize);
    } else {
      return a.slice(boardSize * index, (index + 1) * boardSize);
    }
  }

  function divideArray(array, boardSize) {
    const arrayOfArrays = [];
    [...Array(boardSize).keys()].forEach((_, index) => {
      arrayOfArrays.push(getPartOfArray(array, index, boardSize))
    })
    return arrayOfArrays;
  }

  function randomArray(boardSize) {
    return [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());
  }

  function shuffleNumbers(boardSize) {
    return divideArray(randomArray(boardSize), boardSize);
  }

  function getLastCharacter(string) {
    return string[string.length - 1];
  }

  function move({ target }) {
    const emptyButton = document.querySelector('.empty')
    if(getLastCharacter(emptyButton.id) === getLastCharacter(target.id) && Math.abs(emptyButton.id[0] - target.id[0]) === 1) {
      console.log('amora');
    }
    if(emptyButton.id[0] === target.id[0]  && Math.abs(getLastCharacter(emptyButton.id) - getLastCharacter(target.id)) === 1) {
      console.log('amora');
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
