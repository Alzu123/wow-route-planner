import React from 'react'

import ClickSelector from './ClickSelector'
import BackgroundSelector from './BackgroundSelector'
import { Card } from 'react-bootstrap'

const MapSettings = ({ updateClickEditTarget, continent, changeBackground }) => {

  return (
    <Card className='overlay-1 settings-card'>
      <Card.Title>Map settings</Card.Title>
      <ClickSelector updateClickEditTarget={updateClickEditTarget} />
      <BackgroundSelector continent={continent} changeBackground={changeBackground}/>
    </Card>
  )
}

export default MapSettings