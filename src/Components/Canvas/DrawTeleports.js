import DrawPointToCanvas from "./DrawPointToCanvas"

import {defaultTeleports} from '../../Data/TeleportDB'

export const DrawTeleports = (canvas, fill) => {
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.origin, fill))
  defaultTeleports.forEach(teleport => DrawPointToCanvas(canvas, teleport.destination, 'blue'))
}

export default DrawTeleports