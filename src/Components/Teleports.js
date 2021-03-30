import React from 'react'

const fancifyCoordinates = (coordinates) => {
  return `[${coordinates.x}, ${coordinates.y}]`
}

const Teleports = ({ teleports, onClick }) => {
  return (
    <div>
      <table>
        <tbody>
          {teleports.map(teleport => 
            <tr key={teleport.id} id={teleport.id}>
              <td><button onClick={onClick}>Toggle</button></td>
              <td>{teleport.enabled.toString()} |</td>
              <td>
                {teleport.name}: From {teleport.origin.coordinates.x === 0 ? 'player' : fancifyCoordinates(teleport.origin.coordinates)} to {fancifyCoordinates(teleport.destination.coordinates)} in {teleport.destination.description}, {teleport.destination.continent}
              </td>
            </tr>)}
        </tbody>
      </table>
      
    </div>
  )
}

export default Teleports