import { CANVAS_END_COLOR, CANVAS_END_SIZE, CANVAS_START_COLOR, CANVAS_START_SIZE } from "../../Data/ConfigConstants"
import DrawPointToCanvas from "./DrawPointToCanvas"

export const DrawStartAndEndToCanvas = (canvas, startAndEnd, backgroundName) => {
  const startPosition = startAndEnd.start
  const endPosition = startAndEnd.end
  
  if (startPosition) {
    DrawPointToCanvas(canvas, startPosition, CANVAS_START_SIZE, CANVAS_START_COLOR, backgroundName)
  }

  if (endPosition) {
    DrawPointToCanvas(canvas, endPosition, CANVAS_END_SIZE, CANVAS_END_COLOR, backgroundName)
  }
}

export default DrawStartAndEndToCanvas