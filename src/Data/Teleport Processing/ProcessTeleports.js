import PlayerInfo from '../Player'
import Point from '../Point'
import AddTeleportCost from './AddTeleportCost'

export const ProcessTeleports = (teleports, newPosition) => {

  if (newPosition === undefined) {
    newPosition = PlayerInfo.position
  }

  // The default teleport generation removes the Point constructs so readd them
  teleports = teleports.map(teleport => ({...teleport, origin: {...teleport.origin, position: new Point(teleport.origin.position.x, teleport.origin.position.y, teleport.origin.position.continent)}}))
                       .map(teleport => ({...teleport, destination: {...teleport.destination, position: new Point(teleport.destination.position.x, teleport.destination.position.y, teleport.destination.position.continent)}}))

  // Disable teleports based on restrictions
  teleports = teleports.map(teleport => teleport.restrictions.race !== '' && teleport.restrictions.race !== PlayerInfo.race ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.class !== '' && teleport.restrictions.class !== PlayerInfo.class ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.faction !== '' && teleport.restrictions.faction !== PlayerInfo.faction ? {...teleport, enabled: false} : teleport)
                       .map(teleport => teleport.restrictions.profession !== '' && (teleport.restrictions.profession !== PlayerInfo.profession1 || teleport.restrictions.profession !== PlayerInfo.profession2) ? {...teleport, enabled: false} : teleport)

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
  teleports = teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, position: new Point(newPosition.x, newPosition.y, newPosition.continent)}} : teleport)

  // Calculate costs for teleports
  teleports = AddTeleportCost(teleports)

  return teleports
                  
}