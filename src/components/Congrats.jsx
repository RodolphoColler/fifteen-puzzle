function Congrats({ conclusionTime }) {
  return (
    <>
      <div class="darker-background">
        <div class="congrats-card">
          <h2>Congratulations</h2>
          <p>You complete the puzzle in {`${conclusionTime()} minutes`}</p>
          <p>Share with your friends and challenge them</p>
        </div>
      </div>
    </>
  )
}

export default Congrats;