const ToggleTeleports = (teleports, teleportIds, newState) => {
  const matchingTeleports = teleports.filter(teleport => teleportIds.includes(teleport.id))
  if (matchingTeleports.length === 0) {
    return teleports
  }

  return teleports.map(teleport => teleportIds.includes(teleport.id) ? newState ? {...teleport, enabled: newState} : {...teleport, enabled: !teleport.enabled} : teleport)
}

export default ToggleTeleports