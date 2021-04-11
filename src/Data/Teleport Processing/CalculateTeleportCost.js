const CalculateTeleportCost = (teleport) => {
  const timeInLoadingScreens = 15 // In seconds
  const loadingScreenAnnoyance = 20 // Variable for estimating how much being stuck in a loading screen annoys you

  let totalCost = teleport.numLoadingScreens * (timeInLoadingScreens + loadingScreenAnnoyance)
  totalCost += teleport.castTime
  totalCost += teleport.travelTime
  
  return totalCost
}

export default CalculateTeleportCost