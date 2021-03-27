import React from 'react'

const fancifyCoordinates = (coordinates) => {
  return `[${coordinates.x}, ${coordinates.y}]`
}

const Teleports = ({ teleports }) => {
  return (
    <div>
      {teleports.map(teleport => 
        <p key={teleport.id}>
          {teleport.name}: From {fancifyCoordinates(teleport.origin)} to {fancifyCoordinates(teleport.destination)}
        </p>)}
    </div>
  )
}

export default Teleports