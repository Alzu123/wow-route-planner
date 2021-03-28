import CsvToJson from '../Components/Calculations/CsvToJson'

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
  const csv = `;;Origin;;;;Destination;;;;;;;;;
  ;;Coordinates;;;;Coordinates;;;;;;;;;
  Name;Note;x;y;Continent;Description;x;y;Continent;Description;From player;Type;Enabled;Cooldown;Restrictions;Instant
  Cloak of Coordination;;0;0;;Cloak of Coordination;58.3;43.3;Kalimdor;Orgrimmar;TRUE;Item;TRUE;120;;TRUE
  Direbrew's Remote;;0;0;;Direbrew's Remote;47.4;68.3;Eastern Kingdoms;BRD;TRUE;Item;TRUE;60;;TRUE
  Jaina's Locket;Multiple people can use;0;0;;Jaina's Locket;49.9;41.1;Northrend;Old Dalaran;TRUE;Item;TRUE;60;;TRUE
  Blessed Medallion of Karabor;;0;0;;Blessed Medallion of Karabor;75.0;80.7;Outland;Black Temple;TRUE;Item;TRUE;15;;TRUE
  Admiral's Compass;Horde version;0;0;;Admiral's Compass;33;39;Draenor;Garrison Shipyard;TRUE;Item;TRUE;240;;TRUE
  Time-Lost Artifact;;0;0;;Time-Lost Artifact;88.6;70.8;Pandaria;Timeless Isle;TRUE;Item;TRUE;1;;TRUE
  Violet Seal of the Grand Magus;;0;0;;Violet Seal of the Grand Magus;50.4;81.8;Eastern Kingdoms;Karazhan;TRUE;Item;TRUE;240;;TRUE
  Commander's Signet of Battle;;0;0;;Commander's Signet of Battle;58.1;71.3;Zandalar;Zulzadar Harbor;TRUE;Item;TRUE;30;;TRUE
  Dreamwalk;;0;0;;Dreamwalk;53.8;43.3;Kalimdor;Mount Hyjal;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;40.3;63.1;Kalimdor;Feralas;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;46.8;79.2;Eastern Kingdoms;Duskwood;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;52.9;17.1;Kalimdor;Moonglade;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;68;57.4;Northrend;Grizzly Hills;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;54.9;38.3;Eastern Kingdoms;Hinterlands;TRUE;Spell;TRUE;1;Druid only;TRUE
  Dreamwalk;;0;0;;Dreamwalk;31;26.3;Broken Isles;Val'sharah;TRUE;Spell;TRUE;1;Druid only;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;61.5;36.4;Pandaria;Jade Forest;FALSE;Portal;TRUE;;Horde only;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;58.1;60.8;Zulzadar;Dazar'alor;FALSE;Portal;TRUE;;Horde only;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;42.5;65.3;Outland;Shattrath;FALSE;Portal;TRUE;;Horde only;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;57.3;84.3;Kalimdor;Caverns of Time;FALSE;Portal;TRUE;;Horde only;TRUE
  Orgrimmar Portal Room;Bugs for some characters;58.3;43.3;Kalimdor;Orgrimmar;52.63;85.2;Eastern Kingdoms;Blasted Lands;FALSE;Portal;TRUE;;Horde only;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;49.9;41.1;Northrend;Old Dalaran;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;33.1;56.3;Broken Isles;Azsuna;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;72.3;43.7;Draenor;Warspear;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Portal Room;;58.3;43.3;Kalimdor;Orgrimmar;55.5;14.3;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;;TRUE
  ;;58.1;60.8;Zulzadar;Dazar'alor;43.1;79.2;Kalimdor;Silithus;FALSE;Portal;TRUE;;Horde only;TRUE
  ;;58.1;60.8;Zulzadar;Dazar'alor;47.1;55.4;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;Horde only;TRUE
  ;;58.1;60.8;Zulzadar;Dazar'alor;58.3;43.3;Kalimdor;Orgrimmar;FALSE;Portal;TRUE;;Horde only;TRUE
  ;;58.1;60.8;Zulzadar;Dazar'alor;55.5;14.3;Eastern Kingdoms;Silvermoon City;FALSE;Portal;TRUE;;Horde only;TRUE
  ;Destination not on world maps;58.1;60.8;Zulzadar;Dazar'alor;;;Nazjatar;Nazjatar;FALSE;Portal;TRUE;;Horde only;TRUE
  ;Unreachable by flying;42.5;65.3;Outland;Shattrath;55;3.2;Eastern Kingdoms;Isle of Quel'Danas;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.3;43.3;Kalimdor;Orgrimmar;;;Deepholm;Deepholm;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;;58.3;43.3;Kalimdor;Orgrimmar;53.8;43.3;Kalimdor;Mount Hyjal;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;;58.3;43.3;Kalimdor;Orgrimmar;58.4;54.2;Eastern Kingdoms;Twilight Highlands;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;;58.3;43.3;Kalimdor;Orgrimmar;34.3;61.9;Eastern Kingdoms;Vashj'ir;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;Destination not on world maps;58.3;43.3;Kalimdor;Orgrimmar;;;Tol Barad;Tol Barad;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Cataclysm Portals;;58.3;43.3;Kalimdor;Orgrimmar;48.5;87.5;Kalimdor;Uldum;FALSE;Portal;TRUE;;;TRUE
  Orgrimmar Zeppelin;;58.3;43.3;Kalimdor;Orgrimmar;43.6;34.2;Kalimdor;Undercity;FALSE;Portal;TRUE;;;FALSE
  Orgrimmar Zeppelin;;58.3;43.3;Kalimdor;Orgrimmar;44;87.3;Eastern Kingdoms;Stranglethorn Vale;FALSE;World;TRUE;;;FALSE
  Orgrimmar Zeppelin;;58.3;43.3;Kalimdor;Orgrimmar;19.9;65.1;Northrend;Borean Tundra;FALSE;World;TRUE;;;FALSE
  Orgrimmar Zeppelin;;58.3;43.3;Kalimdor;Orgrimmar;47.1;55.4;Kalimdor;Thunder Bluff;FALSE;World;TRUE;;;FALSE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  MoP Challenger's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  WoD Walords's Path;;0;0;;;;;;;TRUE;Spell;TRUE;480;;TRUE
  Hearthstone;;0;0;;Hearthstone;46.8;51.2;Shadowlands;Oribos;TRUE;Item;TRUE;15;;TRUE
  Dalaran Hearthstone;;0;0;;Dalaran Hearthstone;46.4;66.3;Broken Isles;Dalaran;TRUE;Item;TRUE;20;;TRUE
  Garrison Hearthstone;;0;0;;Garrison Hearthstone;34;37.4;Draenor;Garrison;TRUE;Item;TRUE;15;Horde only;TRUE
  Darkmoon Faerie Mystic Mage;Up for a week every month;58.3;43.3;Kalimdor;Orgrimmar;47.1;55.4;Kalimdor;Thunder Bluff;FALSE;Portal;TRUE;;;TRUE
  ;Up for a week every 3 weeks;58.1;71.3;Zandalar;Zulzadar Harbor;;;;Darkshore;FALSE;Portal;TRUE;;;TRUE
  ;Up for a week every 3 weeks;58.1;71.3;Zandalar;Zulzadar Harbor;;;;Arathi Highlands;FALSE;Portal;TRUE;;;TRUE
  Argent Crusader's Tabard;;0;0;;;43.3;19.9;Northrend;Icecrown;TRUE;Item;TRUE;30;;TRUE
  ;Old world only;;;;Darnassus;;;;Exodar;FALSE;World;TRUE;;;FALSE
  ;Old world?;;;;Wetlands;;;;Dustwallow Marsh;FALSE;World;TRUE;;;FALSE`

  CsvToJson(csv, ';')//console.log(CsvToJson(csv, ';'))
}

export default GenerateTeleportJson