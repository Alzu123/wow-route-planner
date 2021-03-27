import DrawPointToCanvas from "./DrawPointToCanvas"

import {defaultTeleports} from '../../Data/TeleportDB'

export const DrawTeleports = (canvas, originFill, destinationFill) => {
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.origin, originFill))
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.destination, destinationFill))
}

export default DrawTeleports