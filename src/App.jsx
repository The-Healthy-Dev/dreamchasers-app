import { useState } from 'react'
import Login from './pages/auth/Login'

// TODO: add packages: auth0, netlify...

function App() {
  const [count, setCount] = useState(0)

  window.logger.info('count', count)

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count} times
      </button>
      <span>Dreamchasers</span>
      <Login />
    </>
  )
}

export default App
