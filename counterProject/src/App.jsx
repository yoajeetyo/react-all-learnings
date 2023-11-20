import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increaseValue = () => {
    setCounter(counter+1)
  }
  const decreaseValue = () => {
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>This is Counter Game</h1>
      <h2>Counter Value: {counter}</h2>
      <button className='button' onClick={increaseValue}>Increase Value</button>
      <br/>
      <br/>
      <button className='button' onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
