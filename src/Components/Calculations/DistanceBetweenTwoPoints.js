import continents from '../../Data/ContinentDB'

const DistanceBetweenTwoPoints = (position1, position2) => {
  if (position1.continent !== position2.continent) {
    return Number.POSITIVE_INFINITY
  }

  // This is a very slow operation as this function is calculated many many times
  const continentScale = continents.filter(continent => continent.name === position1.continent)[0].scale

  const point1 = position1.coordinates
  const point2 = position2.coordinates

  const xDiff = point2.x - point1.x
  const yDiff = point2.y - point1.y
  return Math.round(Math.sqrt(xDiff ** 2 + yDiff ** 2) * 100) / 100 * continentScale
}

export default DistanceBetweenTwoPoints