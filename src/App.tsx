import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="size-full debug">
        <div className="h-full container-main mx-auto debug">

          <button
            type="button"
            className="debug"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>

        </div>
      </div>
    </>
  )
}

export default App
