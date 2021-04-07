import React, { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

import GenerateTeleportJson from './Data/Teleport Processing/GenerateTeleportJson'

const App = () => {
  const [ isTeleportListShown, setIsTeleportListShown ] = useState(false)

  function showTeleports(event) {
    if (event === '#teleports') {
      setIsTeleportListShown(!isTeleportListShown)
    } else {
      setIsTeleportListShown(false)
    }
  }

  //GenerateTeleportJson()

  return (
    <div>
      <Header showTeleports={showTeleports}/>
      <Body showTeleports={isTeleportListShown}/>
    </div>
  )
}

export default App