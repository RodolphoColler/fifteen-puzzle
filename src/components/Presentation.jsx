import '../css/presentation.css';

function Presentation({setIsTimerStarted}) {
  return (
    <>
      <div class='presentation-card-background'>
        <div class='presentation-card'>
          <h2>Fifteen puzzle</h2>
          <p>This is a good puzzle to spend time or just procrastinate.</p>
          <p>The goal of the puzzle is to place the tiles in numerical order.</p>
          <button onClick={ (e) => {
            e.target.closest('.presentation-card-background').remove(),
            setIsTimerStarted(prev => !prev)
          }}>Start</button>
        </div>
      </div>
    </>
  )
}

export default Presentation;