import React from 'react'

const Point = ({ point }) => {
    
    return (
        <p>{Math.round(point.x * 100) / 100}, {Math.round(point.y * 100) / 100}</p>
      )
}

export default Point