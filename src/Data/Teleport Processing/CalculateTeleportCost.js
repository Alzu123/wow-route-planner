import {TIME_IN_LOADING_SCREENS, LOADING_SCREEN_PENALTY} from '../ConfigConstants'

const CalculateTeleportCost = (teleport) => {
  const timeInLoadingScreens = TIME_IN_LOADING_SCREENS // In seconds
  const loadingScreenAnnoyance = LOADING_SCREEN_PENALTY // Variable for estimating how much being stuck in a loading screen annoys you

  let totalCost = teleport.numLoadingScreens * (timeInLoadingScreens + loadingScreenAnnoyance)
  totalCost += teleport.castTime
  totalCost += teleport.travelTime
  
  return totalCost
}

export default CalculateTeleportCost