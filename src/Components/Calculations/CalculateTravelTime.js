import { GROUND_TRAVEL_PENALTY } from "../../Data/ConfigConstants"
import GetPointFlyability from "./GetPointFlyability"
import GetSpeed from "./Speed/GetSpeed"

const CalculateTravelTime = (distance, position) => {
  const isFlyable = GetPointFlyability(position)
  const travelPenalty = isFlyable ? 1 : GROUND_TRAVEL_PENALTY
  return distance / GetSpeed(isFlyable) * travelPenalty
}

export default CalculateTravelTime