import continents from "./ContinentDB"
import Point from "./Point"

const PlayerInfo = {
  position: new Point(27.4, 37.7, continents.NAZJATAR),
  faction: 'Horde',
  class: 'Druid',
  race: 'Troll',
  profession1: 'Alchemy',
  profession2: 'Herbalism',
  speedModifier: 4.10 // Air speed. 410 % = master flying, 380 % = artisan, 250 % = normal
}

export default PlayerInfo