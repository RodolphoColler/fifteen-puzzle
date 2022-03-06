import { createEffect, createSignal } from "solid-js";

function Timer({ isTimerStarted, timer,setTimer }) {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    if(isTimerStarted()) {
      setInterval(() => {
        setCount(prev => prev + 1)
        setTimer(`${String(Math.floor(count() / 60)).padStart(2, '0')}:${String(count() % 60).padStart(2, '0')}`)
      }, 1000)

    }
  });

  return (
    <>
      <h3>{ timer() }</h3>
    </>
  );
}

export default Timer;