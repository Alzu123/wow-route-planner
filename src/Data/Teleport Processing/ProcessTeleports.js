import { DEFAULT_PLAYER } from '../ConfigConstants'
import Point from '../Point'
import CalculateTeleportCost from './CalculateTeleportCost'

const ProcessTeleports = (teleports, newPosition) => {
  const playerInfo = DEFAULT_PLAYER

  // The default teleport generation removes the Point constructs so readd them
  teleports = teleports.map(teleport => ({...teleport, origin: {...teleport.origin, position: new Point(teleport.origin.position.x, teleport.origin.position.y, teleport.origin.position.continent)}}))
                       .map(teleport => ({...teleport, destination: {...teleport.destination, position: new Point(teleport.destination.position.x, teleport.destination.position.y, teleport.destination.position.continent)}}))

  // Disable teleports based on restrictions
  teleports = teleports.map(teleport => teleport.restrictions.race !== '' && teleport.restrictions.race !== playerInfo.race ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.class !== '' && teleport.restrictions.class !== playerInfo.class ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.faction !== '' && teleport.restrictions.faction !== playerInfo.faction ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.covenant !== '' && teleport.restrictions.covenant !== playerInfo.covenant ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.profession !== '' && (teleport.restrictions.profession !== playerInfo.profession1 || teleport.restrictions.profession !== playerInfo.profession2) ? {...teleport, enabled: false} : teleport)

  // Handle Adepts Guide to Dimensional Rifting as it's dependant on the weekday
  teleports = teleports.map(function(teleport) {
    if (teleport.name === 'Adept\'s Guide to Dimensional Rifting') {
      let day
      switch (new Date().getDay()) {
        case 0:
          day = 'Sunday';
          break;
        case 1:
          day = 'Monday';
          break;
        case 2:
          day = 'Tuesday';
          break;
        case 3:
          day = 'Wednesday';
          break;
        case 4:
          day = 'Thursday';
          break;
        case 5:
          day = 'Friday';
          break;
        case 6:
          day = 'Saturday';
          break;
        default:
          day = ''
      }
      if (!teleport.note.includes(day)) {
        return ({...teleport, enabled: false})
      }
    }
    return teleport
  })

  
  // Update origins for teleports from player
  if (newPosition) {
    teleports = teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, position: new Point(newPosition.x, newPosition.y, newPosition.continent)}} : teleport)
  }
  
  // Calculate costs for teleports
  teleports = teleports.map(teleport => ({...teleport, cost: CalculateTeleportCost(teleport)}))

  return teleports
                  
}

export default ProcessTeleports