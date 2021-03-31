const DistanceBetweenTwoPoints = (position1, position2) => {
  if (position1.continent !== position2.continent) {
    return Number.POSITIVE_INFINITY
  }

  const point1 = position1.coordinates
  const point2 = position2.coordinates

  const xDiff = point2.x - point1.x
  const yDiff = point2.y - point1.y
  return Math.round(Math.sqrt(xDiff ** 2 + yDiff ** 2) * 100) / 100
}

export default DistanceBetweenTwoPoints