import React, { useState } from 'react'
import App4 from './App4'
import App3 from './App3'

function App2() {
    const [state,setState] = useState(false)
   return (
    <div>
        <button onClick={() => setState(!state)}>button</button>
        {
            state ? <App3/> : <App4/>
        }
    </div>
  )
}

export default App2