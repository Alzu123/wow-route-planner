import continents from './ContinentDB';
import Point from './Point';

const namedLocations = [
  {
    name: 'Anh\'Qiraj',
    zone: 'Silithus',
    position: new Point(41.04, 82.97, continents.KALIMDOR),
  },
  {
    name: 'Magni\'s Encampment',
    zone: 'Silithus',
    position: new Point(42.89, 79.26, continents.KALIMDOR),
  },
  {
    name: 'Caverns of Time',
    zone: 'Tanaris',
    position: new Point(59.27, 83.55, continents.KALIMDOR),
  },
  {
    name: 'Gadgetzan',
    zone: 'Tanaris',
    position: new Point(57.19, 77.75, continents.KALIMDOR),
  },
  {
    name: 'Onyxia\'s Lair',
    zone: 'Dustwallow Marsh',
    position: new Point(55.64, 68.25, continents.KALIMDOR),
  },
  {
    name: 'Dire Maul',
    zone: 'Feralas',
    position: new Point(43.74, 64.54, continents.KALIMDOR),
  },
  {
    name: 'Razorfen Downs',
    zone: 'Southern Barrens',
    position: new Point(51.93, 67.21, continents.KALIMDOR),
  },
  {
    name: 'Razorfen Kraul',
    zone: 'Southern Barrens',
    position: new Point(50.46, 66.16, continents.KALIMDOR),
  },
  {
    name: 'Ratchet',
    zone: 'Northern Barrens',
    position: new Point(56.72, 54.23, continents.KALIMDOR),
  },
  {
    name: 'Wailing Caverns',
    zone: 'Northern Barrens',
    position: new Point(51.85, 53.42, continents.KALIMDOR),
  },
  {
    name: 'Thunder Bluff',
    zone: 'Mulgore',
    position: new Point(46.14, 54.69, continents.KALIMDOR),
  },
  {
    name: 'Maraudon',
    zone: 'Desolace',
    position: new Point(39.18, 55.39, continents.KALIMDOR),
  },
  {
    name: 'The Crossroads',
    zone: 'Northern Barrens',
    position: new Point(53.32, 51.22, continents.KALIMDOR),
  },
  {
    name: 'Throne of the Four Winds',
    zone: 'Uldum',
    position: new Point(46.37, 95.94, continents.KALIMDOR),
  },
  {
    name: 'The Vortex Pinnacle',
    zone: 'Uldum',
    position: new Point(52.16, 96.64, continents.KALIMDOR),
  },
  {
    name: 'Ramkahen',
    zone: 'Uldum',
    position: new Point(48.92, 88.64, continents.KALIMDOR),
  },
  {
    name: 'Orgrimmar',
    zone: 'Durotar',
    position: new Point(58.5, 43.57, continents.KALIMDOR),
  },
  {
    name: 'Firelands',
    zone: 'Mount Hyjal',
    position: new Point(53.09, 35.23, continents.KALIMDOR),
  },
  {
    name: 'Molten Front',
    zone: 'Mount Hyjal',
    position: new Point(52.7, 31.52, continents.KALIMDOR),
  },
  {
    name: 'Ruth\'teran Village',
    zone: 'Teldrassil',
    position: new Point(43.35, 16.22, continents.KALIMDOR),
  },
  {
    name: 'Darnassus',
    zone: 'Teldrassil',
    position: new Point(40.42, 9.73, continents.KALIMDOR),
  },
  {
    name: 'The Exodar',
    zone: 'Azuremyst Isle',
    position: new Point(29.83, 24.8, continents.KALIMDOR),
  },
  {
    name: 'Nighthaven',
    zone: 'Moonglade',
    position: new Point(53.4, 17.61, continents.KALIMDOR),
  },
  {
    name: 'Booty Bay',
    zone: 'The Cape of Stranglethorn',
    position: new Point(43.28, 94.09, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Grom\'gol Base Camp',
    zone: 'Northern Stranglethorn',
    position: new Point(44.13, 86.79, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Zul\'gurub',
    zone: 'Northern Stranglethorn',
    position: new Point(48.07, 84.59, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'The Deadmines',
    zone: 'Westfall',
    position: new Point(40.8, 81.92, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Fire Plume Ridge',
    zone: 'Un\'goro Crater',
    position: new Point(50, 79.14, continents.KALIMDOR),
  },
  {
    name: 'Fizzle and Pozzik\'s Speedbarge',
    zone: 'Thousand Needles',
    position: new Point(56.96, 74.74, continents.KALIMDOR),
  },
  {
    name: 'Theramore Isle',
    zone: 'Dustwallow Marsh',
    position: new Point(58.58, 65.59, continents.KALIMDOR),
  },
  {
    name: 'Alcaz Island',
    zone: 'Dustwallow Marsh',
    position: new Point(59.89, 61.07, continents.KALIMDOR),
  },
  {
    name: 'Sun Rock Retreat',
    zone: 'Stonetalon Mountains',
    position: new Point(43.51, 44.73, continents.KALIMDOR),
  },
  {
    name: 'Stonetalon Peak',
    zone: 'Stonetalon Mountains',
    position: new Point(42.35, 39.98, continents.KALIMDOR),
  },
  {
    name: 'Blackfathom Deeps',
    zone: 'Ashenvale',
    position: new Point(43.82, 35.11, continents.KALIMDOR),
  },
  {
    name: 'Astranaar',
    zone: 'Ashenvale',
    position: new Point(47.37, 39.28, continents.KALIMDOR),
  },
  {
    name: 'Splintertree Post',
    zone: 'Ashenvale',
    position: new Point(52.4, 40.56, continents.KALIMDOR),
  },
  {
    name: 'Blood Watch',
    zone: 'Bloodmyst Isle',
    position: new Point(30.68, 17.5, continents.KALIMDOR),
  },
  {
    name: 'Razor Hill',
    zone: 'Durotar',
    position: new Point(58.96, 48.44, continents.KALIMDOR),
  },
  {
    name: 'Gallywix Pleasure Palace',
    zone: 'Azshara',
    position: new Point(59.2, 37.2, continents.KALIMDOR),
  },
  {
    name: 'Bilgewater Harbor',
    zone: 'Azshara',
    position: new Point(64.45, 36.04, continents.KALIMDOR),
  },
  {
    name: 'Everlook',
    zone: 'Winterspring',
    position: new Point(59.58, 23.17, continents.KALIMDOR),
  },
  {
    name: 'Frostsaber Rock',
    zone: 'Winterspring',
    position: new Point(56.8, 17.61, continents.KALIMDOR),
  },
  {
    name: 'Timbermaw Hold',
    zone: 'Felwood',
    position: new Point(51.24, 22.48, continents.KALIMDOR),
  },
  {
    name: 'Ruins of Auberdine',
    zone: 'Darkshore',
    position: new Point(45.29, 24.1, continents.KALIMDOR),
  },
  {
    name: 'Feathermoon Stronghold',
    zone: 'Feralas',
    position: new Point(40.34, 68.48, continents.KALIMDOR),
  },
  {
    name: 'The Dark Portal',
    zone: 'Blasted Lands',
    position: new Point(52.32, 84.47, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Nethergarde Keep',
    zone: 'Blasted Lands',
    position: new Point(52.78, 82.04, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Temple of Atal\'Hakkar',
    zone: 'Swamp of Sorrows',
    position: new Point(54.02, 79.37, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Stonard',
    zone: 'Swamp of Sorrows',
    position: new Point(52.63, 79.72, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Karazhan',
    zone: 'Deadwind Pass',
    position: new Point(49.54, 82.16, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Darkshire',
    zone: 'Duskwood',
    position: new Point(47.99, 80.07, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Goldshire',
    zone: 'Elwynn Forest',
    position: new Point(44.59, 75.43, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Stormwind',
    zone: 'Elwynn Forest',
    position: new Point(42.35, 71.96, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Lakeshire',
    zone: 'Redridge Mountains',
    position: new Point(49.69, 74.86, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'a',
    zone: 'b',
    position: new Point(0,0, continents.EASTERN_KINGDOMS),
  },
]

const sortedLocations = namedLocations.sort((a, b) => (a.name > b.name) ? -1 : 1)
                                      .sort((a, b) => (a.zone > b.zone) ? 1 : -1)
                                      .map((loc, i) => ({...loc, id: i + 1}))

export default sortedLocations