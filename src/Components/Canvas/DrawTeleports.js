import DrawPointToCanvas from "./DrawPointToCanvas"

export const DrawTeleports = (canvas, teleports, originFill, destinationFill, backgroundName) => {
  teleports = teleports.filter(teleport => teleport.enabled)
  teleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.origin, originFill, backgroundName))
  teleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.destination, destinationFill, backgroundName))
}

export default DrawTeleports