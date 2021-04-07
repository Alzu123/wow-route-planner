import React, { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

import defaultTeleports from './Data/TeleportDB'
import ProcessTeleports from './Data/Teleport Processing/ProcessTeleports'

import GenerateTeleportJson from './Data/Teleport Processing/GenerateTeleportJson'

const App = () => {
  const [ isTeleportsShown, setIsTeleportsShown ] = useState(false)
  const [ isConfigurationShown, setIsConfigurationShown ] = useState(false)
  const [ teleports, setTeleports ] = useState(ProcessTeleports(defaultTeleports))

  function showTabs(event) {
    if (event === '#teleports') {
      setIsTeleportsShown(!isTeleportsShown)
    } else {
      setIsTeleportsShown(false)
    }

    if (event === '#configuration') {
      setIsConfigurationShown(!isConfigurationShown)
    } else {
      setIsConfigurationShown(false)
    }
  }

  //GenerateTeleportJson()

  return (
    <div>
      <Header showTabs={showTabs}/>
      <Body showTeleports={isTeleportsShown} teleports={teleports} setTeleports={setTeleports} showConfiguration={isConfigurationShown}/>
    </div>
  )
}

export default App