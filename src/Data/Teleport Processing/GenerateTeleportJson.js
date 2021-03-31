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
  const csv = `;;Origin;;;;Destination;;;;;;;;;;;;;;;;
  ;;Coordinates;;;;Coordinates;;;;;;;;Restrictions;;;;;;;;
  Name;Note;x;y;Continent;Description;x;y;Continent;Description;From player;Type;Enabled;Cooldown;Faction;Class;Race;Covenant;Profession;Verified;Number of loading sreens;Cast;Travel time
  Adept's Guide to Dimensional Rifting;Only active on Monday;0;0;;Player;35.0;36.8;Broken Isles;Val'sharah;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Tuesday;0;0;;Player;48.9;49.4;Broken Isles;Suramar;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Wednesday;0;0;;Player;32.3;68.5;Broken Isles;Azsuna;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Thursday;0;0;;Player;48.3;28.2;Broken Isles;Highmountain;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Friday;0;0;;Player;61.4;36.4;Broken Isles;Stormheim;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Saturday;0;0;;Player;55.4;61.9;Broken Isles;Broken Shore;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Adept's Guide to Dimensional Rifting;Only active on Sunday;0;0;;Player;65.31;43.23;Argus;Antoran Wastes;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Admiral's Compass;;0;0;;Player;32.31;37.97;Draenor;Garrison Shipyard;TRUE;Item;TRUE;240;Horde;;;;;TRUE;1;;
  Ancient Teleport: Dalaran;;0;0;;Player;46.5;38.1;Eastern Kingdoms;Dalaran Crater, Hillsbrad Foothills;TRUE;Spell;TRUE;1;;Mage;;;;FALSE;1;10;
  Argent Crusader's Tabard;;0;0;;Player;46.02;20.90;Northrend;Icecrown;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;TRUE;1;;Druid;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;TRUE;1;;Mage;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;TRUE;1;;Priest;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;TRUE;1;;Warlock;;;;FALSE;1;;
  Band of Kirin Tor;Many similar which share CD?;0;0;;Player;48.70;42.18;Northrend;Dalaran;TRUE;Item;TRUE;30;;;;;;FALSE;1;;
  Baradin's Wardens Tabard;;0;0;;Player;;;Tol Barad;Baradin Base Camp;TRUE;Item;TRUE;240;Alliance;;;;;FALSE;1;;
  Bladespire Relic;https://www.wowhead.com/item=118662/bladespire-relic#comments;0;0;;Player;28.4;30.0;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;Horde;;;;;FALSE;1;;
  Blessed Medallion of Karabor;;0;0;;Player;71.07;80.58;Outland;Black Temple;TRUE;Item;TRUE;15;;;;;;TRUE;1;;
  Boots of the Bay;;0;0;;Player;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;TRUE;Item;TRUE;1440;;;;;;FALSE;1;;
  Boralus Portal Room;If old Silithus enabled;59.5;54.4;Kul Tiras;Boralus;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;44.6;59.1;Eastern Kingdoms;Ironforge;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Boralus Portal Room;;59.5;54.4;Kul Tiras;Boralus;30.5;25.9;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Boralus Portal Room;Destination not on world maps;59.5;54.4;Kul Tiras;Boralus;;;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Captain's Signet of Command;;0;0;;Player;59.5;54.4;Kul Tiras;Boralus;TRUE;Item;TRUE;30;Alliance;;;;;FALSE;1;;
  Cloak of Coordination;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;120;Horde;;;;;TRUE;1;10;
  Cloak of Coordination;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;120;Alliance;;;;;FALSE;1;10;
  Commander's Signet of Battle;;0;0;;Player;58.29;72.23;Zandalar;Zulzadar Harbor;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Dalaran Hearthstone;;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Item;TRUE;20;;;;;;TRUE;1;5;
  Darkmoon Faerie Mystic Mage;Up for a week every month;43.1;71.3;Eastern Kingdoms;Stormwind;45.3;75.8;Eastern Kingdoms;Darkmoon Staging Ground, Elwynn Forest;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Darkmoon Faerie Mystic Mage;Up for a week every month;58.3;42.66;Kalimdor;Orgrimmar;47.1;55.4;Kalimdor;Darkmoon Staging Ground, Thunder Bluff;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Dazar'alor Portal Room;If old Silithus enabled;58.26;62.04;Zulzadar;Dazar'alor;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;45.60;54.12;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zulzadar;Dazar'alor;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;Destination not on world maps;58.26;62.04;Zulzadar;Dazar'alor;;;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Death Gate;;0;0;;Player;;;;;TRUE;Spell;TRUE;1;;Death Knight;;;;FALSE;;;
  Dimensional Ripper - Area 52;;0;0;;Player;53.3;23.1;Outland;Area 52, Netherstorm;TRUE;Item;TRUE;240;;;;;Goblin Engineering;FALSE;1;;
  Dimensional Ripper - Everlook;;0;0;;Player;57.8;22.9;Kalimdor;Everlook, Winterspring;TRUE;Item;TRUE;240;;;;;Goblin Engineering;FALSE;1;;
  Direbrew's Remote;Inside the mountain;0;0;;Player;46.87;67.81;Eastern Kingdoms;Blackrock Depths;TRUE;Item;TRUE;60;;;;;;TRUE;1;;60
  Dreamwalk;;0;0;;Player;56.23;27.62;Kalimdor;Mount Hyjal;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;41.26;61.90;Kalimdor;Feralas;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;45.65;79.41;Eastern Kingdoms;Duskwood;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;54.37;19.34;Kalimdor;Moonglade;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;71.77;52.79;Northrend;Grizzly Hills;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;54.37;37.98;Eastern Kingdoms;Hinterlands;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;30.74;24.95;Broken Isles;Val'sharah;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Emblem of Margoss;Consumed on use;0;0;;Player;46.33;64.42;Broken Isles;Margoss's Retreat, Dalaran;TRUE;Item;TRUE;;;;;;;FALSE;1;;
  Empowered Ring of Kirin Tor;Shares CD with old rings;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;44.5;21.2;Outland;Gruul's Lair, Blade's Edge Mountains;49.9;23.3;Draenor;Blackrock Foundry, Gorgrond;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;61.6;42.6;Outland;Throne of Kil'Jaeden, Hellfire Peninsula;59.6;39.4;Draenor;Throne of Kil'jaeden, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;66.4;52.2;Outland;Dark Portal, Hellfire Peninsula;62.3;47.5;Draenor;Dark Portal, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;57.6;51.4;Outland;Magtheridon's Lair, Hellfire Peninsula;56.8;47.1;Draenor;Hellfire Citadel, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;69.8;80.5;Outland;Warden's Cage, Shadowmoon Valley;60.8;70.0;Draenor;Path of Light, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;58.9;75.8;Outland;Legion Hold, Shadowmoon Valley;53.3;64.8;Draenor;Moonflower Valley, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;55.8;81.8;Outland;Skettis, Terokkar Forest;45.1;68.1;Draenor;Talador;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;47.5;72.1;Outland;Bone Wastes, Terokkar Forest;42.6;65.3;Draenor;Deathweb Hollow, Talador;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;42.6;65.3;Outland;Shattrath City, Terokkar Forest;40.4;54.1;Draenor;Shattrath, Talador;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;44.0;52.6;Outland;Zangarmarsh;46.4;47.1;Draenor;Path of Glory, Talador;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;26.8;69.3;Outland;Oshugun Spirit Fields, Nagrand;25.4;55.9;Draenor;Oshugun Spirit Woods, Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;34.4;57.1;Outland;Throne of the Elements, Nagrand;30.1;46.4;Draenor;Throne of the Elements, Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;38.6;59.7;Outland;Nagrand;36.5;48.4;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;42.5;34.4;Outland;Razor Ridge, Blade's Edge Mountains;48.9;37.4;Draenor;Razor Bloom, Gorgrond;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;38.9;32.9;Outland;Bloodmaul Ravine, Blade's Edge Mountains;30.3;34.7;Draenor;Burning Glacier, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;36.1;35.5;Outland;Bloodmaul Ravine, Blade's Edge Mountains;26.8;31.7;Draenor;Gormaul Tower, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;33.8;48.2;Outland;Twinspire Ruins, Zangarmarsh;33.5;43.9;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;49.9;23.3;Draenor;Blackrock Foundry, Gorgrond;44.5;21.2;Outland;Gruul's Lair, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;59.6;39.4;Draenor;Throne of Kil'jaeden, Tanaan Jungle;61.6;42.6;Outland;Throne of Kil'Jaeden, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;62.3;47.5;Draenor;Dark Portal, Tanaan Jungle;66.4;52.2;Outland;Dark Portal, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;56.8;47.1;Draenor;Hellfire Citadel, Tanaan Jungle;57.6;51.4;Outland;Magtheridon's Lair, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;60.8;70.0;Draenor;Path of Light, Shadowmoon Valley;69.8;80.5;Outland;Warden's Cage, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;53.3;64.8;Draenor;Moonflower Valley, Shadowmoon Valley;58.9;75.8;Outland;Legion Hold, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;45.1;68.1;Draenor;Talador;55.8;81.8;Outland;Skettis, Terokkar Forest;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;42.6;65.3;Draenor;Deathweb Hollow, Talador;47.5;72.1;Outland;Bone Wastes, Terokkar Forest;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;40.4;54.1;Draenor;Shattrath, Talador;42.6;65.3;Outland;Shattrath;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;46.4;47.1;Draenor;Path of Glory, Talador;44.0;52.6;Outland;Zangarmarsh;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;25.4;55.9;Draenor;Oshugun Spirit Woods, Nagrand;26.8;69.3;Outland;Oshugun Spirit Fields, Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;30.1;46.4;Draenor;Throne of the Elements, Nagrand;34.4;57.1;Outland;Throne of the Elements, Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;36.5;48.4;Draenor;Nagrand;38.6;59.7;Outland;Nagrand;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;48.9;37.4;Draenor;Razor Bloom, Gorgrond;42.5;34.4;Outland;Razor Ridge, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;30.3;34.7;Draenor;Burning Glacier, Frostfire Ridge;38.9;32.9;Outland;Bloodmaul Ravine, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;26.8;31.7;Draenor;Gormaul Tower, Frostfire Ridge;36.1;35.5;Outland;Bloodmaul Ravine, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Ever-Shifting Mirror;;33.5;43.9;Draenor;Nagrand;33.8;48.2;Outland;Twinspire Ruins, Zangarmarsh;FALSE;Item;TRUE;0.25;;;;;;FALSE;1;;
  Fracture Necrolyte Skull;;0;0;;Player;71.07;80.58;Outland;Black Temple;TRUE;Item;TRUE;60;;;;;;FALSE;1;;
  Garrison Hearthstone;;0;0;;Player;33.54;36.89;Draenor;Frostwall;TRUE;Item;TRUE;15;Horde;;;;;TRUE;1;5;
  Garrison Hearthstone;;0;0;;Player;53.9;63.3;Draenor;;TRUE;Item;TRUE;15;Alliance;;;;;FALSE;1;5;
  Grim Campfire;;57.0;29.1;Draenor;Gorgrond;91.5;76.9;Pandaria;Timeless Isle;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Grim Campfire;;91.5;76.9;Pandaria;Timeless Isle;57.0;29.1;Draenor;Gorgrond;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Hearthstone;;0;0;;Player;47.90;82.44;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;;;TRUE;1;10;
  Hellscream's Reach Tabard;;0;0;;Player;;;Tol Barad;Hellscream's Grasp;TRUE;Item;TRUE;240;Horde;;;;;FALSE;1;;
  Jaina's Locket;Multiple people can use;0;0;;Player;48.70;42.18;Northrend;Dalaran;TRUE;Item;TRUE;60;;;;;;TRUE;1;10;
  Kyrian travel network;;77.0;53.5;Shadowlands;Bastion;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Kyrian;;TRUE;1;0;
  Mole Machine;;0;0;;Player;44.6;59.1;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;52.8;81.8;Eastern Kingdoms;Nethergarde Keep, Blasted Lands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;49.9;39.6;Eastern Kingdoms;Aerie Peak, The Hinterlands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;47.4;68.5;Eastern Kingdoms;The Masonary, Black Rock Mountains;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;;;Eastern Kingdoms;Shadowforge City, Shadowforge City;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;50.4;80.1;Kalimdor;Fire Plume Ridge, Un'Goro Crater;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;54.4;34.2;Kalimdor;Throne of Flame, Mount Hyjal;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;49.5;50.3;Kalimdor;The Great Divide, Southern Barrens;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;59.3;55.9;Outland;Honor Hold, Hellfire Peninsula;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;66.3;78.4;Outland;Fel Pits, Shadowmoon Valley;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;46.3;18.2;Outland;Skald, Blade's Edge Mountains;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;43.9;19.3;Northrend;Argent Tournament Grounds, Icecrown;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;45.6;58.0;Northrend;Ruby Dragonshrine, Dragonblight;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;49.5;35.7;Pandaria;One Keg, Kun-Lai Summit;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;46.6;70.6;Pandaria;Stormstout Brewery, Valley of the Four Winds;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;47.4;29.5;Draenor;Blackrock Foundry Overlook, Gorgrond;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;29.6;43.9;Draenor;Elemental Plateau, Nagrand;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;46.5;29.5;Broken Isles;Neltharion's Vault, Highmountain;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;57.9;66.6;Broken Isles;The Broken Shore;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Necrolord travel network;;62.7;27.6;Shadowlands;Maldraxxus;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Necrolord;;TRUE;1;0;
  Night Fae travel network;;47.92;81.53;Shadowlands;Ardenweald;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Night Fae;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.28;41.82;Kalimdor;Orgrimmar;;;Deepholm;Deepholm;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;60.11;56.02;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;29.53;65.34;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.28;41.82;Kalimdor;Orgrimmar;;;Tol Barad;Tol Barad;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.91;35.56;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;58.26;62.04;Zandalar;Dazar'alor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;43.25;66.34;Outland;Shattrath;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;Bugs for some characters;58.60;44.28;Kalimdor;Orgrimmar;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;71.64;39.04;Draenor;Warspear;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Zeppelin from Stranglethorn Vale;;44.07;87.02;Eastern Kingdoms;Grom'gol Base Camp, Stranglethorn Vale;58.3;42.66;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin;Old world on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.45;34.63;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin to Stranglethorn Vale;;58.3;42.66;Kalimdor;Orgrimmar;44.07;87.02;Eastern Kingdoms;Grom'gol Base Camp, Stranglethorn Vale;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin to Borean Tundra;;57.99;43.03;Kalimdor;Orgrimmar;18.98;65.73;Northrend;Warsong Hold, Borean Tundra;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin to Thunder Bluff;Slower than flying;57.99;43.03;Kalimdor;Orgrimmar;45.60;54.12;Kalimdor;Thunder Bluff;FALSE;World;TRUE;;;;;;;FALSE;0;0;300
  Orgrimmar Zeppelin;Current time on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.87;33.99;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Orgrimmar Zeppelin from Thunder Bluff;;45.60;54.12;Kalimdor;Thunder Bluff;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;FALSE;0;0;300
  Orgrimmar Zeppelin from Borean Tundra;;18.98;65.73;Northrend;Warsong Hold, Borean Tundra;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Path of the Black Ox;;0;0;;Player;25.9;48.6;Pandaria;Siege of Niuzao;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Bloodmaul;;0;0;;Player;30.8;27.0;Draenor;Bloodmaul Slag Mines;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Burning Mountain;;0;0;;Player;47.5;68.3;Eastern Kingdoms;Upper Blackrock Spire;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Crescent Moon;;0;0;;Player;55.1;73.2;Draenor;Shadowmoon Burial Grounds;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Dark Rail;;0;0;;Player;52.0;25.0;Draenor;Grimrail Depot;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Iron Prow;;0;0;;Player;48.9;17.5;Draenor;Iron Docks;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Jade Serpent;;0;0;;Player;72.08;55.4;Pandaria;Temple of Jade Serpent;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Mogu King;;0;0;;Player;56.5;53.3;Pandaria;Mogu'shan Palace;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Necromancer;;0;0;;Player;50.7;36.2;Eastern Kingdoms;Scholomance;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Scarlet Blade;;0;0;;Player;46.6;30.8;Eastern Kingdoms;Scarlet Halls;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Scarlet Mitre;;0;0;;Player;46.6;30.8;Eastern Kingdoms;Scarlet Monastery;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Setting Sun;;0;0;;Player;42.8;57.4;Pandaria;Gate of the Setting Sun;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Shado-Pan;;0;0;;Player;39.99;30.10;Pandaria;Shado-Pan Monastery;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Skies;;0;0;;Player;44.8;72.8;Draenor;Skyreach;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Stout Brew;;0;0;;Player;48.15;70.68;Pandaria;Stormstout Brewery;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Verdant;;0;0;;Player;51.4;33.0;Draenor;The Everbloom;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Path of the Vigilant;;0;0;;Player;39.3;61.9;Draenor;Auchindoun;TRUE;Spell;TRUE;480;;;;;;FALSE;1;10;
  Pit Fighter's Punching Ring;;0;0;;Player;57.99;43.03;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;;FALSE;1;;
  Pit Fighter's Punching Ring;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;;FALSE;1;;
  Potion of Deepholm;;0;0;;Player;;;Deepholm;Deepholm;TRUE;Item;TRUE;1;;;;;;FALSE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;34.4;57.1;Broken Isles;Azsuna;TRUE;Item;TRUE;1.5;;;;;Engineering;FALSE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;35.3;34.2;Broken Isles;Val'sharah;TRUE;Item;TRUE;1.5;;;;;Engineering;FALSE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;46.6;22.2;Broken Isles;Highmountain;TRUE;Item;TRUE;1.5;;;;;Engineering;FALSE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;59.3;35.3;Broken Isles;Stormheim;TRUE;Item;TRUE;1.5;;;;;Engineering;FALSE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;47.4;46.7;Broken Isles;Suramar;TRUE;Item;TRUE;1.5;;;;;Engineering;FALSE;1;;
  Relic of Karabor;;0;0;;Player;71.1;46.6;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;Alliance;;;;;FALSE;1;;
  Shroud of Cooperation;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;480;Horde;;;;;FALSE;1;10;
  Shroud of Cooperation;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;480;Alliance;;;;;FALSE;1;10;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;32.5;51.4;Broken Isles;Azsuna;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;46.6;25.4;Broken Isles;Highmountain;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;61.1;31.5;Broken Isles;Stormheim;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;34.5;34.9;Broken Isles;Val'sharah;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;44.5;45.6;Broken Isles;Suramar;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Skyhold;;46.33;64.42;Broken Isles;Dalaran;53.9;68.5;Broken Isles;Broken Shore;FALSE;Portal;TRUE;;;Warrior;;;;FALSE;2;0;
  Stormwind Cataclysm Portals;Destination not on world maps;43.1;71.3;Eastern Kingdoms;Stormwind;;;Deepholm;Deepholm;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;55.6;52.7;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;34.4;61.8;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Cataclysm Portals;Destination not on world maps;43.1;71.3;Eastern Kingdoms;Stormwind;;;Tol Barad;Tol Barad;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Cataclysm Portals;;43.1;71.3;Eastern Kingdoms;Stormwind;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;68.6;64.6;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.5;54.4;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;43.25;66.34;Outland;Shattrath;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;73.3;46.9;Draenor;Stormshield;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;Unreachable by flying;58.60;44.28;Kalimdor;Orgrimmar;30.5;25.9;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Teleport: Boralus;;0;0;;Player;59.5;54.4;Kul Tiras;Boralus;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Dalaran - Broken Isles;;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;;TRUE;1;10;
  Teleport: Dalaran - Northrend;;0;0;;Player;48.70;42.18;Northrend;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;;FALSE;1;10;
  Teleport: Darnassus;;0;0;;Player;40.5;9.6;Kalimdor;Darnassus;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Dazar'alor;;0;0;;Player;58.26;62.04;Zandalar;Dazar'alor;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Exodar;;0;0;;Player;30.5;25.9;Kalimdor;Exodar;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Ironforge;;0;0;;Player;44.6;59.1;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Orgrimmar;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Oribos;;0;0;;Player;45.61;50.70;Shadowlands;Oribos;TRUE;Spell;TRUE;1;;Mage;;;;FALSE;1;10;
  Teleport: Shattrath;;0;0;;Player;43.25;66.34;Outland;Shattrath;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Shattrath;;0;0;;Player;43.25;66.34;Outland;Shattrath;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Silvermoon;;0;0;;Player;56.16;13.18;Eastern Kingdoms;Silvermoon City;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Stonard;;0;0;;Player;53.1;80.1;Eastern Kingdoms;Stonard;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Stormshield;;0;0;;Player;73.3;46.9;Draenor;Stormshield;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Stormwind;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Theramore;;0;0;;Player;58.6;65.5;Kalimdor;Theramore;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Thunder Bluff;;0;0;;Player;45.60;54.12;Kalimdor;Thunder Bluff;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Tol Barad;;0;0;;Player;;;Tol Barad;Tol Barad;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Tol Barad;;0;0;;Player;;;Tol Barad;Tol Barad;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Undercity;Old world on arrival;0;0;;Player;44.45;34.63;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Undercity;Current time on arrival;0;0;;Player;44.87;33.99;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Vale of Eternal Blossoms;;0;0;;Player;53.0;49.9;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Horde;Mage;;;;FALSE;1;10;
  Teleport: Vale of Eternal Blossoms;;0;0;;Player;55.0;57.4;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Alliance;Mage;;;;FALSE;1;10;
  Teleport: Warspear;;0;0;;Player;71.64;39.04;Draenor;Warspear;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  The Brassiest Knuckle;;0;0;;Player;57.99;43.03;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;;FALSE;1;;
  The Brassiest Knuckle;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;;FALSE;1;;
  Time-Lost Artifact;;0;0;;Player;88.02;70.87;Pandaria;Timeless Isle;TRUE;Item;TRUE;1;;;;;;TRUE;1;;
  Ultrasafe Transporter: Gadgetzan;;0;0;;Player;56.8;78.6;Kalimdor;Gadgetzan, Tanaris;TRUE;Item;TRUE;240;;;;;Gnomish Engineering;FALSE;1;;
  Ultrasafe Transporter: Mechagon;;0;0;;Player;18.6;26.5;Kul Tiras;Mechagon;TRUE;Item;TRUE;1;;;;;;FALSE;1;;
  Ultrasafe Transporter: Toshley's Station;;0;0;;Player;43.8;32.5;Outland;Toshley's Station, Blade's Edge Mountains;TRUE;Item;TRUE;240;;;;;Gnomish Engineering;FALSE;1;;
  Venthyr travel network;;21.0;50.5;Shadowlands;Revendreth;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Venthyr;;TRUE;1;0;
  Violet Seal of the Grand Magus;;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;47.4;76.4;Draenor;Spires of Arak;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;44.0;58.0;Draenor;Talador;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;58.1;70.4;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;27.8;52.4;Draenor;Nagrand;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;49.8;30.6;Draenor;Gorgrond;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;33.5;29.9;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Northrend;;0;0;;Player;22.4;63.3;Northrend;Borean Tundra;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Northrend;;0;0;;Player;78.5;77.3;Northrend;Howling Fjord;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Northrend;;0;0;;Player;26.9;40.7;Northrend;Sholazar Basin;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Northrend;;0;0;;Player;41.9;23.9;Northrend;Icecrown;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Northrend;;0;0;;Player;58.0;16.2;Northrend;Storm Peaks;TRUE;Item;TRUE;240;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;45.61;50.70;Shadowlands;Oribos;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;74.0;67.6;Shadowlands;Bastion;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;60.5;19.3;Shadowlands;Maldraxxus;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;51.0;82.0;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;20.9;58.0;Shadowlands;Revendreth;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;20.9;7.3;Shadowlands;The Maw;TRUE;Item;TRUE;15;;;;;Engineering;FALSE;1;;
  Wrap of Unity;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;240;Horde;;;;;FALSE;1;10;
  Wrap of Unity;;0;0;;Player;43.1;71.3;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;240;Alliance;;;;;FALSE;1;10;
  Zen Pilgrimage;;0;0;;Player;48.3;28.4;Pandaria;Kun-lai Summit;TRUE;Spell;TRUE;1;;Monk;;;;FALSE;1;10;
  Dalaran to Orgrimmar;;46.33;64.42;Broken Isles;Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;46.33;64.42;Broken Isles;Dalaran;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Paladin Class Hall;;46.33;64.42;Broken Isles;Dalaran;58.3;33.4;Eastern Kingdoms;Light's Hope Chapel, Eastern Plaguelands;FALSE;Portal;TRUE;;;Paladin;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;46.33;64.42;Broken Isles;Dalaran;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;46.33;64.42;Broken Isles;Dalaran;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Booty Bay Boat to Ratchet;;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;56.83;54.26;Kalimdor;Ratchet, Northern Barrens;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;84.59;72.89;Northrend;Howling Fjord;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Undercity;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Stormwind Boat to Teldrassil;;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;43.8;14.7;Kalimdor;Teldrassil;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  Stormwind Boat to Borean Tundra;;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;78.9;78.6;Northrend;Valiance Keep, Borean Tundra;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  Horde Gnomeregan portal;Inside instance. Can't get out?;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Uncercity to Dark Portal;Old world only;44.45;34.63;Eastern Kingdoms;Undercity;69.06;51.94;Outland;Dark Portal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;Old world only?;46.9;53.7;Eastern Kingdoms;Menethil Harbor, Wetlands;58.6;65.5;Kalimdor;Theramore Isle, Dustwallow Marsh;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  ;Old world only?;43.8;14.7;Kalimdor;Teldrassil;30.5;25.9;Kalimdor;Exodar;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  ;Old world only?;58.6;65.5;Kalimdor;Theramore Isle, Dustwallow Marsh;46.9;53.7;Eastern Kingdoms;Menethil Harbor, Wetlands;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  ;;59.91;35.56;Pandaria;Jade Forest;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;43.25;66.34;Outland;Shattrath;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;59.33;83.45;Kalimdor;Caverns of Time;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;69.13;52.13;Outlands;Dark Portal;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;48.70;42.18;Northrend;Old Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;71.64;39.04;Draenor;Warspear;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;56.16;13.18;Eastern Kingdoms;Silvermoon City;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;45.61;50.70;Shadowlands;Oribos;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;56.23;27.62;Kalimdor;Mount Hyjal;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;60.11;56.02;Eastern Kingdoms;Twilight Highlands;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  ;;56.23;27.62;Kalimdor;Mount Hyjal;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  ;;55.6;52.7;Eastern Kingdoms;Twilight Highlands;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Ratchet Boat to Booty Bay;;56.83;54.26;Kalimdor;Ratchet, Northern Barrens;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;FALSE;World;TRUE;;;;;;;TRUE;1;0;
  Stormwind Boat from Teldrassil;;43.8;14.7;Kalimdor;Teldrassil;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  Exodar Boat to Teldrassil;Old world only?;30.5;25.9;Kalimdor;Exodar;43.8;14.7;Kalimdor;Teldrassil;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;59.5;54.4;Kul Tiras;Boralus;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;59.5;54.4;Kul Tiras;Boralus;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;59.5;54.4;Kul Tiras;Boralus;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  ;;59.5;54.4;Kul Tiras;Boralus;33.8;21.6;Zandalar;Vol'dun;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  ;;59.5;54.4;Kul Tiras;Boralus;63.6;25.7;Zandalar;Nazmir;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  ;;59.5;54.4;Kul Tiras;Boralus;44.0;77.5;Zandalar;Zuldazar;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind Boat from Borean Tundra;;78.9;78.6;Northrend;Valiance Keep, Borean Tundra;43.1;71.3;Eastern Kingdoms;Stormwind Harbor;FALSE;World;TRUE;;;;;;;FALSE;1;0;
  ;Related to quest https://www.wowhead.com/quest=12561/an-issue-of-trust#. Investigate;25.8;49.4;Northrend;Sholazar Basin;51.5;75.6;Kalimdor;Shaper's Terrace, Un'goro Crater;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  ;Unreachable by flying;42.5;65.3;Outland;Shattrath;55.67;2.85;Eastern Kingdoms;Isle of Quel'Danas;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  ;;42.5;65.3;Outland;Shattrath;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  ;Seems off, verify;42.5;65.3;Outland;Shattrath;53.6;85.2;Eastern Kingdoms;Dark Portal, Blasted Lands;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  ;;18.5;13.2;Pandaria;Isle of Thunder;30.1;46.2;Pandaria;Townlong Steppes;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  ;Not reachable by flying;30.1;46.2;Pandaria;Townlong Steppes;18.5;13.2;Pandaria;Isle of Thunder;FALSE;Portal;TRUE;;;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;58.26;62.04;Zandalar;Dazar'alor;52.0;50.7;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;58.26;62.04;Zandalar;Dazar'alor;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Pet Battle Teleport;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;58.26;62.04;Zandalar;Dazar'alor;40.8;82.6;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;Up for a week every 3 weeks;58.29;72.23;Zandalar;Zulzadar Harbor;;;Kalimdor;Darkshore;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;Up for a week every 3 weeks;58.29;72.23;Zandalar;Zulzadar Harbor;;;Eastern Kingdoms;Arathi Highlands;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;25.8;66.6;Kul Tiras;Drustvar;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;56.9;12.4;Kul Tiras;Stormsong Valley;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;69.9;68.3;Kul Tiras;Tiragarde Sound;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  ;;58.29;72.23;Zandalar;Zulzadar Harbor;20.4;25.0;Kul Tiras;Mechagon;FALSE;Portal;TRUE;;Horde;;;;;FALSE;1;0;
  Shattrath to Stormwind;;43.25;66.34;Outland;Shattrath;43.1;71.3;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Scroll of Teleport;;0;0;;Player;48.0;42.8;Eastern Kingdoms;Ravenholdt, Hillsbrad Foothills;TRUE;Item;TRUE;;;Rogue;;;;FALSE;1;;`

  console.log(CsvToJson(csv, ';'))
}

export default GenerateTeleportJson