import React from 'react'

const Position = ({ position }) => {
    
    return (
        <p>{Math.round(position.x * 10) / 10}, {Math.round(position.y * 10) / 10} in {position.continent.name}</p>
      )
}

export default Position