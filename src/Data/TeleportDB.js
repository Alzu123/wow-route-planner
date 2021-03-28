export const preprocessedTeleports = [
  {
    name: "Orgrimmar to Uldum",
    description: "",
    origin: {
      coordinates: {x: 58.3, y: 43.3},
      description: "Orgirmmar Elemental Portals",
      continent: "Kalimdor",
    },
    destination: {
      coordinates: {x: 48.6, y: 87.4},
      description: "Ramkahen, Uldum",
      continent: "Kalimdor",
    },
    fromPlayer: false,
    type: "Portal",
    enabled: true,
  },
  {
    name: "Dreamgrove to Feralas",
    description: "",
    origin: {
      coordinates: {x: 0, y: 0},
      description: "Use Dreamwalk to Dreamgrove",
      continent: "",
    },
    destination: {
      coordinates: {x: 40.3, y: 63.1},
      description: "Emerald Dragon, Northern Feralas",
      continent: "Kalimdor",
    },
    fromPlayer: true,
    type: "Spell",
    enabled: true,
  },
  {
    name: "Orgrimmar to Mount Hyjal",
    description: "",
    origin: {
      coordinates: {x: 58.3, y: 43.3},
      description: "Orgirmmar Elemental Portals",
      continent: "Kalimdor",
    },
    destination: {
      coordinates: {x: 53.8, y: 27.6},
      description: "Mount Hyjal",
      continent: "Kalimdor",
    },
    fromPlayer: false,
    type: "Portal",
    enabled: true,
  },
  {
    name: "Dreamgrove to Moonglade",
    description: "",
    origin: {
      coordinates: {x: 0, y: 0},
      description: "Use Dreamwalk to Dreamgrove",
      continent: "",
    },
    destination: {
      coordinates: {x: 52.9, y: 17.1},
      description: "Moonglade",
      continent: "Kalimdor",
    },
    fromPlayer: true,
    type: "Spell",
    enabled: true,
  },
  {
    name: "Hearthstone to Orgrimmar",
    description: "",
    origin: {
      coordinates: {x: 0, y: 0},
      description: "Use Hearthstone",
      continent: "",
    },
    destination: {
      coordinates: {x: 58.3, y: 43.3},
      description: "Orgrimmar",
      continent: "Kalimdor",
    },
    fromPlayer: true,
    type: "Item",
    enabled: true,
  },
  {
    name: "Orgrimmar to Caverns of Time",
    description: "",
    origin: {
      coordinates: {x: 58.3, y: 43.3},
      description: "Orgirmmar Portal Room",
      continent: "Kalimdor",
    },
    destination: {
      coordinates: {x: 57.3, y: 84.3},
      description: "Caverns of Time, Tanaris",
      continent: "Kalimdor",
    },
    fromPlayer: false,
    type: "Portal",
    enabled: true,
  },
  {
    name: "Orgrimmar to Blasted Lands",
    description: "",
    origin: {
      coordinates: {x: 58.3, y: 43.3},
      description: "Orgirmmar Portal Room",
      continent: "Kalimdor",
    },
    destination: {
      coordinates: {x: 52.63, y: 85.2},
      description: "Dark Portal, Blasted Lands",
      continent: "Eastern Kingdoms",
    },
    fromPlayer: false,
    type: "Portal",
    enabled: true,
  },
]

export const defaultTeleports = preprocessedTeleports.map((teleport, i) => ({...teleport, id: i + 1}))