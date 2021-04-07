import React from 'react'
import { Button, Col } from 'react-bootstrap'

const ToggleRestrictions = ({type, value, onClick, teleports}) => {
  const affectedTeleports = teleports.filter(teleport => teleport.restrictions[type.toLowerCase()] === value)
  const areAllEnabled = !affectedTeleports.some(teleport => !teleport.enabled)
  const areNoneEnabled = !affectedTeleports.some(teleport => teleport.enabled)

  let variant = 'warning'
  let disabled = false
  if (affectedTeleports.length === 0) {
    variant = 'secondary'
    disabled = true
  } else if (areAllEnabled) {
    variant = 'success'
  } else if (areNoneEnabled) {
    variant = 'danger'
  }

  return <Col id={value}><Button variant={variant} onClick={onClick} disabled={disabled}>Toggle</Button> {value}</Col>
}

export default ToggleRestrictions