import DrawPointToCanvas from "./DrawPointToCanvas"

export const DrawTeleports = (canvas, teleports, originFill, destinationFill, backgroundName) => {
  teleports = teleports.filter(teleport => teleport.enabled)
  teleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.origin.position, originFill, backgroundName))
  teleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.destination.position, destinationFill, backgroundName))

  // Draw points for parent continents, if found
  teleports.forEach(function(teleport) {
    if (teleport.origin.parent) {
      DrawPointToCanvas(canvas, teleport.origin.parent, originFill, backgroundName)
    }
  })
  teleports.forEach(function(teleport) {
    if (teleport.destination.parent) {
      DrawPointToCanvas(canvas, teleport.destination.parent, originFill, backgroundName)
    }
  })
}

export default DrawTeleports