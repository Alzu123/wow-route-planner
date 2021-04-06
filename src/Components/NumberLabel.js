import React from 'react'

const Position = ({ onClick, numRoutes }) => {
  return (
    <form>
      <label for="routeOrdinal">Select how good route is displayed (0 is best):</label>
      <input type="number" id="routeOrdinal" name="quantity" min="0" max={numRoutes} onChange={onClick}/>
    </form>
  )
}

export default Position