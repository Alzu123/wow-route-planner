import CsvToJson from './CsvToJson'

/*
----------------- HOW TO USE -----------------
I didn't manage to figure out an easy way to make nested json lists from .xlsx data. This is a dirty hack for it.

1. Copy the teleport data to a csv file.
  a. Make sure the data is as is hardcoded in CsvToJson
2. Open the data in a text editor
3. Paste here to csv variable
4. Run this function to generate the valid json to console.
5. Replace the teleport variable in TeleportDB with the paste
6. Remove the function from running
----------------- HOW TO USE -----------------

Figure out a way to do this better :)
*/

export const GenerateTeleportJson = () => {
  const csv = `;;Origin;;;;Destination;;;;;;;;;;;;
  ;;Coordinates;;;;Coordinates;;;;;;;;Restrictions;;;;
  Name;Note;x;y;Continent;Description;x;y;Continent;Description;From player;Type;Enabled;Cooldown;Faction;Class;Race;Profession;Verified
  Adept's Guide to Dimensional Rifting;Only active on Monday;0;0;;Adept's Guide to Dimensional Rifting;35.0;36.8;Broken Isles;Val'sharah;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Tuesday;0;0;;Adept's Guide to Dimensional Rifting;48.9;49.4;Broken Isles;Suramar;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Wednesday;0;0;;Adept's Guide to Dimensional Rifting;32.3;68.5;Broken Isles;Azsuna;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Thursday;0;0;;Adept's Guide to Dimensional Rifting;48.3;28.2;Broken Isles;Highmountain;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Friday;0;0;;Adept's Guide to Dimensional Rifting;61.4;36.4;Broken Isles;Stormheim;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Saturday;0;0;;Adept's Guide to Dimensional Rifting;55.4;61.9;Broken Isles;Broken Shore;TRUE;Item;TRUE;240;;;;;TRUE
  Adept's Guide to Dimensional Rifting;Only active on Sunday;0;0;;Adept's Guide to Dimensional Rifting;65.31;43.23;Argus;Antoran Wastes;TRUE;Item;TRUE;240;;;;;TRUE
  Admiral's Compass;;0;0;;Admiral's Compass;32.31;37.97;Draenor;Garrison Shipyard;TRUE;Item;TRUE;240;Horde;;;;TRUE
  Ancient Teleport: Dalaran;;0;0;;Ancient Teleport: Dalaran;46.5;38.1;Eastern Kingdoms;Dalaran Crater, Hillsbrad Foothills;TRUE;Spell;TRUE;1;;Mage;;;FALSE
  Argent Crusader's Tabard;;0;0;;Argent Crusader's Tabard;46.02;20.90;Northrend;Icecrown;TRUE;Item;TRUE;30;;;;;TRUE
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Atiesh, Greatstaff of the Guardian;49.55;82.13;Eastern Kingdoms;Karazhan;TRUE;Item;TRUE;1;;Druid, Mage, Priest, Warlock;;;FALSE
  Band of Kirin Tor;Many similar which share CD?;0;0;;Band of Kirin Tor;48.70;42.18;Northrend;Dalaran;TRUE;Item;TRUE;30;;;;;FALSE
  Baradin's Wardens Tabard;;0;0;;Baradin's Wardens Tabard;;;Tol Barad;Baradin Base Camp;TRUE;Item;TRUE;240;Alliance;;;;FALSE
  Bladespire Relic;https://www.wowhead.com/item=118662/bladespire-relic#comments;0;0;;Bladespire Relic;28.4;30.0;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;Horde;;;;FALSE
  Blessed Medallion of Karabor;;0;0;;Blessed Medallion of Karabor;71.07;80.58;Outland;Black Temple;TRUE;Item;TRUE;15;;;;;TRUE
  Boots of the Bay;;0;0;;Boots of the Bay;43.19;93.74;Eastern Kingdoms;Booty Bay;TRUE;Item;TRUE;1440;;;;;FALSE
  Boralus Portal Room;If old Silithus enabled;59.5;54.4;Kul Tiras;Boralus;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;44.6;59.1;Eastern Kingdoms;Ironforge;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;30.5;25.9;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Boralus Portal Room;Destination not on world maps;59.5;54.4;Kul Tiras;Boralus;;;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Captain's Signet of Command;;0;0;;Captain's Signet of Command;59.5;54.4;Kul Tiras;Boralus;TRUE;Item;TRUE;30;Alliance;;;;FALSE
  Cloak of Coordination;;0;0;;Cloak of Coordination;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;120;Horde;;;;TRUE
  Cloak of Coordination;;0;0;;Cloak of Coordination;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;120;Alliance;;;;FALSE
  Commander's Signet of Battle;;0;0;;Commander's Signet of Battle;58.29;72.23;Zandalar;Zulzadar Harbor;TRUE;Item;TRUE;30;;;;;TRUE
  Dalaran Hearthstone;;0;0;;Dalaran Hearthstone;46.33;64.42;Broken Isles;Dalaran;TRUE;Item;TRUE;20;;;;;TRUE
  Darkmoon Faerie Mystic Mage;Up for a week every month;43.1;71.3;Eastern Kingdoms;Stormwind;45.3;75.8;Eastern Kingdoms;Elwynn Forest;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Darkmoon Faerie Mystic Mage;Up for a week every month;58.3;42.66;Kalimdor;Orgrimmar;47.1;55.4;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;Horde;;;;FALSE
  Dazar'alor Portal Room;If old Silithus enabled;58.26;62.04;Zulzadar;Dazar'alor;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;45.60;54.12;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Dazar'alor Portal Room;Destination not on world maps;58.26;62.04;Zulzadar;Dazar'alor;;;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Horde;;;;FALSE
  Death Gate;;0;0;;Death Gate;;;;;TRUE;Spell;TRUE;1;;Death Knight;;;FALSE
  Dimensional Ripper - Area 52;;0;0;;Dimensional Ripper - Area 52;53.3;23.1;Outland;Area 52, Netherstorm;TRUE;Item;TRUE;240;;;;Goblin Engineering;FALSE
  Dimensional Ripper - Everlook;;0;0;;Dimensional Ripper - Everlook;57.8;22.9;Kalimdor;Everlook, Winterspring;TRUE;Item;TRUE;240;;;;Goblin Engineering;FALSE
  Direbrew's Remote;Inside the mountain;0;0;;Direbrew's Remote;46.87;67.81;Eastern Kingdoms;Blackrock Depths;TRUE;Item;TRUE;60;;;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;56.23;27.62;Kalimdor;Mount Hyjal;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;41.26;61.90;Kalimdor;Feralas;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;45.65;79.41;Eastern Kingdoms;Duskwood;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;54.37;19.34;Kalimdor;Moonglade;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;71.77;52.79;Northrend;Grizzly Hills;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;54.37;37.98;Eastern Kingdoms;Hinterlands;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;30.74;24.95;Broken Isles;Val'sharah;TRUE;Spell;TRUE;1;;Druid;;;TRUE
  Emblem of Margoss;Consumed on use;0;0;;Emblem of Margoss;46.33;64.42;Broken Isles;Margoss's Retreat, Dalaran;TRUE;Item;FALSE;;;;;;FALSE
  Empowered Ring of Kirin Tor;Shares CD with old rings;0;0;;Empowered Ring of Kirin Tor;46.33;64.42;Broken Isles;Dalaran;TRUE;Item;TRUE;30;;;;;TRUE
  Ever-Shifting Mirror;;44.5;21.2;Outland;Gruul's Lair, Blade's Edge Mountains;49.9;23.3;Draenor;Blackrock Foundry, Gorgrond;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;61.6;42.6;Outland;Throne of Kil'Jaeden, Hellfire Peninsula;59.6;39.4;Draenor;Throne of Kil'jaeden, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;66.4;52.2;Outland;Dark Portal, Hellfire Peninsula;62.3;47.5;Draenor;Dark Portal, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;57.6;51.4;Outland;Magtheridon's Lair, Hellfire Peninsula;56.8;47.1;Draenor;Hellfire Citadel, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;69.8;80.5;Outland;Warden's Cage, Shadowmoon Valley;60.8;70.0;Draenor;Path of Light, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;58.9;75.8;Outland;Legion Hold, Shadowmoon Valley;53.3;64.8;Draenor;Moonflower Valley, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;55.8;81.8;Outland;Skettis, Terokkar Forest;45.1;68.1;Draenor;Talador;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;47.5;72.1;Outland;Bone Wastes, Terokkar Forest;42.6;65.3;Draenor;Deathweb Hollow, Talador;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;42.6;65.3;Outland;Shattrath;40.4;54.1;Draenor;Shattrath, Talador;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;44.0;52.6;Outland;Zangarmarsh;46.4;47.1;Draenor;Path of Glory, Talador;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;26.8;69.3;Outland;Oshugun Spirit Fields, Nagrand;25.4;55.9;Draenor;Oshugun Spirit Woods, Nagrand;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;34.4;57.1;Outland;Throne of the Elements, Nagrand;30.1;46.4;Draenor;Throne of the Elements, Nagrand;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;38.6;59.7;Outland;Nagrand;36.5;48.4;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;42.5;34.4;Outland;Razor Ridge, Blade's Edge Mountains;48.9;37.4;Draenor;Razor Bloom, Gorgrond;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;38.9;32.9;Outland;Bloodmaul Ravine, Blade's Edge Mountains;30.3;34.7;Draenor;Burning Glacier, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;36.1;35.5;Outland;Bloodmaul Ravine, Blade's Edge Mountains;26.8;31.7;Draenor;Gormaul Tower, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;FALSE
  Ever-Shifting Mirror;;33.8;48.2;Outland;Twinspire Ruins, Zangarmarsh;33.5;43.9;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;FALSE
  Fracture Necrolyte Skull;;0;0;;Fracture Necrolyte Skull;71.07;80.58;Outland;Black Temple;TRUE;Item;TRUE;60;;;;;FALSE
  Garrison Hearthstone;;0;0;;Garrison Hearthstone;33.54;36.89;Draenor;Frostwall;TRUE;Item;TRUE;15;Horde;;;;TRUE
  Garrison Hearthstone;;0;0;;Garrison Hearthstone;53.9;63.3;Draenor;;TRUE;Item;TRUE;15;Alliance;;;;FALSE
  Grim Campfire;;57.0;29.1;Draenor;Gorgrond;91.5;76.9;Pandaria;Timeless Isle;FALSE;Portal;TRUE;;;;;;FALSE
  Grim Campfire;;91.5;76.9;Pandaria;Timeless Isle;57.0;29.1;Draenor;Gorgrond;FALSE;Portal;TRUE;;;;;;FALSE
  Hearthstone;;0;0;;Hearthstone;47.90;82.44;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;;TRUE
  Hellscream's Reach Tabard;;0;0;;Hellscream's Reach Tabard;;;Tol Barad;Hellscream's Grasp;TRUE;Item;TRUE;240;Horde;;;;FALSE
  Jaina's Locket;Multiple people can use;0;0;;Jaina's Locket;48.70;42.18;Northrend;Dalaran;TRUE;Item;TRUE;60;;;;;TRUE
  Kyrian travel network;;77.0;53.5;Shadowlands;Bastion;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;;TRUE
  Mole Machine;;0;0;;Mole Machine;44.6;59.1;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;52.8;81.8;Eastern Kingdoms;Nethergarde Keep, Blasted Lands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;49.9;39.6;Eastern Kingdoms;Aerie Peak, The Hinterlands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;47.4;68.5;Eastern Kingdoms;The Masonary, Black Rock Mountains;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;;;Eastern Kingdoms;Shadowforge City, Shadowforge City;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;50.4;80.1;Kalimdor;Fire Plume Ridge, Un'Goro Crater;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;54.4;34.2;Kalimdor;Throne of Flame, Mount Hyjal;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;49.5;50.3;Kalimdor;The Great Divide, Southern Barrens;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;59.3;55.9;Outland;Honor Hold, Hellfire Peninsula;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;66.3;78.4;Outland;Fel Pits, Shadowmoon Valley;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;46.3;18.2;Outland;Skald, Blade's Edge Mountains;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;43.9;19.3;Northrend;Argent Tournament Grounds, Icecrown;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;45.6;58.0;Northrend;Ruby Dragonshrine, Dragonblight;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;49.5;35.7;Pandaria;One Keg, Kun-Lai Summit;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;46.6;70.6;Pandaria;Stormstout Brewery, Valley of the Four Winds;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;47.4;29.5;Draenor;Blackrock Foundry Overlook, Gorgrond;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;29.6;43.9;Draenor;Elemental Plateau, Nagrand;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;46.5;29.5;Broken Isles;Neltharion's Vault, Highmountain;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Mole Machine;;0;0;;Mole Machine;57.9;66.6;Broken Isles;The Broken Shore;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;FALSE
  Necrolord travel network;;62.7;27.6;Shadowlands;Maldraxxus;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;;TRUE
  Night Fae travel network;;47.92;81.53;Shadowlands;Ardenweald;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;;TRUE
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.28;41.82;Kalimdor;Orgrimmar;;;Deepholm;Deepholm;FALSE;Portal;TRUE;;Horde;;;;FALSE
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;60.11;56.02;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;29.53;65.34;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.28;41.82;Kalimdor;Orgrimmar;;;Tol Barad;Tol Barad;FALSE;Portal;TRUE;;Horde;;;;FALSE
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.91;35.56;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;58.26;62.04;Zandalar;Dazar'alor;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;43.25;66.34;Outland;Shattrath;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;Bugs for some characters;58.60;44.28;Kalimdor;Orgrimmar;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;71.64;39.04;Draenor;Warspear;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Horde;;;;TRUE
  Orgrimmar Zeppelin;;44.07;87.02;Eastern Kingdoms;Stranglethorn Vale;58.3;42.66;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;TRUE
  Orgrimmar Zeppelin;Old world on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.45;34.63;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;TRUE
  Orgrimmar Zeppelin;;58.3;42.66;Kalimdor;Orgrimmar;44.07;87.02;Eastern Kingdoms;Stranglethorn Vale;FALSE;World;TRUE;;;;;;TRUE
  Orgrimmar Zeppelin;;57.99;43.03;Kalimdor;Orgrimmar;18.98;65.73;Northrend;Borean Tundra;FALSE;World;TRUE;;;;;;TRUE
  Orgrimmar Zeppelin;Slower than flying;57.99;43.03;Kalimdor;Orgrimmar;45.60;54.12;Kalimdor;Thunder Bluff;FALSE;World;TRUE;;;;;;FALSE
  Orgrimmar Zeppelin;Current time on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.87;33.99;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;FALSE
  Orgrimmar Zeppelin;;45.60;54.12;Kalimdor;Thunder Bluff;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;FALSE
  Orgrimmar Zeppelin;;18.98;65.73;Northrend;Borean Tundra;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;TRUE
  Path of the Black Ox;;0;0;;Path of the Black Ox;25.9;48.6;Pandaria;Siege of Niuzao;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Bloodmaul;;0;0;;Path of the Bloodmaul;30.8;27.0;Draenor;Bloodmaul Slag Mines;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Burning Mountain;;0;0;;Path of the Burning Mountain;47.5;68.3;Eastern Kingdoms;Upper Blackrock Spire;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Crescent Moon;;0;0;;Path of the Crescent Moon;55.1;73.2;Draenor;Shadowmoon Burial Grounds;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Dark Rail;;0;0;;Path of the Dark Rail;52.0;25.0;Draenor;Grimrail Depot;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Iron Prow;;0;0;;Path of the Iron Prow;48.9;17.5;Draenor;Iron Docks;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Jade Serpent;;0;0;;Path of the Jade Serpent;72.08;55.4;Pandaria;Temple of Jade Serpent;TRUE;Spell;TRUE;480;;;;;TRUE
  Path of the Mogu King;;0;0;;Path of the Mogu King;56.5;53.3;Pandaria;Mogu'shan Palace;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Necromancer;;0;0;;Path of the Necromancer;50.7;36.2;Eastern Kingdoms;Scholomance;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Scarlet Blade;;0;0;;Path of the Scarlet Blade;46.6;30.8;Eastern Kingdoms;Scarlet Halls;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Scarlet Mitre;;0;0;;Path of the Scarlet Mitre;46.6;30.8;Eastern Kingdoms;Scarlet Monastery;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Setting Sun;;0;0;;Path of the Setting Sun;42.8;57.4;Pandaria;Gate of the Setting Sun;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Shado-Pan;;0;0;;Path of the Shado-Pan;41.1;30.2;Pandaria;Shado-Pan Monastery;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Skies;;0;0;;Path of the Skies;44.8;72.8;Draenor;Skyreach;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Stout Brew;;0;0;;Path of the Stout Brew;48.15;70.68;Pandaria;Stormstout Brewery;TRUE;Spell;TRUE;480;;;;;TRUE
  Path of the Verdant;;0;0;;Path of the Verdant;51.4;33.0;Draenor;The Everbloom;TRUE;Spell;TRUE;480;;;;;FALSE
  Path of the Vigilant;;0;0;;Path of the Vigilant;39.3;61.9;Draenor;Auchindoun;TRUE;Spell;TRUE;480;;;;;FALSE
  Pit Fighter's Punching Ring;;0;0;;Pit Fighter's Punching Ring;57.99;43.03;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;FALSE
  Pit Fighter's Punching Ring;;0;0;;Pit Fighter's Punching Ring;43.1;71.3;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;FALSE
  Potion of Deepholm;;0;0;;Potion of Deepholm;;;Deepholm;Deepholm;TRUE;Item;TRUE;1;;;;;FALSE
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Reaves;34.4;57.1;Broken Isles;Azsuna;TRUE;Item;TRUE;1.5;;;;Engineering;FALSE
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Reaves;35.3;34.2;Broken Isles;Val'sharah;TRUE;Item;TRUE;1.5;;;;Engineering;FALSE
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Reaves;46.6;22.2;Broken Isles;Highmountain;TRUE;Item;TRUE;1.5;;;;Engineering;FALSE
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Reaves;59.3;35.3;Broken Isles;Stormheim;TRUE;Item;TRUE;1.5;;;;Engineering;FALSE
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Reaves;47.4;46.7;Broken Isles;Suramar;TRUE;Item;TRUE;1.5;;;;Engineering;FALSE
  Relic of Karabor;;0;0;;Relic of Karabor;71.1;46.6;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;Alliance;;;;FALSE
  Shroud of Cooperation;;0;0;;Shroud of Cooperation;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;480;Horde;;;;FALSE
  Shroud of Cooperation;;0;0;;Shroud of Cooperation;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;480;Alliance;;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;32.5;51.4;Broken Isles;Azsuna;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;46.6;25.4;Broken Isles;Highmountain;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;61.1;31.5;Broken Isles;Stormheim;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;34.5;34.9;Broken Isles;Val'sharah;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;44.5;45.6;Broken Isles;Suramar;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;53.9;68.5;Broken Isles;Broken Shore;FALSE;Portal;TRUE;;;Warrior;;;FALSE
  Stormwind Cataclysm Portals;Destination not on world maps;43.1;71.3;Eastern Kingdoms;Stormwind;;;Deepholm;Deepholm;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;55.6;52.7;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;34.4;61.8;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Cataclysm Portals;Destination not on world maps;43.1;71.3;Eastern Kingdoms;Stormwind;;;Tol Barad;Tol Barad;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;68.6;64.6;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.5;54.4;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;43.25;66.34;Outland;Shattrath;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;73.3;46.9;Draenor;Stormshield;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;Unreachable by flying;58.60;44.28;Kalimdor;Orgrimmar;30.5;25.9;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  Teleport: Boralus;;0;0;;Teleport: Boralus;59.5;54.4;Kul Tiras;Boralus;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Dalaran - Broken Isles;;0;0;;Teleport: Dalaran - Broken Isles;46.33;64.42;Broken Isles;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;TRUE
  Teleport: Dalaran - Northrend;;0;0;;Teleport: Dalaran - Northrend;48.70;42.18;Northrend;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;FALSE
  Teleport: Darnassus;;0;0;;Teleport: Darnassus;40.5;9.6;Kalimdor;Darnassus;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Dazar'alor;;0;0;;Teleport: Dazar'alor;58.26;62.04;Zandalar;Dazar'alor;TRUE;Spell;TRUE;1;Horde;Mage;;;TRUE
  Teleport: Exodar;;0;0;;Teleport: Exodar;30.5;25.9;Kalimdor;Exodar;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Ironforge;;0;0;;Teleport: Ironforge;44.6;59.1;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Orgrimmar;;0;0;;Teleport: Orgrimmar;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Spell;TRUE;1;Horde;Mage;;;TRUE
  Teleport: Oribos;;0;0;;Teleport: Oribos;45.61;50.70;Shadowlands;Oribos;TRUE;Spell;TRUE;1;;Mage;;;FALSE
  Teleport: Shattrath;;0;0;;Teleport: Shattrath;43.25;66.34;Outland;Shattrath;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Shattrath;;0;0;;Teleport: Shattrath;43.25;66.34;Outland;Shattrath;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Silvermoon;;0;0;;Teleport: Silvermoon;56.16;13.18;Eastern Kingdoms;Silvermoon City;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Stonard;;0;0;;Teleport: Stonard;53.1;80.1;Eastern Kingdoms;Stonard;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Stormshield;;0;0;;Teleport: Stormshield;73.3;46.9;Draenor;Stormshield;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Stormwind;;0;0;;Teleport: Stormwind;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Theramore;;0;0;;Teleport: Theramore;58.6;65.5;Kalimdor;Theramore;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Thunder Bluff;;0;0;;Teleport: Thunder Bluff;45.60;54.12;Kalimdor;Thunder Bluff;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Tol Barad;;0;0;;Teleport: Tol Barad;;;Tol Barad;Tol Barad;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Tol Barad;;0;0;;Teleport: Tol Barad;;;Tol Barad;Tol Barad;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Undercity;Old world on arrival;0;0;;Teleport: Undercity;44.45;34.63;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Undercity;Current time on arrival;0;0;;Teleport: Undercity;44.87;33.99;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Vale of Eternal Blossoms;;0;0;;Teleport: Vale of Eternal Blossoms;53.0;49.9;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Horde;Mage;;;FALSE
  Teleport: Vale of Eternal Blossoms;;0;0;;Teleport: Vale of Eternal Blossoms;55.0;57.4;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Alliance;Mage;;;FALSE
  Teleport: Warspear;;0;0;;Teleport: Warspear;71.64;39.04;Draenor;Warspear;TRUE;Spell;TRUE;1;Horde;Mage;;;TRUE
  The Brassiest Knuckle;;0;0;;The Brassiest Knuckle;57.99;43.03;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;FALSE
  The Brassiest Knuckle;;0;0;;The Brassiest Knuckle;43.1;71.3;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;FALSE
  Time-Lost Artifact;;0;0;;Time-Lost Artifact;88.02;70.87;Pandaria;Timeless Isle;TRUE;Item;TRUE;1;;;;;TRUE
  Ultrasafe Transporter: Gadgetzan;;0;0;;Ultrasafe Transporter: Gadgetzan;56.8;78.6;Kalimdor;Gadgetzan, Tanaris;TRUE;Item;TRUE;240;;;;Gnomish Engineering;FALSE
  Ultrasafe Transporter: Mechagon;;0;0;;Ultrasafe Transporter: Mechagon;18.6;26.5;Kul Tiras;Mechagon;TRUE;Item;TRUE;1;;;;;FALSE
  Ultrasafe Transporter: Toshley's Station;;0;0;;Ultrasafe Transporter: Toshley's Station;43.8;32.5;Outland;Toshley's Station, Blade's Edge Mountains;TRUE;Item;TRUE;240;;;;Gnomish Engineering;FALSE
  Venthyr travel network;;21.0;50.5;Shadowlands;Revendreth;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;;TRUE
  Violet Seal of the Grand Magus;;0;0;;Violet Seal of the Grand Magus;49.55;82.13;Eastern Kingdoms;Karazhan;TRUE;Item;TRUE;240;;;;;TRUE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;47.4;76.4;Draenor;Spires of Arak;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;44.0;58.0;Draenor;Talador;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;58.1;70.4;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;27.8;52.4;Draenor;Nagrand;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;49.8;30.6;Draenor;Gorgrond;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Wormhole Centrifuge;33.5;29.9;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Northrend;;0;0;;Wormhole Generator: Northrend;22.4;63.3;Northrend;Borean Tundra;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Northrend;;0;0;;Wormhole Generator: Northrend;78.5;77.3;Northrend;Howling Fjord;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Northrend;;0;0;;Wormhole Generator: Northrend;26.9;40.7;Northrend;Sholazar Basin;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Northrend;;0;0;;Wormhole Generator: Northrend;41.9;23.9;Northrend;Icecrown;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Northrend;;0;0;;Wormhole Generator: Northrend;58.0;16.2;Northrend;Storm Peaks;TRUE;Item;TRUE;240;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;45.61;50.70;Shadowlands;Oribos;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;74.0;67.6;Shadowlands;Bastion;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;60.5;19.3;Shadowlands;Maldraxxus;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;51.0;82.0;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;20.9;58.0;Shadowlands;Revendreth;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Wormhole Generator: Shadowlands;20.9;7.3;Shadowlands;The Maw;TRUE;Item;TRUE;15;;;;Engineering;FALSE
  Wrap of Unity;;0;0;;Wrap of Unity;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;240;Horde;;;;FALSE
  Wrap of Unity;;0;0;;Wrap of Unity;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;240;Alliance;;;;FALSE
  Zen Pilgrimage;;0;0;;Zen Pilgrimage;48.3;28.4;Pandaria;Kun-lai Summit;TRUE;Spell;TRUE;1;;Monk;;;FALSE
  Dalaran to Orgrimmar;;46.33;64.42;Broken Isles;Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;;;;;TRUE
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;46.33;64.42;Broken Isles;Dalaran;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;;;;;FALSE
  Paladin Class Hall;;46.33;64.42;Broken Isles;Dalaran;58.3;33.4;Eastern Kingdoms;Light's Hope Chapel, Eastern Plaguelands;FALSE;Portal;TRUE;;;Paladin;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;46.33;64.42;Broken Isles;Dalaran;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;46.33;64.42;Broken Isles;Dalaran;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;;;;;FALSE
  Booty Bay to Ratchet boat;;43.19;93.74;Eastern Kingdoms;Booty Bay;56.83;54.26;Kalimdor;Ratchet;FALSE;World;TRUE;;;;;;TRUE
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;FALSE;Portal;TRUE;;;;;;TRUE
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;84.59;72.89;Northrend;Howling Fjord;FALSE;Portal;TRUE;;;;;;TRUE
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;;;;;TRUE
  Stormwind to Teldrassil boat;;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;43.8;14.7;Kalimdor;Teldrassil;FALSE;World;TRUE;;;;;;FALSE
  Stormwind to Borean Tundra boat;;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;78.9;78.6;Northrend;Valiance Keep, Borean Tundra;FALSE;World;TRUE;;;;;;FALSE
  Horde Gnomeregan portal;Inside instance. Can't get out?;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;TRUE
  Uncercity to Dark Portal;Old world only;44.45;34.63;Eastern Kingdoms;Undercity;69.06;51.94;Outland;Dark Portal;FALSE;Portal;TRUE;;;;;;TRUE
  ;Old world only?;46.9;53.7;Eastern Kingdoms;Wetlands;58.6;65.5;Kalimdor;Dustwallow Marsh;FALSE;World;TRUE;;;;;;FALSE
  ;Old world only?;43.8;14.7;Kalimdor;Teldrassil;30.5;25.9;Kalimdor;Exodar;FALSE;World;TRUE;;;;;;FALSE
  ;Old world only?;58.6;65.5;Kalimdor;Dustwallow Marsh;46.9;53.7;Eastern Kingdoms;Wetlands;FALSE;World;FALSE;;;;;;FALSE
  ;;59.91;35.56;Pandaria;Jade Forest;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;43.25;66.34;Outland;Shattrath;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;59.33;83.45;Kalimdor;Caverns of Time;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;69.13;52.13;Outlands;Dark Portal;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;48.70;42.18;Northrend;Old Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;71.64;39.04;Draenor;Warspear;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;56.16;13.18;Eastern Kingdoms;Silvermoon City;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;45.61;50.70;Shadowlands;Oribos;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;56.23;27.62;Kalimdor;Mount Hyjal;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;60.11;56.02;Eastern Kingdoms;Twilight Highlands;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;TRUE
  ;;56.23;27.62;Kalimdor;Mount Hyjal;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  ;;55.6;52.7;Eastern Kingdoms;Twilight Highlands;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;FALSE
  ;;56.83;54.26;Kalimdor;Ratchet;43.19;93.74;Eastern Kingdoms;Booty Bay;FALSE;World;TRUE;;;;;;TRUE
  ;;43.8;14.7;Kalimdor;Teldrassil;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;FALSE;World;TRUE;;;;;;FALSE
  ;Old world only?;30.5;25.9;Kalimdor;Exodar;43.8;14.7;Kalimdor;Teldrassil;FALSE;World;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;59.5;54.4;Kul Tiras;Boralus;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;59.5;54.4;Kul Tiras;Boralus;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;59.5;54.4;Kul Tiras;Boralus;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;;;;;FALSE
  ;;59.5;54.4;Kul Tiras;Boralus;33.8;21.6;Zandalar;Vol'dun;FALSE;Portal;TRUE;;;;;;FALSE
  ;;59.5;54.4;Kul Tiras;Boralus;63.6;25.7;Zandalar;Nazmir;FALSE;Portal;TRUE;;;;;;FALSE
  ;;59.5;54.4;Kul Tiras;Boralus;44.0;77.5;Zandalar;Zuldazar;FALSE;Portal;TRUE;;;;;;FALSE
  ;;78.9;78.6;Northrend;Valiance Keep, Borean Tundra;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;FALSE;World;TRUE;;;;;;FALSE
  ;Related to quest https://www.wowhead.com/quest=12561/an-issue-of-trust#. Investigate;25.8;49.4;Northrend;Sholazar Basin;51.5;75.6;Kalimdor;Shaper's Terrace, Un'goro Crater;FALSE;Portal;TRUE;;;;;;FALSE
  ;Unreachable by flying;42.5;65.3;Outland;Shattrath;55.67;2.85;Eastern Kingdoms;Isle of Quel'Danas;FALSE;Portal;TRUE;;;;;;TRUE
  ;;42.5;65.3;Outland;Shattrath;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;;;;;FALSE
  ;Seems off, verify;42.5;65.3;Outland;Shattrath;53.6;85.2;Eastern Kingdoms;Dark Portal, Blasted Lands;FALSE;Portal;TRUE;;;;;;FALSE
  ;;18.5;13.2;Pandaria;Isle of Thunder;30.1;46.2;Pandaria;Townlong Steppes;FALSE;Portal;TRUE;;;;;;FALSE
  ;Not reachable by flying;30.1;46.2;Pandaria;Townlong Steppes;18.5;13.2;Pandaria;Isle of Thunder;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;58.26;62.04;Zandalar;Dazar'alor;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;58.26;62.04;Zandalar;Dazar'alor;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;FALSE
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;58.26;62.04;Zandalar;Dazar'alor;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;;;;;FALSE
  ;Up for a week every 3 weeks;58.29;72.23;Zandalar;Zulzadar Harbor;;;Kalimdor;Darkshore;FALSE;Portal;FALSE;;;;;;FALSE
  ;Up for a week every 3 weeks;58.29;72.23;Zandalar;Zulzadar Harbor;;;Eastern Kingdoms;Arathi Highlands;FALSE;Portal;FALSE;;;;;;FALSE
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;25.8;66.6;Kul Tiras;Drustvar;FALSE;Portal;TRUE;;Horde;;;;FALSE
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;56.9;12.4;Kul Tiras;Stormsong Valley;FALSE;Portal;TRUE;;Horde;;;;FALSE
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;69.9;68.3;Kul Tiras;Tiragarde Sound;FALSE;Portal;TRUE;;Horde;;;;FALSE
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;20.4;25.0;Kul Tiras;Mechagon;FALSE;Portal;TRUE;;;;;;FALSE
  Shattrath to Stormwind;;43.25;66.34;Outland;Shattrath;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;FALSE`

  console.log(CsvToJson(csv, ';'))
}

export default GenerateTeleportJson