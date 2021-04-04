const yardsToMeters = ( yards ) => {
  return yards * 0.9114
}

export const GetSpeed = ( modifier, unit ) => {
  const baseSpeed = 7 // yd/s
  const currentSpeed = baseSpeed * modifier

  if (unit) {
    const validMeterNames = ['m', 'meter', 'meters']
    const isMeters = validMeterNames.includes(unit.toLowerCase())
    return isMeters ? yardsToMeters(currentSpeed) : currentSpeed
  } else {
    return currentSpeed
  }
}

export default GetSpeed