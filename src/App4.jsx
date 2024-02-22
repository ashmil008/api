import React, { useEffect } from "react";

function App4() {

  useEffect(() => {
    console.log("mounting...app4")

    return () => {
      console.log("unmounting...app4")
    }
  }, [])

  return <div>app4</div>
}

export default App4
