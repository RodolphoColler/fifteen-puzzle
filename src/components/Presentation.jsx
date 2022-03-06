import '../presentation.css';

function Presentation({setIsTimerStarted}) {
  
  return (
    <>
      <div class='presentation-card-background'>
        <div class='presentation-card'>
          <h2>Something</h2>
          <p>The goal of the puzzle is to place the tiles in numerical order.</p>
          <button onClick={ (e) => {
            e.target.closest('.presentation-card-background').remove(),
            setIsTimerStarted(prev => !prev)
          }}>play it</button>
        </div>
      </div>
    </>
  )
}

export default Presentation;