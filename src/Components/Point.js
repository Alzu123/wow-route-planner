import React from 'react'

const Point = ({ point }) => {
    
    return (
        <p>{Math.round(point.x * 10) / 10}, {Math.round(point.y * 10) / 10}</p>
      )
}

export default Point