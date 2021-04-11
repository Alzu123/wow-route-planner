import PlayerInfo from "../../../Data/Player"


const yardsToMeters = ( yards ) => {
  return yards * 0.9114
}

export const GetSpeed = ( flyable, unit ) => {
  const speedMod = flyable ? PlayerInfo.speedModifier : 2
  const baseSpeed = 7 // yd/s
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