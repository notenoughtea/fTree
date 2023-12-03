import { useState } from 'react'
import './App.css'
import OrgChartTree from './components/OrgChartTree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <OrgChartTree/>
    </>
  )
}

export default App
