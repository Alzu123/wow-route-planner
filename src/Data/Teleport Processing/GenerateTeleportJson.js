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
  Adept's Guide to Dimensional Rifting;Only active on Sunday;0;0;;Player;65.31;43.23;Antoran Wastes;Antoran Wastes, Argus;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Admiral's Compass;;0;0;;Player;32.31;37.97;Draenor;Garrison Shipyard;TRUE;Item;TRUE;240;Horde;;;;;TRUE;1;;
  Ancient Teleport: Dalaran;;0;0;;Player;43.75;40.05;Eastern Kingdoms;Dalaran Crater, Hillsbrad Foothills;TRUE;Spell;TRUE;1;;Mage;;;;TRUE;1;10;
  Antoran Wastes to Dalaran;;72.96;50.52;Antoran Wastes;Hope's Landing, Antoran Wastes, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Antoran Wastes to Dalaran;;70.60;25.48;Antoran Wastes;Veiled Den, Antoran Wastes, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Ardenweald to Oribos;;52.89;77.46;Shadowlands;Tirna Vaal, Ardenweald;47.02;51.15;Shadowlands;Oribos;TRUE;World;TRUE;;;;;;;TRUE;0;0;70
  Argent Crusader's Tabard;;0;0;;Player;46.02;20.90;Northrend;Argent Tournament Grounds, Icecrown;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Ashran to Orgrimmar;;71.64;39.04;Draenor;Warspear;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;FALSE;1;;Druid;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;FALSE;1;;Mage;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;FALSE;1;;Priest;;;;FALSE;1;;
  Atiesh, Greatstaff of the Guardian;Usable by others;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan, Deadwind Pass;TRUE;Item;FALSE;1;;Warlock;;;;FALSE;1;;
  Azsuna to Orgrimmar;;33.73;57.91;Broken Isles;Azsuna;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Band of Kirin Tor;Many similar which share CD?;0;0;;Player;48.70;42.18;Northrend;Old Dalaran;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Baradin's Wardens Tabard;;0;0;;Player;74.8;58.4;Tol Barad Peninsula;Baradin Base Camp, Tol Barad;TRUE;Item;TRUE;240;Alliance;;;;;FALSE;1;;
  Bastion to Oribos;;71.18;65.14;Shadowlands;Aspirant's Rest, Bastion;47.02;51.15;Shadowlands;Oribos;TRUE;World;TRUE;;;;;;;TRUE;0;0;40
  Bladespire Relic;;0;0;;Player;28.08;28.96;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;Horde;;;;;TRUE;1;;
  Blessed Medallion of Karabor;;0;0;;Player;71.07;80.58;Outland;Black Temple, Shadowmoon Valley;TRUE;Item;TRUE;15;;;;;;TRUE;1;;
  Boots of the Bay;;0;0;;Player;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;TRUE;Item;FALSE;1440;;;;;;FALSE;1;;
  Booty Bay Boat to Ratchet;;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;56.83;54.26;Kalimdor;Ratchet, Northern Barrens;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Boralus Portal Room;If old Silithus enabled;61.49;49.64;Kul Tiras;Boralus;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;New world;61.49;49.64;Kul Tiras;Boralus;42.86;79.10;Kalimdor;Magni's Encampment, Silithus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;;61.49;49.64;Kul Tiras;Boralus;46.85;58.16;Eastern Kingdoms;Ironforge;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;;61.49;49.64;Kul Tiras;Boralus;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;;61.49;49.64;Kul Tiras;Boralus;29.99;26.18;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;;61.49;49.64;Kul Tiras;Boralus;39.96;52.84;Nazjatar;Mezzamere, Nazjatar;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus Portal Room;;39.96;52.84;Nazjatar;Nazjatar;61.49;49.64;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus to Nazmir;;61.12;51.03;Kul Tiras;Boralus;62.46;26.36;Zandalar;Nazmir;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus to Vol'dun;;61.12;51.03;Kul Tiras;Boralus;32.66;18.66;Zandalar;Vol'dun;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Boralus to Zulzadar;;61.12;51.03;Kul Tiras;Boralus;47.28;78.46;Zandalar;Zuldazar;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Captain's Signet of Command;;0;0;;Player;59.5;54.4;Kul Tiras;Boralus;TRUE;Item;TRUE;30;Alliance;;;;;FALSE;1;;
  Caverns of Time to Orgrimmar;;59.33;83.45;Kalimdor;Caverns of Time;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Caverns of Time to Stormwind;;59.33;83.45;Kalimdor;Caverns of Time;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Cloak of Coordination;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;120;Horde;;;;;TRUE;1;10;
  Cloak of Coordination;;0;0;;Player;42.35;74.47;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;120;Alliance;;;;;TRUE;1;10;
  Commander's Signet of Battle;;0;0;;Player;58.29;72.23;Zandalar;Zulzadar Harbor;TRUE;Item;TRUE;30;;;;;;TRUE;1;;
  Dalaran Hearthstone;;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Item;TRUE;20;;;;;;TRUE;1;5;
  Dalaran to Antoran Wastes;;46.91;64.62;Broken Isles;Dalaran;72.96;50.52;Antoran Wastes;Hope's Landing, Antoran Wastes, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Antoran Wastes;;46.91;64.62;Broken Isles;Dalaran;70.60;25.48;Antoran Wastes;Veiled Den, Antoran Wastes, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Krokuun;;46.91;64.62;Broken Isles;Dalaran;40.30;63.50;Krokuun;Shattered Fields, Krokuun, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Krokuun;;46.91;64.62;Broken Isles;Dalaran;55.48;67.35;Krokuun;Krokul Hovel, Krokuun, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Krokuun;;46.91;64.62;Broken Isles;Dalaran;62.69;49.12;Krokuun;Destiny Point, Krokuun, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Mac'Aree;;46.91;64.62;Broken Isles;Dalaran;52.86;75.46;Mac'Aree;Triumvirate's End,  Mac'Aree, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Mac'Aree;;46.91;64.62;Broken Isles;Dalaran;47.03;55.50;Mac'Aree;City Center, Mac'Aree, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Mac'Aree;;46.91;64.62;Broken Isles;Dalaran;30.16;49.56;Mac'Aree;Shadowguard Incursion, Mac'Aree, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Mac'Aree;;46.91;64.62;Broken Isles;Dalaran;62.98;39.49;Mac'Aree;Conservatory of the Arcane, Mac'Aree, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Mac'Aree;;46.91;64.62;Broken Isles;Dalaran;43.87;14.53;Mac'Aree;Prophet's Reflection, Mac'Aree, Argus;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Dalaran to Orgrimmar;;46.33;64.42;Broken Isles;Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dalaran to Orgrimmar;;48.70;42.18;Northrend;Old Dalaran;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dalaran to Stormwind;;47.98;42.86;Northrend;Dalaran;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Darkmoon Faerie Mystic Mage;Up for a week every month;43.03;73.74;Eastern Kingdoms;Stormwind;44.40;76.22;Eastern Kingdoms;Darkmoon Staging Ground, Elwynn Forest;FALSE;Portal;FALSE;;Alliance;;;;;TRUE;1;0;
  Darkmoon Faerie Mystic Mage;Up for a week every month;58.18;42.98;Kalimdor;Orgrimmar;45.79;56.06;Kalimdor;Darkmoon Staging Ground, Thunder Bluff;FALSE;Portal;FALSE;;Horde;;;;;TRUE;1;0;
  Darnassus to Dark Portal;;39.55;10.81;Kalimdor;Darnassus;69.06;52.32;Outland;Dark Portal, Hellfire Peninsula;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Darnassus to Exodar;;39.55;10.81;Kalimdor;Darnassus;29.99;26.18;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Dazar'alor Portal Room;If old Silithus enabled;58.26;62.04;Zandalar;Dazar'alor;46.98;76.53;Kalimdor;Silithus;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zandalar;Dazar'alor;45.60;54.12;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zandalar;Dazar'alor;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zandalar;Dazar'alor;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Dazar'alor Portal Room;;58.26;62.04;Zandalar;Dazar'alor;47.19;62.63;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Death Gate;;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Spell;TRUE;1;;Death Knight;;;;TRUE;2;10;
  Dimensional Ripper - Area 52;;0;0;;Player;53.54;23.44;Outland;Area 52, Netherstorm;TRUE;Item;TRUE;240;;;;;Goblin Engineering;TRUE;1;;
  Dimensional Ripper - Everlook;;0;0;;Player;59.03;22.64;Kalimdor;Everlook, Winterspring;TRUE;Item;TRUE;240;;;;;Goblin Engineering;TRUE;1;10;
  Direbrew's Remote;Inside the mountain;0;0;;Player;46.87;67.81;Eastern Kingdoms;Blackrock Depths;TRUE;Item;TRUE;60;;;;;;TRUE;1;;60
  Dreamwalk;;0;0;;Player;56.23;27.62;Kalimdor;Mount Hyjal;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;41.26;61.90;Kalimdor;Feralas;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;45.65;79.41;Eastern Kingdoms;Duskwood;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;54.37;19.34;Kalimdor;Moonglade;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;71.77;52.79;Northrend;Grizzly Hills;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;54.37;37.98;Eastern Kingdoms;Hinterlands;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Dreamwalk;;0;0;;Player;30.74;24.95;Broken Isles;Val'sharah;TRUE;Spell;TRUE;1;;Druid;;;;TRUE;2;10;10
  Drustvar to Zandalar;;25.93;67.32;Kul Tiras;Drustvar;58.25;73.28;Zandalar;Zulzadar Harbor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Emblem of Margoss;Consumed on use;0;0;;Player;46.33;64.42;Broken Isles;Margoss's Retreat, Dalaran;TRUE;Item;FALSE;;;;;;;FALSE;1;;
  Empowered Ring of Kirin Tor;Shares CD with old rings;0;0;;Player;45.85;64.58;Broken Isles;Dalaran;TRUE;Item;TRUE;30;;;;;;TRUE;1;10;
  Ever-Shifting Mirror;;44.33;20.32;Outland;Gruul's Lair, Blade's Edge Mountains;49.84;21.88;Draenor;Blackrock Foundry, Gorgrond;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;61.63;43.70;Outland;Throne of Kil'Jaeden, Hellfire Peninsula;59.34;40.90;Draenor;Throne of Kil'jaeden, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;66.46;52.54;Outland;Dark Portal, Hellfire Peninsula;62.57;47.29;Draenor;Dark Portal, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;58.95;51.74;Outland;Magtheridon's Lair, Hellfire Peninsula;57.78;46.42;Draenor;Hellfire Citadel, Tanaan Jungle;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;69.60;81.24;Outland;Warden's Cage, Shadowmoon Valley;61.56;70.55;Draenor;Path of Light, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;58.75;77.24;Outland;Legion Hold, Shadowmoon Valley;53.40;64.77;Draenor;Moonflower Valley, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;55.74;82.05;Outland;Skettis, Terokkar Forest;45.89;68.04;Draenor;Talador;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;47.88;73.29;Outland;Bone Wastes, Terokkar Forest;43.36;65.74;Draenor;Deathweb Hollow, Talador;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;44.76;62.47;Outland;Shattrath City, Terokkar Forest;41.41;53.86;Draenor;Shattrath, Talador;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;43.93;52.41;Outland;Zangarmarsh;46.13;47.07;Draenor;Path of Glory, Talador;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;28.51;68.32;Outland;Oshugun Spirit Fields, Nagrand;25.48;55.65;Draenor;Oshugun Spirit Woods, Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;34.56;57.72;Outland;Throne of the Elements, Nagrand;30.73;46.84;Draenor;Throne of the Elements, Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;39.79;58.84;Outland;Nagrand;34.96;47.07;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;42.12;34.40;Outland;Razor Ridge, Blade's Edge Mountains;49.33;37.07;Draenor;Razor Bloom, Gorgrond;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;38.17;32.04;Outland;Bloodmaul Ravine, Blade's Edge Mountains;26.70;31.44;Draenor;Gormaul Tower, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;36.07;36.17;Outland;Bloodmaul Ravine, Blade's Edge Mountains;30.93;35.59;Draenor;Burning Glacier, Frostfire Ridge;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;34.32;49.32;Outland;Twinspire Ruins, Zangarmarsh;33.16;43.61;Draenor;Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;49.84;21.88;Draenor;Blackrock Foundry, Gorgrond;44.33;20.32;Outland;Gruul's Lair, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;59.34;40.90;Draenor;Throne of Kil'jaeden, Tanaan Jungle;61.63;43.70;Outland;Throne of Kil'Jaeden, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;62.57;47.29;Draenor;Dark Portal, Tanaan Jungle;66.46;52.54;Outland;Dark Portal, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;57.78;46.42;Draenor;Hellfire Citadel, Tanaan Jungle;58.95;51.74;Outland;Magtheridon's Lair, Hellfire Peninsula;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;61.56;70.55;Draenor;Path of Light, Shadowmoon Valley;69.60;81.24;Outland;Warden's Cage, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;53.40;64.77;Draenor;Moonflower Valley, Shadowmoon Valley;58.75;77.24;Outland;Legion Hold, Shadowmoon Valley;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;45.89;68.04;Draenor;Talador;55.74;82.05;Outland;Skettis, Terokkar Forest;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;43.36;65.74;Draenor;Deathweb Hollow, Talador;47.88;73.29;Outland;Bone Wastes, Terokkar Forest;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;41.41;53.86;Draenor;Shattrath, Talador;44.76;62.47;Outland;Shattrath City, Terokkar Forest;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;46.13;47.07;Draenor;Path of Glory, Talador;43.93;52.41;Outland;Zangarmarsh;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;25.48;55.65;Draenor;Oshugun Spirit Woods, Nagrand;28.51;68.32;Outland;Oshugun Spirit Fields, Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;30.73;46.84;Draenor;Throne of the Elements, Nagrand;34.56;57.72;Outland;Throne of the Elements, Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;34.96;47.07;Draenor;Nagrand;39.79;58.84;Outland;Nagrand;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;49.33;37.07;Draenor;Razor Bloom, Gorgrond;42.12;34.40;Outland;Razor Ridge, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;26.70;31.44;Draenor;Gormaul Tower, Frostfire Ridge;38.17;32.04;Outland;Bloodmaul Ravine, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;30.93;35.59;Draenor;Burning Glacier, Frostfire Ridge;36.07;36.17;Outland;Bloodmaul Ravine, Blade's Edge Mountains;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Ever-Shifting Mirror;;33.16;43.61;Draenor;Nagrand;34.32;49.32;Outland;Twinspire Ruins, Zangarmarsh;FALSE;Item;TRUE;0.25;;;;;;TRUE;1;;
  Exodar to Teldrassil;Old world only;29.35;27.14;Kalimdor;Exodar;43.21;16.13;Kalimdor;Teldrassil;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Fracture Necrolyte Skull;;0;0;;Player;71.07;80.58;Outland;Black Temple;TRUE;Item;TRUE;60;;;;;;TRUE;1;5;
  Garrison Hearthstone;;0;0;;Player;33.54;36.89;Draenor;Frostwall, Frostfire Ridge;TRUE;Item;TRUE;15;Horde;;;;;TRUE;1;5;
  Garrison Hearthstone;;0;0;;Player;52.31;61.10;Draenor;Lunarfall, Shadowmoon Valley;TRUE;Item;TRUE;15;Alliance;;;;;TRUE;1;5;
  Gate to Eastern Plaguelands;Required to travel from Ghostlands or Eversong Woods;55.91;27.45;Eastern Kingdoms;Gate to Eastern Plaguelands;55.60;28.39;Eastern Kingdoms;Gate to Ghostlands;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Gate to Ghostlands;Required to travel to Ghostlands or Eversong Woods;55.60;28.39;Eastern Kingdoms;Gate to Ghostlands;55.91;27.45;Eastern Kingdoms;Gate to Eastern Plaguelands;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Grim Campfire;;58.18;19.41;Draenor;Gorgrond;92.78;74.25;Pandaria;Timeless Isle;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;60
  Grim Campfire;;92.78;74.25;Pandaria;Timeless Isle;58.18;19.41;Draenor;Gorgrond;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;60
  Hearthstone;;0;0;;Player;47.90;82.44;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;;;TRUE;1;10;
  Hellfire Peninsula to Orgrimmar;;69.13;52.13;Outland;Dark Portal;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Hellscream's Reach Tabard;;0;0;;Player;55.78;80.06;Tol Barad Peninsula;Hellscream's Grasp, Tol Barad;TRUE;Item;TRUE;240;Horde;;;;;TRUE;1;;
  Horde Gnomeregan portal;Inside instance. Can't get out?;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;41.5;60.4;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Isle of Thunder to Townlong Steppes;;19.11;9.39;Pandaria;Isle of Thunder;29.54;47.68;Pandaria;Townlong Steppes;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Jade Forest to Orgrimmar;;59.91;35.56;Pandaria;Jade Forest;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Jaina's Locket;Multiple people can use;0;0;;Player;48.70;42.18;Northrend;Dalaran;TRUE;Item;TRUE;60;;;;;;TRUE;1;10;
  Krokuun to Dalaran;;40.30;63.50;Krokuun;Shattered Fields, Krokuun, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Krokuun to Dalaran;;55.48;67.35;Krokuun;Krokul Hovel, Krokuun, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Krokuun to Dalaran;;62.69;49.12;Krokuun;Destiny Point, Krokuun, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Kyrian travel network;;77.0;53.5;Shadowlands;Bastion;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Kyrian;;TRUE;1;0;
  Mac'Aree to Dalaran;;52.86;75.46;Mac'Aree;Triumvirate's End,  Mac'Aree, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Mac'Aree to Dalaran;;47.03;55.50;Mac'Aree;City Center, Mac'Aree, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Mac'Aree to Dalaran;;30.16;49.56;Mac'Aree;Shadowguard Incursion, Mac'Aree, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Mac'Aree to Dalaran;;62.98;39.49;Mac'Aree;Conservatory of the Arcane, Mac'Aree, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Mac'Aree to Dalaran;;43.87;14.53;Mac'Aree;Prophet's Reflection, Mac'Aree, Argus;46.33;64.42;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;;;;;TRUE;2;;15
  Maldraxxus to Oribos;;62.47;23.29;Shadowlands;Theater of Pain, Maldraxxus;47.02;51.15;Shadowlands;Oribos;TRUE;World;TRUE;;;;;;;TRUE;0;0;80
  Maw to Oribos;;23.42;10.94;Shadowlands;Ve'nari's Refuge, The Maw;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;;;TRUE;1;;
  Mechagon to Zandalar;;20.37;24.33;Kul Tiras;Mechagon Port;56.29;70.62;Zandalar;Zulzadar Harbor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Mole Machine;;0;0;;Player;46.73;60.15;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;TRUE;;;
  Mole Machine;;0;0;;Player;43.08;72.21;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;TRUE;;;
  Mole Machine;;0;0;;Player;52.8;81.8;Eastern Kingdoms;Nethergarde Keep, Blasted Lands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;49.9;39.6;Eastern Kingdoms;Aerie Peak, The Hinterlands;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
  Mole Machine;;0;0;;Player;47.4;68.5;Eastern Kingdoms;The Masonary, Black Rock Mountains;TRUE;Spell;TRUE;30;;;Dark Iron Dwarf;;;FALSE;;;
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
  Mount Hyjal to Orgrimmar;;56.23;27.62;Kalimdor;Mount Hyjal;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Nazmir to Boralus;;62.46;26.36;Zandalar;Nazmir;61.12;51.03;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Necrolord travel network;;62.7;27.6;Shadowlands;Maldraxxus;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Necrolord;;TRUE;1;0;
  Night Fae travel network;;47.92;81.53;Shadowlands;Ardenweald;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Night Fae;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;50.59;52.94;Deepholm;Deepholm;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;60.11;56.02;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;29.53;65.34;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;55.78;80.06;Tol Barad Peninsula;Hellscream's Grasp, Tol Barad;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;58.28;41.82;Kalimdor;Orgrimmar;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Cataclysm Portals;;50.59;52.94;Deepholm;Deepholm;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.91;35.56;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;58.26;62.04;Zandalar;Dazar'alor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;43.25;66.34;Outland;Shattrath;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;10
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;10
  Orgrimmar Portal Room;Bugs for some characters;58.60;44.28;Kalimdor;Orgrimmar;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;10
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;71.64;39.04;Draenor;Warspear;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;10
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;56.16;13.18;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar Portal Room;;58.60;44.28;Kalimdor;Orgrimmar;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Orgrimmar to Undercity;Current time on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.87;33.99;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin;Old world on arrival;58.3;42.66;Kalimdor;Orgrimmar;44.45;34.63;Eastern Kingdoms;Undercity;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Orgrimmar Zeppelin from Borean Tundra;;18.98;65.73;Northrend;Warsong Hold, Borean Tundra;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Orgrimmar Zeppelin from Stranglethorn Vale;;44.07;87.02;Eastern Kingdoms;Grom'gol Base Camp, Stranglethorn Vale;58.3;42.66;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Orgrimmar Zeppelin from Thunder Bluff;;45.41;54.37;Kalimdor;Thunder Bluff;57.99;43.03;Kalimdor;Orgrimmar;FALSE;World;TRUE;;;;;;;TRUE;0;0;405
  Orgrimmar Zeppelin to Borean Tundra;;57.99;43.03;Kalimdor;Orgrimmar;18.98;65.73;Northrend;Warsong Hold, Borean Tundra;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Orgrimmar Zeppelin to Stranglethorn Vale;;58.3;42.66;Kalimdor;Orgrimmar;44.07;87.02;Eastern Kingdoms;Grom'gol Base Camp, Stranglethorn Vale;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Orgrimmar Zeppelin to Thunder Bluff;;57.99;43.03;Kalimdor;Orgrimmar;45.41;54.37;Kalimdor;Thunder Bluff;FALSE;World;TRUE;;;;;;;TRUE;0;0;405
  Oribos to Ardenweald;;47.02;51.15;Shadowlands;Oribos;52.89;77.46;Shadowlands;Tirna Vaal, Ardenweald;TRUE;World;TRUE;;;;;;;TRUE;0;0;70
  Oribos to Bastion;;47.02;51.15;Shadowlands;Oribos;71.18;65.14;Shadowlands;Aspirant's Rest, Bastion;TRUE;World;TRUE;;;;;;;TRUE;0;0;40
  Oribos to Maldraxxus;;47.02;51.15;Shadowlands;Oribos;62.47;23.29;Shadowlands;Theater of Pain, Maldraxxus;TRUE;World;TRUE;;;;;;;TRUE;0;0;80
  Oribos to Maw;;46.72;50.55;Shadowlands;Oribos;23.86;10.74;Shadowlands;Ve'nari's Refuge, The Maw;FALSE;Portal;TRUE;;;;;;;TRUE;1;;5
  Oribos to Orgrimmar;;45.61;50.70;Shadowlands;Oribos;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Oribos to Revendreth;;47.02;51.15;Shadowlands;Oribos;29.42;60.35;Shadowlands;Pridefall Hamlet, Revendreth;TRUE;World;TRUE;;;;;;;TRUE;0;0;55
  Paladin Class Hall;;46.37;63.07;Broken Isles;Dalaran;57.68;32.39;Eastern Kingdoms;Light's Hope Chapel, Eastern Plaguelands;FALSE;Portal;TRUE;;;Paladin;;;;TRUE;1;0;10
  Path of the Black Ox;;0;0;;Player;24.19;51.58;Pandaria;Siege of Niuzao;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Bloodmaul;;0;0;;Player;34.26;25.93;Draenor;Bloodmaul Slag Mines;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Burning Mountain;;0;0;;Player;47.86;68.82;Eastern Kingdoms;Upper Blackrock Spire;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;10
  Path of the Crescent Moon;;0;0;;Player;53.28;68.82;Draenor;Shadowmoon Burial Grounds;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Dark Rail;;0;0;;Player;51.46;22.32;Draenor;Grimrail Depot;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Iron Prow;;0;0;;Player;47.82;15.46;Draenor;Iron Docks;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Jade Serpent;;0;0;;Player;72.08;55.4;Pandaria;Temple of Jade Serpent;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Mogu King;;0;0;;Player;53.49;51.26;Pandaria;Mogu'shan Palace;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Necromancer;;0;0;;Player;50.98;36.64;Eastern Kingdoms;Scholomance;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Scarlet Blade;;0;0;;Player;46.60;30.53;Eastern Kingdoms;Scarlet Halls;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Scarlet Mitre;;0;0;;Player;46.59;30.49;Eastern Kingdoms;Scarlet Monastery;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Setting Sun;;0;0;;Player;43.04;58.30;Pandaria;Gate of the Setting Sun;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Shado-Pan;;0;0;;Player;39.99;30.10;Pandaria;Shado-Pan Monastery;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Skies;;0;0;;Player;42.73;73.63;Draenor;Skyreach, Spires of Arak;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Stout Brew;;0;0;;Player;48.15;70.68;Pandaria;Stormstout Brewery;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Verdant;;0;0;;Player;52.98;26.89;Draenor;The Everbloom;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Path of the Vigilant;;0;0;;Player;40.32;64.02;Draenor;Auchindoun;TRUE;Spell;TRUE;480;;;;;;TRUE;1;10;
  Pet Battle Teleport to Blackrock Depths;;46.23;64.19;Broken Isles;Dalaran;49.77;67.71;Eastern Kingdoms;Blackrock Depths, Blackrock Mountain;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;60
  Pet Battle Teleport to Blackrock Depths;;58.64;53.79;Kul Tiras;Boralus;49.77;67.71;Eastern Kingdoms;Blackrock Depths, Blackrock Mountain;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;60
  Pet Battle Teleport to Blackrock Depths;;59.29;58.95;Zandalar;Dazar'alor;49.77;67.71;Eastern Kingdoms;Blackrock Depths, Blackrock Mountain;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;60
  Pet Battle Teleport to Deadmines;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;46.23;64.19;Broken Isles;Dalaran;40.76;81.91;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Pet Battle Teleport to Deadmines;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;58.64;53.79;Kul Tiras;Boralus;40.76;81.91;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Pet Battle Teleport to Deadmines;https://www.wowhead.com/quest=46291/the-deadmines-strike-back must be completed;59.29;58.95;Zandalar;Dazar'alor;40.76;81.91;Eastern Kingdoms;Deadmines;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Pet Battle Teleport to Gnomeregan;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;46.23;64.19;Broken Isles;Dalaran;42.42;60.08;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;60
  Pet Battle Teleport to Gnomeregan;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;58.64;53.79;Kul Tiras;Boralus;42.42;60.08;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;60
  Pet Battle Teleport to Gnomeregan;https://www.wowhead.com/quest=54185/gnomeregans-new-guardians must be completed;59.29;58.95;Zandalar;Dazar'alor;42.42;60.08;Eastern Kingdoms;Gnomeregan;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;60
  Pet Battle Teleport to Stratholme;;46.23;64.19;Broken Isles;Dalaran;54.50;29.50;Eastern Kingdoms;Stratholme, Eastern Plaguelands;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Pet Battle Teleport to Stratholme;;58.64;53.79;Kul Tiras;Boralus;54.50;29.50;Eastern Kingdoms;Stratholme, Eastern Plaguelands;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Pet Battle Teleport to Stratholme;;59.29;58.95;Zandalar;Dazar'alor;54.50;29.50;Eastern Kingdoms;Stratholme, Eastern Plaguelands;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Pet Battle Teleport to Wailing Caverns;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;46.23;64.19;Broken Isles;Dalaran;51.90;53.45;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Pet Battle Teleport to Wailing Caverns;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;58.64;53.79;Kul Tiras;Boralus;51.90;53.45;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Pet Battle Teleport to Wailing Caverns;https://www.wowhead.com/quest=45423/wailing-critters has to be completed;59.29;58.95;Zandalar;Dazar'alor;51.90;53.45;Kalimdor;Wailing Caverns, Northern Barrens;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Pit Fighter's Punching Ring;Location is set outside of tram;0;0;;Player;43.33;71.96;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;;TRUE;2;;30
  Potion of Deepholm;;0;0;;Player;49.99;55.47;Deepholm;Deepholm;TRUE;Item;FALSE;5;;;;;;TRUE;1;;
  Pugilist's Powerful Punching Ring;;0;0;;Player;59.23;41.51;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;;TRUE;2;10;
  Ratchet Boat to Booty Bay;;56.83;54.26;Kalimdor;Ratchet, Northern Barrens;43.19;93.74;Eastern Kingdoms;Booty Bay, The Cape of Stranglethorn;FALSE;World;TRUE;;;;;;;TRUE;1;0;120
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;34.4;57.1;Broken Isles;Azsuna;TRUE;Item;TRUE;1.5;;;;;Engineering;TRUE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;35.3;34.2;Broken Isles;Val'sharah;TRUE;Item;TRUE;1.5;;;;;Engineering;TRUE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;46.6;22.2;Broken Isles;Highmountain;TRUE;Item;TRUE;1.5;;;;;Engineering;TRUE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;59.3;35.3;Broken Isles;Stormheim;TRUE;Item;TRUE;1.5;;;;;Engineering;TRUE;1;;
  Reaves;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;47.4;46.7;Broken Isles;Suramar;TRUE;Item;TRUE;1.5;;;;;Engineering;TRUE;1;;
  Relic of Karabor;;0;0;;Player;71.1;46.6;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;Alliance;;;;;FALSE;1;;
  Revendreth to Oribos;;29.42;60.35;Shadowlands;Pridefall Hamlet, Revendreth;47.02;51.15;Shadowlands;Oribos;TRUE;World;TRUE;;;;;;;TRUE;0;0;55
  Scroll of Teleport: Ravenholdt;;0;0;;Player;48.53;41.07;Eastern Kingdoms;Ravenholdt, Hillsbrad Foothills;TRUE;Item;TRUE;;;Rogue;;;;TRUE;1;;
  Shattrath bar to Caverns of Time;;44.87;65.02;Outland;Shattrath;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Shattrath to Isle of Quel'Danas;;42.5;65.3;Outland;Shattrath;55.67;2.85;Eastern Kingdoms;Isle of Quel'Danas;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Shattrath to Orgrimmar;;43.25;66.34;Outland;Shattrath;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Shattrath to Stormwind;;43.55;66.27;Outland;Shattrath;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Shattrath to Stormwind;;43.25;66.34;Outland;Shattrath;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Sholazar Basin to Un'goro Crater;;24.34;49.50;Northrend;Sholazar Basin;49.99;75.29;Kalimdor;Shaper's Terrace, Un'goro Crater;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Shrine of Seven Stars to Stormwind;;55.27;56.58;Pandaria;Shrine of Seven Stars, Vale of Eternal Blossoms;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;;
  Shrine of Two Moons to Orgrimmar;;50.77;47.81;Pandaria;Shrine of Two Moons, Vale of Eternal Blossoms;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;;
  Shroud of Cooperation;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;480;Horde;;;;;TRUE;1;10;
  Shroud of Cooperation;;0;0;;Player;42.35;74.47;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;480;Alliance;;;;;TRUE;1;10;
  Silithus to Dazar'alor;If new Silithus;42.86;79.10;Kalimdor;Silithus;58.23;61.99;Zandalar;Dazar'alor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Silithus to Dazar'alor;If new Silithus;58.23;61.99;Zandalar;Dazar'alor;42.86;79.10;Kalimdor;Silithus;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Silvermoon City to Orgrimmar;;56.16;13.18;Eastern Kingdoms;Silvermoon City;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;33.96;53.08;Broken Isles;Azsuna;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;45.96;25.06;Broken Isles;Highmountain;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;61.41;32.33;Broken Isles;Stormheim;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;34.52;39.68;Broken Isles;Val'sharah;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;33.96;53.08;Broken Isles;Azsuna;46.95;64.52;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;45.96;25.06;Broken Isles;Highmountain;46.95;64.52;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;61.41;32.33;Broken Isles;Stormheim;46.95;64.52;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;34.52;39.68;Broken Isles;Val'sharah;46.95;64.52;Broken Isles;Dalaran;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;5
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;44.16;44.95;Broken Isles;Suramar;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;
  Skyhold;;46.95;64.52;Broken Isles;Dalaran;52.49;70.73;Broken Isles;Broken Shore;FALSE;Portal;TRUE;;;Warrior;;;;TRUE;2;0;
  Stormsong Valley to Zandalar;;54.13;18.18;Kul Tiras;Stormsong Valley;58.25;73.28;Zandalar;Zulzadar Harbor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Stormwind Boat from Borean Tundra;;24.66;70.65;Northrend;Valiance Keep, Borean Tundra;41.11;71.70;Eastern Kingdoms;Stormwind Harbor;FALSE;World;TRUE;;;;;;;TRUE;1;0;135
  Stormwind Boat to Boralus;;41.32;73.01;Eastern Kingdoms;Stormwind Harbor;62.45;51.02;Kul Tiras;Boralus;FALSE;World;TRUE;;;;;;;TRUE;1;0;150
  Stormwind Boat to Borean Tundra;;41.11;71.70;Eastern Kingdoms;Stormwind Harbor;24.66;70.65;Northrend;Valiance Keep, Borean Tundra;FALSE;World;TRUE;;;;;;;TRUE;1;0;135
  Stormwind Cataclysm Portals;;43.55;71.41;Eastern Kingdoms;Stormwind;48.73;53.56;Deepholm;Deepholm;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;43.55;71.41;Eastern Kingdoms;Stormwind;56.23;27.62;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;48.73;53.56;Deepholm;Deepholm;43.55;71.41;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;56.23;27.62;Kalimdor;Mount Hyjal;43.55;71.41;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;43.55;71.41;Eastern Kingdoms;Stormwind;60.87;59.18;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;First location;43.55;71.41;Eastern Kingdoms;Stormwind;35.26;57.57;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;43.55;71.41;Eastern Kingdoms;Stormwind;73.68;60.92;Tol Barad Peninsula;Baradin Base Camp, Tol Barad;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;73.68;60.92;Tol Barad Peninsula;Baradin Base Camp, Tol Barad;43.55;71.41;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Cataclysm Portals;;43.55;71.41;Eastern Kingdoms;Stormwind;48.98;88.67;Kalimdor;Uldum;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;67.84;67.54;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;67.84;67.54;Pandaria;Jade Forest;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;61.45;49.72;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;43.39;65.67;Outland;Shattrath;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;59.33;83.45;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;69.13;52.13;Outland;Dark Portal;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;10
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;48.70;42.18;Northrend;Dalaran;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;33.73;57.91;Broken Isles;Azsuna;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;33.73;57.91;Broken Isles;Azsuna;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;29.99;26.18;Kalimdor;Exodar;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Stormwind Portal Room;;42.35;74.47;Eastern Kingdoms;Stormwind;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;Alliance;;;;;FALSE;1;0;
  Stormwind to Teldrassil;Old world;41.39;73.00;Eastern Kingdoms;Stormwind Harbor;43.23;16.16;Kalimdor;Rut'theran Village, Teldrassil;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Teldrassil to Exodar;Old world only;43.21;16.13;Kalimdor;Teldrassil;29.35;27.14;Kalimdor;Exodar;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Teldrassil to Stormwind;Old world only;43.65;16.83;Kalimdor;Rut'theran Village, Teldrassil;42.35;74.47;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Teleport: Boralus;;0;0;;Player;61.49;49.64;Kul Tiras;Boralus;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Dalaran - Broken Isles;;0;0;;Player;46.33;64.42;Broken Isles;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;;TRUE;1;10;
  Teleport: Dalaran - Northrend;;0;0;;Player;48.70;42.18;Northrend;Dalaran;TRUE;Spell;TRUE;1;;Mage;;;;TRUE;1;10;
  Teleport: Darnassus;New world;0;0;;Player;46.25;19.95;Kalimdor;Darnassus;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Darnassus;Old world;0;0;;Player;39.53;10.81;Kalimdor;Darnassus;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Dazar'alor;;0;0;;Player;58.26;62.04;Zandalar;Dazar'alor;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Exodar;;0;0;;Player;29.99;26.18;Kalimdor;Exodar;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Ironforge;;0;0;;Player;46.85;58.16;Eastern Kingdoms;Ironforge;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Orgrimmar;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Oribos;;0;0;;Player;45.61;50.70;Shadowlands;Oribos;TRUE;Spell;TRUE;1;;Mage;;;;TRUE;1;10;
  Teleport: Shattrath;;0;0;;Player;43.25;66.34;Outland;Shattrath;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Shattrath;;0;0;;Player;43.39;65.67;Outland;Shattrath;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Silvermoon;;0;0;;Player;56.16;13.18;Eastern Kingdoms;Silvermoon City;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Stonard;;0;0;;Player;52.78;79.73;Eastern Kingdoms;Stonard;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Stormshield;;0;0;;Player;71.69;49.14;Draenor;Stormshield;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Stormwind;;0;0;;Player;42.35;74.47;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Theramore;Old world;0;0;;Player;58.44;65.45;Kalimdor;Theramore;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Thunder Bluff;;0;0;;Player;45.60;54.12;Kalimdor;Thunder Bluff;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Tol Barad;;0;0;;Player;55.78;80.06;Tol Barad Peninsula;Hellscream's Grasp, Tol Barad;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Tol Barad;;0;0;;Player;73.68;60.92;Tol Barad Peninsula;Baradin Base Camp, Tol Barad;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Undercity;Old world on arrival;0;0;;Player;44.45;34.63;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Undercity;Current time on arrival;0;0;;Player;44.87;33.99;Eastern Kingdoms;Undercity;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Vale of Eternal Blossoms;;0;0;;Player;50.63;49.30;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  Teleport: Vale of Eternal Blossoms;;0;0;;Player;54.51;55.70;Pandaria;Vale of Eternal Blossoms;TRUE;Spell;TRUE;1;Alliance;Mage;;;;TRUE;1;10;
  Teleport: Warspear;;0;0;;Player;71.64;39.04;Draenor;Warspear;TRUE;Spell;TRUE;1;Horde;Mage;;;;TRUE;1;10;
  The Brassiest Knuckle;;0;0;;Player;59.23;41.51;Kalimdor;Brawl'gar Arena, Orgrimmar;TRUE;Item;TRUE;60;Horde;;;;;TRUE;2;10;
  The Brassiest Knuckle;Location is set outside of tram;0;0;;Player;43.33;71.96;Eastern Kingdoms;Bizmo's Brawlpub, Stormwind;TRUE;Item;TRUE;60;Alliance;;;;;TRUE;2;;30
  Theramore Boat to Wetlands;;59.24;66.52;Kalimdor;Theramore Isle, Dustwallow Marsh;46.19;55.40;Eastern Kingdoms;Menethil Harbor, Wetlands;FALSE;World;TRUE;;;;;;;TRUE;1;0;105
  Time-Lost Artifact;;0;0;;Player;88.02;70.87;Pandaria;Timeless Isle;TRUE;Item;TRUE;1;;;;;;TRUE;1;;
  Tiragarde Sound to Zandalar;;69.24;65.15;Kul Tiras;Tiragarde Sound;58.25;73.28;Zandalar;Zulzadar Harbor;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Tol Barad to Orgrimmar;;55.78;80.06;Tol Barad Peninsula;Hellscream's Grasp, Tol Barad;58.16;41.89;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Townlong Steppes to Isle of Thunder;Not reachable by flying;29.54;47.68;Pandaria;Townlong Steppes;19.11;9.39;Pandaria;Isle of Thunder;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Twilight Highlands to Orgrimmar;;60.11;56.02;Eastern Kingdoms;Twilight Highlands;58.28;41.82;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Twilight Highlands to Stormwind;;55.6;52.7;Eastern Kingdoms;Twilight Highlands;43.55;71.41;Eastern Kingdoms;Stormwind;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Ultrasafe Transporter: Gadgetzan;;0;0;;Player;56.79;79.15;Kalimdor;Gadgetzan, Tanaris;TRUE;Item;TRUE;240;;;;;Gnomish Engineering;TRUE;1;;
  Ultrasafe Transporter: Mechagon;Consumed on use;0;0;;Player;20.05;27.04;Kul Tiras;Mechagon;TRUE;Item;FALSE;1;;;;;;TRUE;1;;
  Ultrasafe Transporter: Toshley's Station;;0;0;;Player;42.52;32.36;Outland;Toshley's Station, Blade's Edge Mountains;TRUE;Item;TRUE;240;;;;;Gnomish Engineering;TRUE;1;;
  Uncercity to Dark Portal;Old world only;44.45;34.63;Eastern Kingdoms;Undercity;69.06;51.94;Outland;Dark Portal;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Tirisfal Glades;44.07;86.83;Eastern Kingdoms;Stranglethorn Vale;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Tirisfal Glades;84.59;72.89;Northrend;Howling Fjord;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Undercity Zeppelin;Outside;43.90;33.54;Eastern Kingdoms;Brill, Tirisfal Glades;58.60;44.28;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;;;;;;TRUE;1;0;
  Venthyr travel network;;21.0;50.5;Shadowlands;Sinfall, Revendreth;45.61;50.70;Shadowlands;Oribos;FALSE;Portal;TRUE;;;;;Venthyr;;TRUE;1;0;
  Violet Seal of the Grand Magus;;0;0;;Player;49.55;82.13;Eastern Kingdoms;Karazhan;TRUE;Item;TRUE;240;;;;;;TRUE;1;;
  Vol'dun to Boralus;;33.19;19.22;Zandalar;Vol'dun;59.5;54.4;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Warfront portal to Arathi Highlands;Up for a week every 3 weeks;58.37;72.06;Zandalar;Zulzadar Harbor;49.76;44.12;Eastern Kingdoms;Arathi Highlands;FALSE;Portal;FALSE;;Horde;;;;;TRUE;1;0;
  Warfront portal to Darkshore;Up for a week every 3 weeks;58.37;72.06;Zandalar;Zulzadar Harbor;46.39;22.76;Kalimdor;Darkshore;FALSE;Portal;FALSE;;Horde;;;;;TRUE;1;0;
  Warfront Arathi to Zulzadar Harbor;Up for a week every 3 weeks;49.76;44.12;Eastern Kingdoms;Arathi Highlands;58.37;72.06;Zandalar;Zulzadar Harbor;FALSE;Portal;FALSE;;Horde;;;;;TRUE;1;0;
  Warfront Darkshore to Zulzadar Harbor;Up for a week every 3 weeks;46.39;22.76;Kalimdor;Darkshore;58.37;72.06;Zandalar;Zulzadar Harbor;FALSE;Portal;FALSE;;Horde;;;;;TRUE;1;0;
  Wetlands Boat to Howling Fjord;;46.06;54.71;Eastern Kingdoms;Menethil Harbor, Wetlands;;;Northrend;Valgarde, Howling Fjord;FALSE;World;TRUE;;;;;;;TRUE;1;0;180
  Wetlands Boat to Theramore;;46.19;55.40;Eastern Kingdoms;Menethil Harbor, Wetlands;59.24;66.52;Kalimdor;Theramore Isle, Dustwallow Marsh;FALSE;World;TRUE;;;;;;;TRUE;1;0;105
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;47.4;76.4;Draenor;Spires of Arak;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;44.0;58.0;Draenor;Talador;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;58.1;70.4;Draenor;Shadowmoon Valley;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;27.8;52.4;Draenor;Nagrand;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;49.8;30.6;Draenor;Gorgrond;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Centrifuge;Teleports in varied locations in the zone. Destination is set to zone middle;0;0;;Player;33.5;29.9;Draenor;Frostfire Ridge;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Northrend;High up;0;0;;Player;22.17;63.21;Northrend;Borean Tundra;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;5;5
  Wormhole Generator: Northrend;;0;0;;Player;78.02;79.22;Northrend;Howling Fjord;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;5;
  Wormhole Generator: Northrend;;0;0;;Player;46.42;39.56;Northrend;Sholazar Basin;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;5;
  Wormhole Generator: Northrend;;0;0;;Player;43.85;22.33;Northrend;Icecrown;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;5;
  Wormhole Generator: Northrend;;0;0;;Player;58.62;16.97;Northrend;Storm Peaks;TRUE;Item;TRUE;240;;;;;Engineering;TRUE;1;5;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;46.72;49.89;Shadowlands;Oribos;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;72.23;68.90;Shadowlands;Bastion;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;60.50;20.88;Shadowlands;Maldraxxus;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;50.24;84.21;Shadowlands;Ardenweald;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;21.78;59.28;Shadowlands;Revendreth;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wormhole Generator: Shadowlands;https://www.wowhead.com/item=172924/wormhole-generator-shadowlands;0;0;;Player;20.00;8.54;Shadowlands;The Maw;TRUE;Item;TRUE;15;;;;;Engineering;TRUE;1;;
  Wrap of Unity;;0;0;;Player;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Item;TRUE;240;Horde;;;;;TRUE;1;10;
  Wrap of Unity;;0;0;;Player;42.35;74.47;Eastern Kingdoms;Stormwind;TRUE;Item;TRUE;240;Alliance;;;;;TRUE;1;10;
  Zandalar to Drustvar;;58.29;73.59;Zandalar;Zulzadar Harbor;25.93;67.32;Kul Tiras;Drustvar;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Zandalar to Mechagon;;56.29;70.62;Zandalar;Zulzadar Harbor;20.37;24.33;Kul Tiras;Mechagon;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Zandalar to Stormsong Valley;;58.29;73.59;Zandalar;Zulzadar Harbor;53.99;17.03;Kul Tiras;Stormsong Valley;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Zandalar to Tiragarde Sound;;58.29;73.59;Zandalar;Zulzadar Harbor;69.24;65.15;Kul Tiras;Tiragarde Sound;FALSE;Portal;TRUE;;Horde;;;;;TRUE;1;0;
  Zen Pilgrimage;Take steps south in turtle isle;44.86;27.65;Pandaria;Kun-lai Summit;58.60;44.28;Kalimdor;Orgrimmar;TRUE;Spell;TRUE;1;Horde;Monk;;;;TRUE;1;10;
  Zen Pilgrimage;Take steps south in turtle isle;44.86;27.65;Pandaria;Kun-lai Summit;42.35;74.47;Eastern Kingdoms;Stormwind;TRUE;Spell;TRUE;1;Alliance;Monk;;;;TRUE;1;10;
  Zen Pilgrimage;Take steps south in turtle isle;0;0;;Player;44.86;27.65;Pandaria;Kun-lai Summit;TRUE;Spell;TRUE;1;;Monk;;;;TRUE;2;10;15
  Zulzadar to Boralus;;47.28;78.46;Zandalar;Zuldazar;61.12;51.03;Kul Tiras;Boralus;FALSE;Portal;TRUE;;Alliance;;;;;TRUE;1;0;
  Ve'nari's Refuge to Tremaculum;;24.43;10.82;Shadowlands;The Maw;22.01;6.24;Shadowlands;The Tremaculum, The Maw;FALSE;Portal;TRUE;;;;;;;TRUE;0;;10
  Ve'nari's Refuge to Beast Warrens;;24.43;10.82;Shadowlands;The Maw;25.31;14.62;Shadowlands;The Beastwarrens, The Maw;FALSE;Portal;TRUE;;;;;;;TRUE;0;;5
  Scroll of Teleport: Theater of Pain;Consumed on use;0;0;;Player;62.80;22.20;Shadowlands;Theater of Pain, Maldraxxus;TRUE;Item;TRUE;1;;;;;;TRUE;1;10;`

  console.log(CsvToJson(csv, ';'))
}

export default GenerateTeleportJson