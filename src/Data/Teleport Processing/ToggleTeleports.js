const ToggleTeleports = (teleports, teleportIds, newState) => {
  const matchingTeleports = teleports.filter(teleport => teleportIds.includes(teleport.id))
  if (matchingTeleports.length === 0) {
    return teleports
  }

  const newStateExists = typeof newState !== 'undefined'

  return teleports.map(teleport => teleportIds.includes(teleport.id) ? newStateExists ? {...teleport, enabled: newState} : {...teleport, enabled: !teleport.enabled} : teleport)
}

export default ToggleTeleports