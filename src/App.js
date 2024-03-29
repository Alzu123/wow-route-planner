import React, { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

import defaultTeleports from './Data/TeleportDB'
import ProcessTeleports from './Data/Teleport Processing/ProcessTeleports'

const App = () => {
  const [ isTeleportsShown, setIsTeleportsShown ] = useState(false)
  const [ isConfigurationShown, setIsConfigurationShown ] = useState(false)
  const [ isInfoShown, setIsInfoShown ] = useState(false)
  const [ teleports, setTeleports ] = useState(ProcessTeleports(defaultTeleports))

  function showTabs(event) {
    if (event === '#home') {
      setIsInfoShown(false)
      setIsTeleportsShown(false)
      setIsConfigurationShown(false)
    }

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

    if (event === '#info') {
      setIsInfoShown(!isInfoShown)
    } else {
      setIsInfoShown(false)
    }
  }

  return (
    <div className='full'>
      <Header showTabs={showTabs}/>
      <Body showTeleports={isTeleportsShown} teleports={teleports} setTeleports={setTeleports} showConfiguration={isConfigurationShown} showInfo={isInfoShown}/>
    </div>
  )
}

export default App