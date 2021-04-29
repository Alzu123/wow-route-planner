import Point from "../Point"

const UpdateFromPlayerTeleports = (teleports, playerPosition) => {
  if (!playerPosition) {
    return teleports
  }

  return teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, position: new Point(playerPosition.x, playerPosition.y, playerPosition.continent)}} : teleport)
}

export default UpdateFromPlayerTeleports