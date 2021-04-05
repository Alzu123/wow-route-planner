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
                {teleport.name}: From {teleport.fromPlayer ? 'player' : fancifyCoordinates(teleport.origin.position)} to {fancifyCoordinates(teleport.destination.position)} in {teleport.destination.description}, {teleport.destination.position.continent.name}
              </td>
            </tr>)}
        </tbody>
      </table>
      
    </div>
  )
}

export default Teleports