import {PlayerInfo} from '../Player'
import AddTeleportCost from './AddTeleportCost'

export const ProcessTeleports = (teleports, newPosition) => {

  if (newPosition === undefined) {
    newPosition = {
      coordinates: PlayerInfo.position.coordinates,
      continent: PlayerInfo.position.continent
    }
  }

  const toggledTeleports = teleports.map(teleport => teleport.restrictions.race !== '' && teleport.restrictions.race !== PlayerInfo.race ? {...teleport, enabled: false} : teleport)
                                    .map(teleport => teleport.restrictions.class !== '' && teleport.restrictions.class !== PlayerInfo.class ? {...teleport, enabled: false} : teleport)
                                    .map(teleport => teleport.restrictions.faction !== '' && teleport.restrictions.faction !== PlayerInfo.faction ? {...teleport, enabled: false} : teleport)
                                    .map(teleport => teleport.restrictions.profession !== '' && (teleport.restrictions.profession !== PlayerInfo.profession1 || teleport.restrictions.profession !== PlayerInfo.profession2) ? {...teleport, enabled: false} : teleport)
  

  const updatedPlayerTeleports = toggledTeleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, coordinates: newPosition.coordinates, continent: newPosition.continent}} : teleport)
  
  const costCalculatedTeleports = AddTeleportCost(updatedPlayerTeleports)
  return costCalculatedTeleports
                  
}