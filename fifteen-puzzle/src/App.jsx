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
    arrayOfArrays.push([])
    arrayOfArrays[index].push(getPartOfArray(array, index, boardSize))
  })
  return arrayOfArrays;
}

function randomArray(boardSize) {
  return [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());
}

function shuffleNumbers(boardSize) {
    return divideArray(randomArray(boardSize), boardSize)
  }

  return (
  <h1>Should have a board here</h1>
  );
}

export default App;
