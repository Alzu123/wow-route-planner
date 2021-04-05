import continents from "./ContinentDB"
import Point from "./Point"

const PlayerInfo = {
  position: new Point(51.9, 74.7, continents.EASTERN_KINGDOMS),
  faction: 'Horde',
  class: 'Druid',
  race: 'Troll',
  profession1: 'Alchemy',
  profession2: 'Herbalism',
  speedModifier: 4.10 // Air speed. 410 % = master flying, 380 % = artisan, 250 % = normal
}

export default PlayerInfo