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

let continents = {
  KALIMDOR: new Continent('Kalimdor', 'Kalimdor.jpg', calculateScale(new Point(56.46, 65.74), new Point(56.41, 68.61), 700), 2, true, [exodarArea]),
  EASTERN_KINGDOMS: new Continent('Eastern Kingdoms', 'Eastern Kingdoms.jpg', 300, 2, true, [beStarterArea, isleOfQueldanasArea]),
  OUTLAND: new Continent('Outland', 'Outland.jpg', 300, 2, true),
  NORTHREND: new Continent('Northrend', 'Northrend.jpg', 300, 2, true),
  DEEPHOLM: new Continent('Deepholm', 'Deepholm.jpg', 50, 3, true),
  TOL_BARAD_PENINSULA: new Continent('Tol Barad Peninsula', 'Tol Barad Peninsula.jpg', 20, 3, false),
  PANDARIA: new Continent('Pandaria', 'Pandaria.jpg', 300, 2, true, [isleOfThunderArea]),
  DRAENOR: new Continent('Draenor', 'Draenor.jpg', 300, 2, true),
  BROKEN_ISLES: new Continent('Broken Isles', 'Broken Isles.jpg', 300, 2, true),
  MACAREE: new Continent('Mac\'Aree', 'MacAree.jpg', 50, 2, false),
  ANTORAN_WASTES: new Continent('Antoran Wastes', 'Antoran Wastes.jpg', 50, 2, false),
  KROKUUN: new Continent('Krokuun', 'Krokuun.jpg', 50, 2, false),
  ZANDALAR: new Continent('Zandalar', 'Zandalar.jpg', 300, 2, true),
  KUL_TIRAS: new Continent('Kul Tiras', 'Kul Tiras.jpg', 300, 2, true),
  NAZJATAR: new Continent('Nazjatar', 'Nazjatar.jpg', 50, 3, true),
  SHADOWLANDS: new Continent('Shadowlands', 'Shadowlands.jpg', 300, 2, false),
}

let i = 0
for (const continent in continents) {
  continents[continent] = {...continents[continent], id: i}
  i++
}

export default continents