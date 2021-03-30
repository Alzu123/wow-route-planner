const ToggleTeleport = (teleports, teleportID) => {
  const matchingTeleport = teleports.find(teleport => teleport.id === teleportID)
  if (matchingTeleport === undefined) {
    return teleports
  }

  const newState = !matchingTeleport.enabled
  return teleports.map(teleport => teleport.id === teleportID ? {...teleport, enabled: newState} : teleport)
}

export default ToggleTeleport