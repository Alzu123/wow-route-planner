import Point from './Point'
import Continent from './Continent'

const calculateScale = (p1, p2, distance) => {
  const unitsTravelled = p1.distanceTo(p2)
  return distance / unitsTravelled
}

const exodarArea = [new Point(24.9, 9.8, 'Kalimdor'), new Point(34.5, 9.8, 'Kalimdor'), new Point(38.9, 32.9, 'Kalimdor'), new Point(24.9, 32.9, 'Kalimdor')]
const beStarterArea = [new Point(52.5, 24.2, 'Eastern Kingdoms'), new Point(56.1, 27.8, 'Eastern Kingdoms'), new Point(59.5, 34.2, 'Eastern Kingdoms'), new Point(61.5, 28.7, 'Eastern Kingdoms'), new Point(59.1, 10.9, 'Eastern Kingdoms'), new Point(51, 9.6, 'Eastern Kingdoms')]
const isleOfQueldanasArea = [new Point(51, 9.6, 'Eastern Kingdoms'), new Point(59.1, 10.9, 'Eastern Kingdoms'), new Point(59.1, 0, 'Eastern Kingdoms'), new Point(51, 0, 'Eastern Kingdoms')]
const isleOfThunderArea = [new Point(14.9, 21.4, 'Pandaria'), new Point(27.3, 21.4, 'Pandaria'), new Point(27.3, 0, 'Pandaria'), new Point(14.9, 0, 'Pandaria')]

const ardenwealdArea = [new Point(37.9, 65.4, 'Shadowlands'), new Point(37.9, 100, 'Shadowlands'), new Point(58.4, 65.4, 'Shadowlands'), new Point(58.4, 100, 'Shadowlands')]
const bastionArea = [new Point(62.8, 44.3, 'Shadowlands'), new Point(62.8, 72.5, 'Shadowlands'), new Point(80.3, 72.5, 'Shadowlands'), new Point(80.3, 44.3, 'Shadowlands')]
const maldraxxusArea = [new Point(50, 6.8, 'Shadowlands'), new Point(50, 37, 'Shadowlands'), new Point(76.5, 37, 'Shadowlands'), new Point(76.5, 6.8, 'Shadowlands')]
const mawArea = [new Point(29, 21, 'Shadowlands'), new Point(29, 0, 'Shadowlands'), new Point(16, 0, 'Shadowlands'), new Point(16, 21, 'Shadowlands')]
const revendrethArea = [new Point(33.2, 47.5, 'Shadowlands'), new Point(16.1, 41.1, 'Shadowlands'), new Point(15.9, 67.2, 'Shadowlands'), new Point(33.2, 64.6, 'Shadowlands')]
const shadowlandsNoFlys = [
  ardenwealdArea,
  bastionArea,
  maldraxxusArea,
  mawArea,
  revendrethArea
]

let continents = {
  KALIMDOR: new Continent('Kalimdor', 'Kalimdor.jpg', calculateScale(new Point(56.46, 65.74), new Point(56.41, 68.61), 700), 2, true, [exodarArea]),
  EASTERN_KINGDOMS: new Continent('Eastern Kingdoms', 'Eastern Kingdoms.jpg', calculateScale(new Point(49.55, 82.13), new Point(49.52, 79.85), 735-116), 2, true, [beStarterArea, isleOfQueldanasArea]),
  OUTLAND: new Continent('Outland', 'Outland.jpg', calculateScale(new Point(71.07, 80.58), new Point(68.75, 78.74), 560-102), 2, true),
  NORTHREND: new Continent('Northrend', 'Northrend.jpg', calculateScale(new Point(46.26, 20.87), new Point(47.34, 27.09), 921-113), 2, true),
  DEEPHOLM: new Continent('Deepholm', 'Deepholm.jpg', calculateScale(new Point(49.72, 53.55), new Point(51.06, 65.51), 510-98), 3, true),
  TOL_BARAD_PENINSULA: new Continent('Tol Barad Peninsula', 'Tol Barad Peninsula.jpg', calculateScale(new Point(46.58, 74.15), new Point(55.19, 75.75), 180-21), 3, false),
  PANDARIA: new Continent('Pandaria', 'Pandaria.jpg', calculateScale(new Point(60.04, 35.42), new Point(63.73, 31.97), 768-93), 2, true, [isleOfThunderArea]),
  DRAENOR: new Continent('Draenor', 'Draenor.jpg', calculateScale(new Point(34.56, 26.31), new Point(36.18, 29.33), 699-112), 2, true),
  BROKEN_ISLES: new Continent('Broken Isles', 'Broken Isles.jpg', calculateScale(new Point(46.32, 54.81), new Point(46.7, 68.1), 488-69), 2, true),
  MACAREE: new Continent('Mac\'Aree, Argus', 'MacAree.jpg', calculateScale(new Point(55.89, 67.74), new Point(53.09, 58.98), 265-54), 2, false),
  ANTORAN_WASTES: new Continent('Antoran Wastes, Argus', 'Antoran Wastes.jpg', calculateScale(new Point(55.82, 40.42), new Point(51.23, 53.12), 424-97), 2, false),
  KROKUUN: new Continent('Krokuun, Argus', 'Krokuun.jpg', calculateScale(new Point(61.19, 50.42), new Point(60.17, 61.60), 353-74), 2, false),
  ZANDALAR: new Continent('Zandalar', 'Zandalar.jpg', calculateScale(new Point(58.58, 60.17), new Point(63.71, 51.09), 978+114), 2, true),
  KUL_TIRAS: new Continent('Kul Tiras', 'Kul Tiras.jpg', calculateScale(new Point(69.24, 65.15), new Point(65.19, 62.29), 674-87), 2, true),
  NAZJATAR: new Continent('Nazjatar', 'Nazjatar.jpg', calculateScale(new Point(47.12, 62.61), new Point(48.82, 47.76), 531-102), 3, true),
  SHADOWLANDS: new Continent('Shadowlands', 'Shadowlands.jpg', calculateScale(new Point(45.61, 50.70), new Point(46.27, 50.70), 232-72), 2, false, shadowlandsNoFlys),
}

let i = 0
for (const continent in continents) {
  continents[continent] = {...continents[continent], id: i}
  i++
}

export default continents