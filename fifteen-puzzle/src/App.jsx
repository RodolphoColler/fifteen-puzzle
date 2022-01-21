function App() {

  function shuffleNumbers(boardSize) {
    const randomArray = [...Array(boardSize * boardSize).keys()].sort(() => .5 - Math.random());
  }
  shuffleNumbers(4) 
  return (
  <h1>Should have a board here</h1>
  );
}

export default App;
