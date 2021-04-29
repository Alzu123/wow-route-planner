import { PLAYER_BASE_SPEED, PLAYER_SPEED_MODIFIER } from "../../../Data/ConfigConstants"

const yardsToMeters = ( yards ) => {
  return yards * 0.9114
}

export const GetSpeed = ( flyable, unit ) => {
  const speedMod = flyable ? PLAYER_SPEED_MODIFIER : 2
  const baseSpeed = PLAYER_BASE_SPEED
  const currentSpeed = baseSpeed * speedMod

  if (unit) {
    const validMeterNames = ['m', 'meter', 'meters']
    const isMeters = validMeterNames.includes(unit.toLowerCase())
    return isMeters ? yardsToMeters(currentSpeed) : currentSpeed
  } else {
    return currentSpeed
  }
}

export default GetSpeed