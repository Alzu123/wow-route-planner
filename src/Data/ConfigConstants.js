import continents from "./ContinentDB"
import Player from "./Player"

export const TIME_IN_LOADING_SCREENS = 15 // Seconds
export const LOADING_SCREEN_PENALTY = 20 // Second-equivalents
export const GROUND_TRAVEL_PENALTY = 1.5 // Multiplier on how much time is spent moving around obstacles, i.e. not in a straight line
export const PLAYER_BASE_SPEED = 7 // Yards per second
export const PLAYER_SPEED_MODIFIER = 4.1 // Master flying
export const DEFAULT_ROUTE_ORDER = 'preference'
export const MAX_TELEPORTS_TO_USE = 6
export const MAX_COST_INCREASE_PER_NODE = 1.2 // Multiplier

export const DEFAULT_CONTINENT = continents.KALIMDOR
export const DEFAULT_PLAYER = new Player('Horde', 'Druid', 'Troll', ['Herbalism', 'Alchemy'], 'Night Fae')

// Canvas element settings
export const CANVAS_START_COLOR = 'green'
export const CANVAS_START_SIZE = 6

export const CANVAS_END_COLOR = 'red'
export const CANVAS_END_SIZE = 6

export const CANVAS_TELEPORT_COLOR = 'purple'
export const CANVAS_ACTIVE_TELEPORT_COLOR = 'yellow'
export const CANVAS_TELEPORT_SIZE = 5

export const CANVAS_TRAVEL_TELEPORT_COLOR = 'purple'
export const CANVAS_TRAVEL_FLY_COLOR = 'cyan'
export const CANVAS_TRAVEL_LINE_WIDTH = 5