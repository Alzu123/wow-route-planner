import continents from './ContinentDB';
import Point from './Point';

const namedLocations = [
  {
    name: 'Ulduar',
    position: new Point(50, 50, continents.EASTERN_KINGDOMS)
  },
  {
    name: 'Orgrimmar',
    position: new Point(0, 0, continents.KALIMDOR)
  }
]

export default namedLocations