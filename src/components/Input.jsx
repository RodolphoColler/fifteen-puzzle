// import '../input.css'

function Input({ setToggle, setBoardSize }) {
  return (
    <div>
      <h1>Fifteen Puzzle</h1>
      {/* <p>Fifteen Puzzle is a simple game that we need to organize the tiles</p> */}
      {/* <form onSubmit={ () =>}> */}
        <label htmlFor="">
          <input 
            type="number" 
            name=""
            id=""
            placeholder="Insert your board size"
            onInput={(e) => setBoardSize(e.target.value)}/>
          <button
            type="button"
            onClick={ () => setToggle(true)}
          >
            play
          </button>
        </label>
      {/* </form> */}
    </div>
  )
}

export default Input;