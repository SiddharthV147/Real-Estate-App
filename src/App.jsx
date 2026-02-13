import { useState } from 'react'
import Home from './pages/Home'
import { Footer } from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
