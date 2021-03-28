import DrawPointToCanvas from "./DrawPointToCanvas"

import {defaultTeleports} from '../../Data/TeleportDB'

export const DrawTeleports = (canvas, originFill, destinationFill, backgroundName) => {
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.origin, originFill, backgroundName))
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.destination, destinationFill, backgroundName))
}

export default DrawTeleports