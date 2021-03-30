import React from 'react'

const Position = ({ position }) => {
    
    return (
        <p>{Math.round(position.coordinates.x * 10) / 10}, {Math.round(position.coordinates.y * 10) / 10} in {position.continent}</p>
      )
}

export default Position