function GetPointFlyability(position) {
  let isFlyable = position.continent.isFlyable

  const unreachableAreas = position.continent.unreachableAreas
  if (unreachableAreas) {
    for (const area of unreachableAreas) {
      if (position.isInside(area) && position.continent.name !== 'Shadowlands') {
        isFlyable = false
      }
    }
  }

  return isFlyable
}

export default GetPointFlyability