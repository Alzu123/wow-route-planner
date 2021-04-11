import DrawPointToCanvas from "./DrawPointToCanvas"

export const DrawTeleports = (canvas, teleports, originFill, destinationFill, backgroundName) => {

  teleports = teleports.filter(teleport => teleport.enabled)
  teleports.forEach(function(teleport) {
    DrawPointToCanvas(canvas, teleport.origin.position, 5, originFill, backgroundName)
    DrawPointToCanvas(canvas, teleport.destination.position, 5, destinationFill, backgroundName)
  })
}

export default DrawTeleports