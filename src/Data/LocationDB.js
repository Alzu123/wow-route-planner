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
    name: 'Return to Karazhan',
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
    name: 'Blackrock Mountain',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Blackrock Caverns',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Blackrock Depths',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Upper Blackrock Spire',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Lower Blackrock Spire',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Blackwing Descent',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Blackwing Lair',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Molten Core',
    zone: 'Burning Steppes',
    position: new Point(46.68, 68.83, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Thorium Point',
    zone: 'Searing Gorge',
    position: new Point(47.6, 65.35, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Uldaman Side Entrance',
    zone: 'Badlands',
    position: new Point(54.17, 66.4, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Uldaman Main Entrance',
    zone: 'Badlands',
    position: new Point(52.7, 63.96, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Thelsamar',
    zone: 'Loch Modan',
    position: new Point(52.09, 60.72, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Ironforge',
    zone: 'Dun Morogh',
    position: new Point(45.44, 58.75, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Menethil Harbor',
    zone: 'Wetlands',
    position: new Point(46.37, 54.69, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Grim Batol',
    zone: 'Twilight Highlands',
    position: new Point(53.25, 55.04, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Dragonmaw Port',
    zone: 'Twilight Highlands',
    position: new Point(59.89, 55.5, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'The Bastion of Twilight',
    zone: 'Twilight Highlands',
    position: new Point(54.71, 59.68, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Kirthaven',
    zone: 'Twilight Highlands',
    position: new Point(57.96, 52.61, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Ar\'gorok',
    zone: 'Arathi Highlands',
    position: new Point(49.77, 44.26, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Hammerfall',
    zone: 'Arathi Highlands',
    position: new Point(53.79, 45.54, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Stromgarde Keep',
    zone: 'Arathi Highlands',
    position: new Point(49.61, 47.28, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Refuge Pointe',
    zone: 'Arathi Highlands',
    position: new Point(51.47, 45.89, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Tarren Mill',
    zone: 'Hillsbrad Foothills',
    position: new Point(46.99, 40.9, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Aerie Peak',
    zone: 'The Hinterlands',
    position: new Point(49.15, 39.75, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Revantusk Village',
    zone: 'The Hinterlands',
    position: new Point(55.64, 42.87, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'The Sepulcher',
    zone: 'Silverpine Forest',
    position: new Point(41.19, 39.98, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Shadowfang Keep',
    zone: 'Silverpine Forest',
    position: new Point(41.11, 41.48, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Undercity',
    zone: 'Tirisfal Glades',
    position: new Point(43.97, 34.88, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Scarlet Monastery',
    zone: 'Tirisfal Glades',
    position: new Point(46.68, 30.71, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Scholomance',
    zone: 'Western Plaguelands',
    position: new Point(50.93, 36.5, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Light\'s Hope Chapel',
    zone: 'Eastern Plaguelands',
    position: new Point(57.81, 32.68, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Stratholme Main Entrance',
    zone: 'Eastern Plaguelands',
    position: new Point(52.4, 28.85, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Stratholme Side Entrance',
    zone: 'Eastern Plaguelands',
    position: new Point(53.86, 29.2, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Zul\'Aman',
    zone: 'Ghostlands',
    position: new Point(58.04, 25.96, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Silvermoon City',
    zone: 'Evensong Woods',
    position: new Point(56.03, 14.02, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Sun\'s Reach',
    zone: 'Isle of Quel\'Danas',
    position: new Point(55.72, 2.9, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'The Dark Portal',
    zone: 'Hellfire Peninsula',
    position: new Point(68.3, 51.91, continents.OUTLAND),
  },
  {
    name: 'Throne of Kil\'Jaeden',
    zone: 'Hellfire Peninsula',
    position: new Point(61.51, 42.87, continents.OUTLAND),
  },
  {
    name: 'Hellfire Ramparts',
    zone: 'Hellfire Peninsula',
    position: new Point(56.49, 53.3, continents.OUTLAND),
  },
  {
    name: 'Blood Furnace',
    zone: 'Hellfire Peninsula',
    position: new Point(56.49, 53.3, continents.OUTLAND),
  },
  {
    name: 'Shattered Halls',
    zone: 'Hellfire Peninsula',
    position: new Point(56.49, 53.3, continents.OUTLAND),
  },
  {
    name: 'Magtheridon\'s Lair',
    zone: 'Hellfire Peninsula',
    position: new Point(56.49, 53.3, continents.OUTLAND),
  },
  {
    name: 'Hellfire Citadel',
    zone: 'Hellfire Peninsula',
    position: new Point(56.49, 53.3, continents.OUTLAND),
  },
  {
    name: 'The Slave Pens',
    zone: 'Zangarmarsh',
    position: new Point(34.56, 44.84, continents.OUTLAND),
  },
  {
    name: 'Coilfang Reservoir',
    zone: 'Zangarmarsh',
    position: new Point(34.56, 44.84, continents.OUTLAND),
  },
  {
    name: 'Underbog',
    zone: 'Zangarmarsh',
    position: new Point(34.56, 44.84, continents.OUTLAND),
  },
  {
    name: 'Steamvaults',
    zone: 'Zangarmarsh',
    position: new Point(34.56, 44.84, continents.OUTLAND),
  },
  {
    name: 'Serpentshrine Cavern',
    zone: 'Zangarmarsh',
    position: new Point(34.56, 44.84, continents.OUTLAND),
  },
  {
    name: 'Sporeggar',
    zone: 'Zangarmarsh',
    position: new Point(25.37, 47.74, continents.OUTLAND),
  },
  {
    name: 'Halaa',
    zone: 'Nagrand (Outland)',
    position: new Point(28.84, 63.62, continents.OUTLAND),
  },
  {
    name: 'Shattrath City',
    zone: 'Terokkar Forest',
    position: new Point(42.59, 65.12, continents.OUTLAND),
  },
  {
    name: 'Auchindoun',
    zone: 'Terokkar Forest',
    position: new Point(46.29, 78.33, continents.OUTLAND),
  },
  {
    name: 'Mana Tombs',
    zone: 'Terokkar Forest',
    position: new Point(46.29, 78.33, continents.OUTLAND),
  },
  {
    name: 'Shadow Labyrinth',
    zone: 'Terokkar Forest',
    position: new Point(46.29, 78.33, continents.OUTLAND),
  },
  {
    name: 'Auchenai Crypts',
    zone: 'Terokkar Forest',
    position: new Point(46.29, 78.33, continents.OUTLAND),
  },
  {
    name: 'Sethekk Halls',
    zone: 'Terokkar Forest',
    position: new Point(46.29, 78.33, continents.OUTLAND),
  },
  {
    name: 'Skettis',
    zone: 'Terokkar Forest',
    position: new Point(54.32, 82.85, continents.OUTLAND),
  },
  {
    name: 'Ogri\'la',
    zone: 'Blade\'s Edge Mountains',
    position: new Point(32.55, 31.29, continents.OUTLAND),
  },
  {
    name: 'Gruul\'s Lair',
    zone: 'Blade\'s Edge Mountains',
    position: new Point(44.05, 20.39, continents.OUTLAND),
  },
  {
    name: 'Area 52',
    zone: 'Netherstorm',
    position: new Point(53.78, 23.17, continents.OUTLAND),
  },
  {
    name: 'Tempest Keep',
    zone: 'Netherstorm',
    position: new Point(65.98, 24.45, continents.OUTLAND),
  },
  {
    name: 'The Eye',
    zone: 'Netherstorm',
    position: new Point(65.98, 24.45, continents.OUTLAND),
  },
  {
    name: 'The Arcatraz',
    zone: 'Netherstorm',
    position: new Point(65.98, 24.45, continents.OUTLAND),
  },
  {
    name: 'The Botanica',
    zone: 'Netherstorm',
    position: new Point(65.98, 24.45, continents.OUTLAND),
  },
  {
    name: 'The Mechanar',
    zone: 'Netherstorm',
    position: new Point(65.98, 24.45, continents.OUTLAND),
  },
  {
    name: 'Black Temple',
    zone: 'Shadowmoon Valley (Outland)',
    position: new Point(71.85, 80.42, continents.OUTLAND),
  },
  {
    name: 'Netherwing Ledge',
    zone: 'Shadowmoon Valley (Outland)',
    position: new Point(71.31, 93.05, continents.OUTLAND),
  },
  {
    name: 'The Nexus',
    zone: 'Borean Tundra',
    position: new Point(14.84, 57.94, continents.NORTHREND),
  },
  {
    name: 'The Oculus',
    zone: 'Borean Tundra',
    position: new Point(14.84, 57.94, continents.NORTHREND),
  },
  {
    name: 'The Eye of Eternity',
    zone: 'Borean Tundra',
    position: new Point(14.84, 57.94, continents.NORTHREND),
  },
  {
    name: 'Utgarde Keep',
    zone: 'Howling Fjord',
    position: new Point(78.54, 79.61, continents.NORTHREND),
  },
  {
    name: 'Utgarde Pinnacle',
    zone: 'Howling Fjord',
    position: new Point(78.54, 79.61, continents.NORTHREND),
  },
  {
    name: 'Wyrmrest Temple',
    zone: 'Dragonblight',
    position: new Point(50.34, 60.72, continents.NORTHREND),
  },
  {
    name: 'The Obsidian Sanctum',
    zone: 'Dragonblight',
    position: new Point(50.34, 60.72, continents.NORTHREND),
  },
  {
    name: 'The Ruby Sanctum',
    zone: 'Dragonblight',
    position: new Point(50.34, 60.72, continents.NORTHREND),
  },
  {
    name: 'Azjol-Nerub',
    zone: 'Dragonblight',
    position: new Point(40.37, 57.94, continents.NORTHREND),
  },
  {
    name: 'Ahn\'kahet: The Old Kingdom',
    zone: 'Dragonblight',
    position: new Point(40.37, 57.94, continents.NORTHREND),
  },
  {
    name: 'Naxxramas',
    zone: 'Dragonblight',
    position: new Point(58.22, 57.47, continents.NORTHREND),
  },
  {
    name: 'Drak\'Tharon Keep',
    zone: 'Grizzly Hills',
    position: new Point(63.32, 53.77, continents.NORTHREND),
  },
  {
    name: 'Rainspeaker Canopy',
    zone: 'Sholazar Basin',
    position: new Point(27.15, 43.57, continents.NORTHREND),
  },
  {
    name: 'Frenzyheart Hill',
    zone: 'Sholazar Basin',
    position: new Point(27.54, 46.7, continents.NORTHREND),
  },
  {
    name: 'Gundrak',
    zone: 'Zul\'Drak',
    position: new Point(75.61, 35.34, continents.NORTHREND),
  },
  {
    name: 'Dalaran (Old)',
    zone: 'Crystalsong Forest',
    position: new Point(48.64, 42.06, continents.NORTHREND),
  },
  {
    name: 'Violet Hold',
    zone: 'Crystalsong Forest',
    position: new Point(48.64, 42.06, continents.NORTHREND),
  },
  {
    name: 'The Forge of Souls',
    zone: 'Icecrown',
    position: new Point(39.13, 42.29, continents.NORTHREND),
  },
  {
    name: 'Pit of Saron',
    zone: 'Icecrown',
    position: new Point(39.13, 42.29, continents.NORTHREND),
  },
  {
    name: 'Halls of Reflection',
    zone: 'Icecrown',
    position: new Point(39.13, 42.29, continents.NORTHREND),
  },
  {
    name: 'Icecrown Citadel',
    zone: 'Icecrown',
    position: new Point(41.06, 41.37, continents.NORTHREND),
  },
  {
    name: 'Argent Tournament Grounds',
    zone: 'Icecrown',
    position: new Point(47.4, 20.63, continents.NORTHREND),
  },
  {
    name: 'Trial of the Champion',
    zone: 'Icecrown',
    position: new Point(47.4, 20.63, continents.NORTHREND),
  },
  {
    name: 'Trial of the Crusader',
    zone: 'Icecrown',
    position: new Point(47.4, 20.63, continents.NORTHREND),
  },
  {
    name: 'Ulduar',
    zone: 'The Storm Peaks',
    position: new Point(57.91, 13.67, continents.NORTHREND),
  },
  {
    name: 'Halls of Lightning',
    zone: 'The Storm Peaks',
    position: new Point(57.91, 13.67, continents.NORTHREND),
  },
  {
    name: 'Halls of Stone',
    zone: 'The Storm Peaks',
    position: new Point(57.91, 13.67, continents.NORTHREND),
  },
  {
    name: 'Vault of Archavon',
    zone: 'Wintergrasp',
    position: new Point(37.12, 46.23, continents.NORTHREND),
  },
  {
    name: 'The Stonecore',
    zone: 'Deepholm',
    position: new Point(46.24, 49.25, continents.DEEPHOLM),
  },
  {
    name: 'Throne of the Tides',
    zone: 'Vashj\'ir',
    position: new Point(30.32, 63.5, continents.EASTERN_KINGDOMS),
  },
  {
    name: 'Tol Barad',
    zone: 'Tol Barad Peninsula',
    position: new Point(66.8, 77.75, continents.TOL_BARAD_PENINSULA),
  },
  {
    name: 'Temple of the Jade Serpent',
    zone: 'The Jade Forest',
    position: new Point(72.13, 54.92, continents.PANDARIA),
  },
  {
    name: 'Lion\'s Landing',
    zone: 'Krasarang Wilds',
    position: new Point(63.32, 72.19, continents.PANDARIA),
  },
  {
    name: 'Domination Point',
    zone: 'Krasarang Wilds',
    position: new Point(40.83, 83.55, continents.PANDARIA),
  },
  {
    name: 'Halfhill',
    zone: 'Valley of the Four Winds',
    position: new Point(53.27, 65.35, continents.PANDARIA),
  },
  {
    name: 'Stormstout Brewery',
    zone: 'Valley of the Four Winds',
    position: new Point(48.17, 70.68, continents.PANDARIA),
  },
  {
    name: 'Galleon (World Boss)',
    zone: 'Valley of the Four Winds',
    position: new Point(57.83, 68.13, continents.PANDARIA),
  },
  {
    name: 'Shado-Pan Monastery',
    zone: 'Kun-Lai Summit',
    position: new Point(39.98, 30.01, continents.PANDARIA),
  },
  {
    name: 'Sha of Fear (World Boss)',
    zone: 'Kun-Lai Summit',
    position: new Point(47.09, 35.81, continents.PANDARIA),
  },
  {
    name: 'Shado-Pan Garrison',
    zone: 'Townlong Steppes',
    position: new Point(28.93, 46.93, continents.PANDARIA),
  },
  {
    name: 'Siege of Niuzao Temple',
    zone: 'Townlong Steppes',
    position: new Point(24.29, 51.33, continents.PANDARIA),
  },
  {
    name: 'Heart of Fear',
    zone: 'Dread Wastes',
    position: new Point(31.48, 63.5, continents.PANDARIA),
  },
  {
    name: 'Terrace of Endless Spring',
    zone: 'The Veiled Stair',
    position: new Point(57.68, 53.07, continents.PANDARIA),
  },
  {
    name: 'Tavern in the Mists',
    zone: 'The Veiled Stair',
    position: new Point(57.68, 53.07, continents.PANDARIA),
  },
  {
    name: 'The Celestial Court (World Boss)',
    zone: 'Timeless Isle',
    position: new Point(88.44, 70.73, continents.PANDARIA),
  },
  {
    name: 'Shrine of Two Moons',
    zone: 'Vale of Eternal Blossoms',
    position: new Point(53.35, 51.22, continents.PANDARIA),
  },
  {
    name: 'Shrine of Seven Stars',
    zone: 'Vale of Eternal Blossoms',
    position: new Point(55.36, 56.66, continents.PANDARIA),
  },
  {
    name: 'Siege of Orgrimmar',
    zone: 'Vale of Eternal Blossoms',
    position: new Point(54.66, 53.77, continents.PANDARIA),
  },
  {
    name: 'Throne of Thunder',
    zone: 'Isle of Thunder',
    position: new Point(22.75, 9.04, continents.PANDARIA),
  },
  {
    name: 'Nalak (World Boss)',
    zone: 'Isle of Thunder',
    position: new Point(22.75, 9.04, continents.PANDARIA),
  },
  {
    name: 'Oondasta (World Boss)',
    zone: 'Isle of Giants',
    position: new Point(49.18, 6.03, continents.PANDARIA),
  },
  {
    name: 'Warspear',
    zone: 'Ashran',
    position: new Point(71.74, 39.05, continents.DRAENOR),
  },
  {
    name: 'Stormshield',
    zone: 'Ashran',
    position: new Point(72.36, 47.05, continents.DRAENOR),
  },
  {
    name: 'Garrison (Horde)',
    zone: 'Frostfire Ridge',
    position: new Point(33.57, 36.73, continents.DRAENOR),
  },
  {
    name: 'Bloodmaul Slag Mines',
    zone: 'Frostfire Ridge',
    position: new Point(34.26, 25.84, continents.DRAENOR),
  },
  {
    name: 'Garrison (Alliance)',
    zone: 'Shadowmoon Valley (Draenor)',
    position: new Point(53.35, 64.54, continents.DRAENOR),
  },
  {
    name: 'Shadowmoon Burial Grounds',
    zone: 'Shadowmoon Valley (Draenor)',
    position: new Point(55.05, 73.35, continents.DRAENOR),
  },
  {
    name: 'Grimrail Depot',
    zone: 'Gorgrond',
    position: new Point(51.49, 22.25, continents.DRAENOR),
  },
  {
    name: 'Blackrock Foundry',
    zone: 'Gorgrond',
    position: new Point(49.87, 21.9, continents.DRAENOR),
  },
  {
    name: 'Iron Docks',
    zone: 'Gorgrond',
    position: new Point(47.79, 15.41, continents.DRAENOR),
  },
  {
    name: 'Auchindoun',
    zone: 'Talador',
    position: new Point(39.44, 64.54, continents.DRAENOR),
  },
  {
    name: 'Skyreach',
    zone: 'Spires of Arak',
    position: new Point(44.46, 73.58, continents.DRAENOR),
  },
  {
    name: 'Rukhmar (World Boss)',
    zone: 'Spires of Arak',
    position: new Point(44.46, 73.58, continents.DRAENOR),
  },
  {
    name: 'Everbloom',
    zone: 'Gorgrond',
    position: new Point(51.49, 32.79, continents.DRAENOR),
  },
  {
    name: 'Highmaul',
    zone: 'Nagrand (Draenor)',
    position: new Point(20.89, 50.41, continents.DRAENOR),
  },
  {
    name: 'Hellfire Citadel',
    zone: 'Tanaan Jungle',
    position: new Point(57.29, 46.81, continents.DRAENOR),
  },
  {
    name: 'Throne of Kil\'Jaeden',
    zone: 'Tanaan Jungle',
    position: new Point(59.07, 39.86, continents.DRAENOR),
  },
  {
    name: 'Eye of Azshara',
    zone: 'Azsuna',
    position: new Point(36.12, 57.47, continents.BROKEN_ISLES),
  },
  {
    name: 'Kosumoth the Hungering',
    zone: 'Eye of Azshara',
    position: new Point(45.31, 86.1, continents.BROKEN_ISLES),
  },
  {
    name: 'Vault of the Wardens',
    zone: 'Azsuna',
    position: new Point(33.49, 69.99, continents.BROKEN_ISLES),
  },
  {
    name: 'Neltharion\'s Lair',
    zone: 'Highmountain',
    position: new Point(48.33, 28.39, continents.BROKEN_ISLES),
  },
  {
    name: 'Halls of Valor',
    zone: 'Stormheim',
    position: new Point(63.63, 36.85, continents.BROKEN_ISLES),
  },
  {
    name: 'Trial of Valor',
    zone: 'Stormheim',
    position: new Point(63.63, 36.85, continents.BROKEN_ISLES),
  },
  {
    name: 'Maw of Souls',
    zone: 'Stormheim',
    position: new Point(59.61, 33.72, continents.BROKEN_ISLES),
  },
  {
    name: 'Black Rook Hold',
    zone: 'Val\'sharah',
    position: new Point(29.47, 36.96, continents.BROKEN_ISLES),
  },
  {
    name: 'Darkheart Thicket',
    zone: 'Val\'sharah',
    position: new Point(36.43, 30.36, continents.BROKEN_ISLES),
  },
  {
    name: 'Emerald Nightmare',
    zone: 'Val\'sharah',
    position: new Point(36.43, 30.36, continents.BROKEN_ISLES),
  },
  {
    name: 'Dreamgrove',
    zone: 'Val\'sharah',
    position: new Point(30.78, 25.14, continents.BROKEN_ISLES),
  },
  {
    name: 'Cathedral of Eternal Night',
    zone: 'Broken Shore',
    position: new Point(55.98, 61.76, continents.BROKEN_ISLES),
  },
  {
    name: 'Tomb of Sargeras',
    zone: 'Broken Shore',
    position: new Point(56.44, 63.96, continents.BROKEN_ISLES),
  },
  {
    name: 'The Nighthold',
    zone: 'Suramar',
    position: new Point(46.63, 46, continents.BROKEN_ISLES),
  },
  {
    name: 'The Arcway',
    zone: 'Suramar',
    position: new Point(46.63, 46, continents.BROKEN_ISLES),
  },
  {
    name: 'Court of Stars',
    zone: 'Suramar',
    position: new Point(50.03, 51.33, continents.BROKEN_ISLES),
  },
  {
    name: 'Violet Hold',
    zone: 'Dalaran (Broken Isles)',
    position: new Point(46.86, 64.89, continents.BROKEN_ISLES),
  },
  {
    name: 'Seat of Triumvirate',
    zone: 'Mac\'Aree',
    position: new Point(36.73, 25.03, continents.MACAREE),
  },
  {
    name: 'Krokul Hovel',
    zone: 'Krokuun',
    position: new Point(56.52, 67.67, continents.KROKUUN),
  },
  {
    name: 'Antorus, the Burning Throne',
    zone: 'Antoran Wastes',
    position: new Point(55.2, 63.5, continents.ANTORAN_WASTES),
  },
  {
    name: 'Dazar\'alor',
    zone: 'Zulzadar',
    position: new Point(58.22, 61.76, continents.ZANDALAR),
  },
  {
    name: 'Battle for Dazar\'alor',
    zone: 'Zulzadar',
    position: new Point(55.13, 54.69, continents.ZANDALAR),
  },
  {
    name: 'The MOTHERLODE!!',
    zone: 'Zulzadar',
    position: new Point(57.14, 71.73, continents.ZANDALAR),
  },
  {
    name: 'Atal\'Dazar',
    zone: 'Zulzadar',
    position: new Point(48.4, 59.21, continents.ZANDALAR),
  },
  {
    name: 'King\'s Rest',
    zone: 'Zulzadar',
    position: new Point(48.4, 59.21, continents.ZANDALAR),
  },
  {
    name: 'Uldir',
    zone: 'Nazmir',
    position: new Point(58.37, 36.38, continents.ZANDALAR),
  },
  {
    name: 'The Underrot',
    zone: 'Nazmir',
    position: new Point(58.37, 36.38, continents.ZANDALAR),
  },
  {
    name: 'Temple of Sethraliss',
    zone: 'Vol\'dun',
    position: new Point(40.29, 19.24, continents.ZANDALAR),
  },
  {
    name: 'Freehold',
    zone: 'Tiragarde Sound',
    position: new Point(65.71, 78.91, continents.KUL_TIRAS),
  },
  {
    name: 'Boralus',
    zone: 'Tiragarde Sound',
    position: new Point(61.31, 50.87, continents.KUL_TIRAS),
  },
  {
    name: 'Siege of Boralus (Alliance)',
    zone: 'Tiragarde Sound',
    position: new Point(61.31, 50.87, continents.KUL_TIRAS),
  },
  {
    name: 'Tol Dagor',
    zone: 'Tiragarde Sound',
    position: new Point(77.54, 61.65, continents.KUL_TIRAS),
  },
  {
    name: 'Waycrest Manor',
    zone: 'Drustvar',
    position: new Point(29.7, 55.27, continents.KUL_TIRAS),
  },
  {
    name: 'Shrine of the Storm',
    zone: 'Stormsong Valley',
    position: new Point(65.95, 15.53, continents.KUL_TIRAS),
  },
  {
    name: 'Crucible of Storms',
    zone: 'Stormsong Valley',
    position: new Point(67.34, 22.83, continents.KUL_TIRAS),
  },
  {
    name: 'Rustbolt',
    zone: 'Mechagon',
    position: new Point(19.96, 26.77, continents.KUL_TIRAS),
  },
  {
    name: 'Operation: Mechagon',
    zone: 'Mechagon',
    position: new Point(19.96, 26.77, continents.KUL_TIRAS),
  },
  {
    name: 'Siege of Boralus (Horde)',
    zone: 'Tiragarde Sound',
    position: new Point(69.19, 65.01, continents.KUL_TIRAS),
  },
  {
    name: 'Newhome',
    zone: 'Nazjatar',
    position: new Point(48.09, 62.11, continents.NAZJATAR),
  },
  {
    name: 'Mezzamere',
    zone: 'Nazjatar',
    position: new Point(38.98, 53.77, continents.NAZJATAR),
  },
  {
    name: 'The Eternal Palace',
    zone: 'Nazjatar',
    position: new Point(50.41, 11.82, continents.NAZJATAR),
  },
  {
    name: 'Ny\'alotha, the Waking City',
    zone: 'Uldum',
    position: new Point(49.02, 90.15, continents.KALIMDOR),
  },
  {
    name: 'Ny\'alotha, the Waking City',
    zone: 'Vale of Eternal Blossoms',
    position: new Point(50.8, 53.77, continents.PANDARIA),
  },
  {
    name: 'Oribos',
    zone: 'Oribos',
    position: new Point(46.7, 51.22, continents.SHADOWLANDS),
  },
  {
    name: 'The Necrotic Wake',
    zone: 'Bastion',
    position: new Point(69.58, 60.25, continents.SHADOWLANDS),
  },
  {
    name: 'Spires of Ascension',
    zone: 'Bastion',
    position: new Point(73.67, 53.07, continents.SHADOWLANDS),
  },
  {
    name: 'Plaguefall',
    zone: 'Maldraxxus',
    position: new Point(65.17, 27, continents.SHADOWLANDS),
  },
  {
    name: 'Theater of Pain',
    zone: 'Maldraxxus',
    position: new Point(63.94, 22.94, continents.SHADOWLANDS),
  },
  {
    name: 'Seat of the Primus',
    zone: 'Maldraxxus',
    position: new Point(62.86, 28.27, continents.SHADOWLANDS),
  },
  {
    name: 'Elysian Hold',
    zone: 'Bastion',
    position: new Point(74.83, 50.52, continents.SHADOWLANDS),
  },
  {
    name: 'Heart of the Forest',
    zone: 'Ardenweald',
    position: new Point(47.79, 81.81, continents.SHADOWLANDS),
  },
  {
    name: 'De Other Side',
    zone: 'Ardenweald',
    position: new Point(54.2, 84.24, continents.SHADOWLANDS),
  },
  {
    name: 'Mists of Tirna Scithe',
    zone: 'Ardenweald',
    position: new Point(44.39, 82.73, continents.SHADOWLANDS),
  },
  {
    name: 'Halls of Atonement',
    zone: 'Revendreth',
    position: new Point(30.4, 51.45, continents.SHADOWLANDS),
  },
  {
    name: 'Castle Nathria',
    zone: 'Revendreth',
    position: new Point(22.05, 51.22, continents.SHADOWLANDS),
  },
  {
    name: 'Sanguine Depths',
    zone: 'Revendreth',
    position: new Point(26.07, 48.44, continents.SHADOWLANDS),
  },
  {
    name: 'Sinfall',
    zone: 'Revendreth',
    position: new Point(20.43, 51.33, continents.SHADOWLANDS),
  },
  {
    name: 'Ve\'nari\'s Refuge',
    zone: 'The Maw',
    position: new Point(23.91, 10.89, continents.SHADOWLANDS),
  },
]

const sortedLocations = namedLocations.sort((a, b) => (a.name > b.name) ? -1 : 1)
                                      .sort((a, b) => (a.zone > b.zone) ? 1 : -1)
                                      .map((loc, i) => ({...loc, id: i + 1}))

export default sortedLocations