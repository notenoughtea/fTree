import { useState } from 'react'
import './App.css'
import Tree from './components/FamilyTreeGraph/FamilyTreeGraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tree/>
    </>
  )
}

export default App
