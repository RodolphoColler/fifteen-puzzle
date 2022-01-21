function App() {

function partofAnArray(a, index, boardSize) {
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
    arrayOfArrays[index].push(partofAnArray(array, index, boardSize))
  })
  return arrayOfArrays;
}

  function shuffleNumbers(boardSize) {
    const randomArray = [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());

    divideArray(randomArray)

    console.log(divideArray(randomArray, boardSize));
    
  }
  shuffleNumbers(4) 
  return (
  <h1>Should have a board here</h1>
  );
}

export default App;
