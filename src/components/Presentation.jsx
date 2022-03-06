import '../presentation.css';

function Presentation({setIsTimerStarted}) {
  
  return (
    <>
      <div class='presentation-card-background'>
        <div class='presentation-card'>
          <h2>Something</h2>
          <p>Text to player read</p>
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