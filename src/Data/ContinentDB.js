const calculateScale = (dx, dy, distance) => {
  const unitsTravelled = Math.sqrt(dx ** 2 + dy ** 2)
  return distance / unitsTravelled
}

class Continent {
  constructor(name, image, scale, type) {
    this.name = name
    this.image = require(`./Images/${image}`)
    this.scale = scale
    this.type = type // See https://wowpedia.fandom.com/wiki/Enum.UIMapType
  }
}

let continents = [
  new Continent('Kalimdor', 'Kalimdor.jpg', calculateScale(56.46 - 56.41, 65.74 - 68.61, 700), 2),
  new Continent('Eastern Kingdoms', 'Eastern Kingdoms.jpg', 300, 2),
  new Continent('Outland', 'Outland.jpg', 300, 2),
  new Continent('Northrend', 'Northrend.jpg', 300, 2),
  new Continent('Deepholm', 'Deepholm.jpg', 300, 3),
  new Continent('Tol Barad', 'Tol Barad Peninsula.jpg', 300, 3),
  new Continent('Pandaria', 'Pandaria.jpg', 300, 2),
  new Continent('Isle of Thunder', 'Isle of Thunder.jpg', 300, 3),
  new Continent('Draenor', 'Draenor.jpg', 300, 2),
  new Continent('Broken Isles', 'Broken Isles.jpg', 300, 2),
  new Continent('Zandalar', 'Zandalar.jpg', 300, 2),
  new Continent('Kul Tiras', 'Kul Tiras.jpg', 300, 2),
  new Continent('Nazjatar', 'Nazjatar.jpg', 300, 3),
  new Continent('Shadowlands', 'Shadowlands.jpg', 300, 2),
]

continents = continents.map((continent, i) => ({...continent, id: i}))

export default continents