function Input({ setToggle, setBoardSize }) {
  return (
    <label htmlFor="">
      <input 
        type="number" 
        name="" 
        id="" 
        onInput={(e) => setBoardSize(e.target.value)}/>
      <button 
        type="button"
        onClick={ () => setToggle(true)}
      >
        play
      </button>
    </label>
  )
}

export default Input;