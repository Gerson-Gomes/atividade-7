import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>O contador infinito</h1>
      <div className='counterContainer'>
        <button onClick={() => setCount((count) => count + 1)} className='btn btn-success' id='add' >+</button>
        <div className="card">
            count is {count}
        </div>
        <button onClick={() =>{if(count > 0){setCount((count) => count - 1)}}} className='btn btn-danger' id='sub'>-</button>
      </div>
      
    </>
  )
}

export default App
