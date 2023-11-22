// props make component re-usable
// here in below we are using 2 card component (but initially here both the card have same properties)
// we can change the properties of card with using of props
// we can pass props from parent to child
// we can not pass array, object as props
// to pass object or array as props first we need to store into a variable then we can pass it using {}



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    name : "Ajeet",
    age : 22,
    town : "Blr"
  }

  const myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 color-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name="Amisha"/>
      <Card />
    </>
  )
}

export default App
