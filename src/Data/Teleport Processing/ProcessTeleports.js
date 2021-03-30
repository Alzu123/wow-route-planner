import {PlayerInfo} from '../Player'

export const ProcessTeleports = (teleports, newPosition) => {

  if (newPosition === undefined) {
    newPosition = {
      coordinates: PlayerInfo.position.coordinates,
      continent: PlayerInfo.position.continent
    }
  }

  const processedTeleports = []
  for (let i = 0; i < teleports.length; i++) {
    const teleport = teleports[i]

    const raceRestriction = teleport.restrictions.race
    if (raceRestriction !== '' && raceRestriction !== PlayerInfo.race) {
      teleport.enabled = false
    }

    const classRestriction = teleport.restrictions.class
    if (classRestriction !== '' && classRestriction !== PlayerInfo.class) {
      teleport.enabled = false
    }

    const factionRestriction = teleport.restrictions.faction
    if (factionRestriction !== '' && factionRestriction !== PlayerInfo.faction) {
      teleport.enabled = false
    }

    const professionRestriction = teleport.restrictions.profession
    if (professionRestriction !== '' && (professionRestriction !== PlayerInfo.profession1 || professionRestriction !== PlayerInfo.profession2)) {
      teleport.enabled = false
    }

    if (teleport.fromPlayer) {
      teleport.origin.coordinates = newPosition.coordinates
      teleport.origin.continent = newPosition.continent
    }

    processedTeleports.push(teleport)
  }

  return processedTeleports

/*return teleports.map(teleport => teleport.restrictions.race !== '' && teleport.restrictions.race !== PlayerInfo.race ? {...teleport, enabled: false} : teleport)
                  .map(teleport => teleport.restrictions.class !== '' && teleport.restrictions.class !== PlayerInfo.class ? {...teleport, enabled: false} : teleport)
                  .map(teleport => teleport.restrictions.faction !== '' && teleport.restrictions.faction !== PlayerInfo.faction ? {...teleport, enabled: false} : teleport)
                  .map(teleport => teleport.restrictions.profession !== '' && (teleport.restrictions.profession !== PlayerInfo.profession1 || teleport.restrictions.profession !== PlayerInfo.profession2) ? {...teleport, enabled: false} : teleport)
                  .map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, coordinates: newPosition.coordinates, continent: newPosition.continent}} : teleport) */
}