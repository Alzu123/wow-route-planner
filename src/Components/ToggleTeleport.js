import React from 'react'
import Button from 'react-bootstrap/Button'

const ToggleTeleport = ({ onClick, teleport, text }) => {

  if (teleport.enabled) {
    return <Button variant='success' size="sm" onClick={onClick}>{text}</Button>
  } else {
    return <Button variant='danger' size="sm" onClick={onClick}>{text}</Button>
  }
}

export default ToggleTeleport