import DrawPointToCanvas from "./DrawPointToCanvas"

export const DrawTeleports = (canvas, teleports, originFill, destinationFill, backgroundName) => {
  // The teleports could look better with suitable icons attached to them. They require some more thought, however.
  //const teleportImage = new Image()
  //teleportImage.src = require('../../Data/Images/Icons/Portal.png').default

  teleports = teleports.filter(teleport => teleport.enabled)
  teleports.forEach(function(teleport) {
    DrawPointToCanvas(canvas, teleport.origin.position, 5, originFill, backgroundName)
    DrawPointToCanvas(canvas, teleport.destination.position, 5, destinationFill, backgroundName)
  })
}

export default DrawTeleports